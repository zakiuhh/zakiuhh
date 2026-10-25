"""
Builds every SVG in the profile README (orbit + pipeline design), light and dark.

    pip install fonttools brotli
    python scripts/build_assets.py

Fonts (Space Grotesk, JetBrains Mono, both OFL) are subset per SVG and embedded,
so GitHub renders the real typefaces.

Live GitHub data (stats card, project cards, activity feed, contribution count)
is fetched from the public API and cached in data/github.json, so a run with no
network or an API hiccup falls back to the last good numbers. Contribution counts
need a token (GH_TOKEN or GITHUB_TOKEN); everything else works without one.

Edit the CONTENT section to change any text.
"""
import base64
import io
import json
import math
import os
import random
import urllib.request
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape

from fontTools.subset import Options, Subsetter
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
ASSETS, DATA, FONTS = ROOT / "assets", ROOT / "data", ROOT / "fonts"
USER = "zakiuhh"

# ═══════════════════════════════ CONTENT ═══════════════════════════════

HANDLE = "~/zakiuhh"
NAME = ["Zaki", "Ul Hassan"]
TAGLINE = "CS Student, Developer & Creator building things that matter."
STATUS = "status: building things that matter"

ORBIT = [  # (ring, tools)
    ("code", ["C++", "Python", "JavaScript", "Java (OOPs)"]),
    ("dev", ["HTML5", "CSS3", "Web Dev"]),
    ("tools", ["Git", "GitHub", "Linux", "Illustrator", "CapCut"]),
]

FACTS = [("Based in", "Wah Cantt, Pakistan"), ("Education", "COMSATS Wah · BS CS"),
         ("Focus", "Web Dev & Design")]

STAGES = [  # (stage, title, subtitle, when)
    ("init", "COMSATS Wah", "BS Computer Science", "Student"),
    ("build", "Core Software", "C++, Python, Web & Robots", "Active"),
    ("certify", "GenAI & Prompting", "Microsoft & MTF Institute", "Certified"),
    ("creative", "Media & Design", "Video Editing & Graphics", "Certified"),
    ("deploy", "Your team", "Software / Web role", "now"),
]
LOG = [  # (when, stage, passed, text)
    ("2024", "init", True, "BS Computer Science, COMSATS University Wah"),
    ("2025", "build", True, "shipped What Next?, Coloristan & Zenith C++ IDE"),
    ("2025", "certify", True, "Career Essentials in GenAI (Microsoft) & Prompt Eng (MTF)"),
    ("2026", "creative", True, "certified in Video Editing (Digiskills) & Design (Canva)"),
    ("now", "deploy", False, "open to software & web opportunities"),
]

# metrics are computed in build_metrics() from CERTS, PROJECTS and live GitHub data
CORE_DOMAINS = "3+"

PROJECTS = [  # slug, type, title, chip, featured, desc, stack, repo, shipped
    ("whatnext", "ai", "What Next?", "BYOK AI", True,
     "Tell it what you finished and get your next career move, courses and reads powered by Groq AI.",
     ["JavaScript", "Groq AI", "HTML5", "CSS3"], "what-s-next", True),
    ("coloristan", "web", "Coloristan", "color tool", True,
     "Offline color naming web app that matches any color using RGB Euclidean distance.",
     ["HTML5", "CSS3", "JavaScript", "Algorithms"], "coloristan", True),
    ("zenith", "wasm", "Zenith C++ IDE", "in-browser", False,
     "Near-instant, serverless C++ IDE running entirely in-browser with WebAssembly.",
     ["C++", "WebAssembly", "JavaScript"], "zenith-cpp", True),
    ("deckydocu", "concept", "deckyDocu Concept", "AI defense", False,
     "Autonomous combat drone concept with AI fire control, adaptive stealth and swarm mission profiles.",
     ["HTML5", "CSS3", "AI Research"], "deckyDocu", False),  # concept, so not counted as shipped
]
TYPE_COLOR = {"ai": "genai", "web": "dev", "wasm": "code", "concept": "genai"}

EMAIL = "zakiulhassan105@gmail.com"

STARTUP = dict(
    title="Kitaabi Keera", role="Co-founder", chip="under construction",
    desc="AI-powered exam prep for Pakistani board students (FBISE and Punjab Board, SSC and HSSC). "
         "The name means bookworm in Urdu.",
    stack=[])

PORTFOLIO_URL = None  # set to your portfolio link; the card then shows it instead of "coming soon"
CREATIVE = [  # (label, title, text, tags)
    ("video", "Video editing", "Helped grow a YouTube channel to 20K+ subscribers. Digiskills certified.",
     ["CapCut", "YouTube", "Videography"]),
    ("design", "Graphic design", "Brand identity, banners and social posts, including the Kitaabi Keera brand.",
     ["Illustrator", "Canva"]),
    ("lead", "Team lead", "Graphics team lead at ZKF, a non-profit.", ["ZKF", "Leadership"]),
]

OPEN_TO = ["Software", "Web"]
ASK_ME = ["Web Dev", "WebAssembly", "Prompt Engineering", "Graphic Design", "Video Editing"]

ENDPOINTS = [("university", "GET", "/university", "COMSATS Wah", False),
             ("linkedin", "GET", "/linkedin", "in/zakiuh", False),
             ("github", "GET", "/github", "zakiuhh", False),
             ("contact", "POST", "/contact", EMAIL, True)]

CERTS = ["microsoft-generative-ai-career-essentials", "mtf-prompt-engineering-professional",
         "nasba-ethics-in-genai", "digiskills-video-editing", "canva-graphics-designing"]
LEARNING = ["WebAssembly", "Groq AI", "Rust", "Prompt Engineering", "Full-Stack Dev"]
FUN_FACT = "Fun fact: Fueled by Chai ☕, badminton rallies, and late-night research rabbit holes."

# ═══════════════════════════════ THEMES ═══════════════════════════════

THEMES = {
    "dark": dict(hero="#11173A", surface="#141B40", log="#0E1433", chip="#1C2452", line="#262F63",
                 line2="#3A4583", track="#232B5C", text="#EEF0FA", muted="#A9AFD0", faint="#7880A8",
                 accent="#9DB1FF", sun="#F5B544", sunText="#F5B544", sunInk="#3A2600",
                 genai="#B3A6FF", ml="#5FD4C2", ops="#FF9B78",
                 code="#B3A6FF", dev="#5FD4C2", tools="#FF9B78",
                 ok="#5FD4C2", okInk="#06322B", okText="#8FE6D8", okBg="#163a4a",
                 okLine="#2f7d78", star="#FFFFFF", starOp=".9"),
    "light": dict(hero="#F5F7FD", surface="#FFFFFF", log="#F7F8FD", chip="#EEF1FA", line="#DDE2F0",
                  line2="#B7BFD9", track="#E3E7F3", text="#141A3A", muted="#4B5275", faint="#6B7194",
                  accent="#3550D4", sun="#F2A91F", sunText="#A8640A", sunInk="#3A2600",
                  genai="#5B45D6", ml="#0E8576", ops="#CC4D23",
                  code="#5B45D6", dev="#0E8576", tools="#CC4D23",
                  ok="#0E8576", okInk="#FFFFFF", okText="#0B6B5F", okBg="#E3F3F0",
                  okLine="#9ACFC6", star="#3550D4", starOp=".45"),
}

FONT_FILES = {("sg", 400): "SpaceGrotesk-Regular.ttf", ("sg", 500): "SpaceGrotesk-Medium.ttf",
              ("sg", 700): "SpaceGrotesk-Bold.ttf", ("jb", 400): "JetBrainsMono-Regular.ttf",
              ("jb", 500): "JetBrainsMono-Medium.ttf"}
FAMILY = {"sg": "Space Grotesk", "jb": "JetBrains Mono"}
STACK = {"sg": "'Space Grotesk','Segoe UI',system-ui,sans-serif",
         "jb": "'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"}

_fonts = {}


def font(fam, w):
    key = (fam, w)
    if key not in _fonts:
        f = TTFont(FONTS / FONT_FILES[key])
        _fonts[key] = (f, f.getBestCmap(), f["hmtx"].metrics, f["head"].unitsPerEm)
    return _fonts[key]


def measure(s, fam="sg", w=400, size=14, ls=0):
    _, cmap, hmtx, upm = font(fam, w)
    total = 0
    for ch in s:
        g = cmap.get(ord(ch))
        total += (hmtx[g][0] if g else upm * 0.55) * size / upm
    return total + ls * max(len(s) - 1, 0)


def wrap(s, width, fam="sg", w=400, size=14):
    lines, cur = [], ""
    for word in s.split():
        trial = (cur + " " + word).strip()
        if cur and measure(trial, fam, w, size) > width:
            lines.append(cur)
            cur = word
        else:
            cur = trial
    return lines + [cur]


class SVG:
    """Collects body markup and the characters used per font, then embeds subset fonts."""

    def __init__(self, w, h, label):
        self.w, self.h, self.label = w, h, label
        self.body, self.css = [], []
        self.used = defaultdict(set)

    def add(self, s):
        self.body.append(s)

    def text(self, x, y, s, fill, size=14, fam="sg", w=400, anchor=None, extra="", ls=None):
        self.used[(fam, w)].update(s)
        a = f' text-anchor="{anchor}"' if anchor else ""
        l = f' letter-spacing="{ls}"' if ls is not None else ""
        self.add(f'<text x="{x:.1f}" y="{y:.1f}" font-family="{STACK[fam]}" font-size="{size}" '
                 f'font-weight="{w}" fill="{fill}"{a}{l} {extra}>{escape(s)}</text>')

    def font_faces(self):
        out = []
        for (fam, w), chars in sorted(self.used.items()):
            f = TTFont(FONTS / FONT_FILES[(fam, w)])
            opts = Options()
            opts.flavor = "woff2"
            opts.layout_features = ["kern", "liga"]
            sub = Subsetter(opts)
            sub.populate(text="".join(chars) + " ")
            sub.subset(f)
            buf = io.BytesIO()
            f.flavor = "woff2"
            f.save(buf)
            b64 = base64.b64encode(buf.getvalue()).decode()
            out.append(f"@font-face{{font-family:'{FAMILY[fam]}';font-weight:{w};"
                       f"src:url(data:font/woff2;base64,{b64}) format('woff2')}}")
        return "".join(out)

    def render(self):
        css = (self.font_faces() + "".join(self.css) +
               "@media (prefers-reduced-motion:reduce){*{animation:none!important}}")
        return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {self.w} {self.h}" width="{self.w}" '
                f'height="{self.h}" role="img" aria-label="{escape(self.label)}"><style>{css}</style>'
                + "".join(self.body) + "</svg>")


def card(x, y, w, h, fill, stroke, rx=16, dash=False):
    d = ' stroke-dasharray="5 4"' if dash else ""
    return (f'<rect x="{x+.5:.1f}" y="{y+.5:.1f}" width="{w-1:.1f}" height="{h-1:.1f}" rx="{rx}" '
            f'fill="{fill}" stroke="{stroke}"{d}/>')


def pulse_dot(cx, cy, color, r=4.5):
    return (f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{color}"/>'
            f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{color}" opacity=".7">'
            f'<animate attributeName="r" values="{r};{r*2.6}" dur="1.8s" repeatCount="indefinite"/>'
            f'<animate attributeName="opacity" values=".7;0" dur="1.8s" repeatCount="indefinite"/></circle>')


# ═══════════════════════════════ DATA ═══════════════════════════════

API = "https://api.github.com"
CACHE = DATA / "github.json"


def token():
    return os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")


def _request(url, payload=None):
    headers = {"Accept": "application/vnd.github+json", "User-Agent": f"{USER}-profile-builder"}
    if token():
        headers["Authorization"] = f"Bearer {token()}"
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(url, data=data, headers=headers)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def fetch_profile():
    u = _request(f"{API}/users/{USER}")
    return {"public_repos": u["public_repos"], "followers": u["followers"]}


def fetch_repos():
    repos = _request(f"{API}/users/{USER}/repos?per_page=100&type=owner&sort=pushed")
    return [{"name": r["name"], "stars": r["stargazers_count"], "language": r["language"],
             "pushed_at": r["pushed_at"], "fork": r["fork"]} for r in repos]


def simplify_event(e):
    """Reduce a raw public event to the few fields the activity card needs, or None to skip it."""
    kind, p = e.get("type"), e.get("payload") or {}
    repo = (e.get("repo") or {}).get("name", "").split("/")[-1]
    when = e.get("created_at")
    if kind == "PushEvent":
        commits = p.get("commits") or []
        n = p.get("size") or len(commits) or 1
        msg = (commits[-1].get("message") or "").splitlines()[0] if commits else ""
        text = msg or f"pushed {n} commit{'s' if n != 1 else ''}"
        if msg and n > 1:
            text += f" (+{n - 1} more)"
        return {"kind": "push", "repo": repo, "when": when, "text": text}
    if kind == "PullRequestEvent":
        pr = p.get("pull_request") or {}
        action = "merged" if pr.get("merged") else p.get("action", "updated")
        return {"kind": "pr", "repo": repo, "when": when, "text": f"{action} PR: {pr.get('title', '')}".strip()}
    if kind == "CreateEvent" and p.get("ref_type") == "repository":
        return {"kind": "new", "repo": repo, "when": when, "text": "created repository"}
    return None


def fetch_events():
    raw = _request(f"{API}/users/{USER}/events/public?per_page=50")
    return [ev for ev in map(simplify_event, raw) if ev][:5]


def fetch_contributions():
    if not token():
        raise RuntimeError("no token, skipping contribution count")
    q = "query($l:String!){user(login:$l){contributionsCollection{contributionCalendar{totalContributions}}}}"
    out = _request(f"{API}/graphql", {"query": q, "variables": {"l": USER}})
    return out["data"]["user"]["contributionsCollection"]["contributionCalendar"]["totalContributions"]


def load_github():
    """Fetch live data, falling back per key to the cached copy. Returns a dict (keys may be missing)."""
    cache = json.loads(CACHE.read_text()) if CACHE.exists() else {}
    data = dict(cache)
    for key, fn in [("profile", fetch_profile), ("repos", fetch_repos),
                    ("events", fetch_events), ("contributions", fetch_contributions)]:
        try:
            data[key] = fn()
        except Exception as ex:
            print(f"{key}: live fetch failed ({ex}); using cache" if key in cache else
                  f"{key}: live fetch failed ({ex}); no cache yet")
    if data != cache:  # only touch the file when something changed, so Actions commits stay meaningful
        DATA.mkdir(exist_ok=True)
        CACHE.write_text(json.dumps(data, indent=1, sort_keys=True))
    return data


def repo_info(data, name):
    for r in data.get("repos") or []:
        if r["name"].lower() == name.lower():
            return r
    return None


def ago(iso, long=False):
    d = datetime.now(timezone.utc) - datetime.fromisoformat(iso.replace("Z", "+00:00"))
    sec = int(d.total_seconds())
    if sec < 3600:
        n, unit = max(sec // 60, 1), "m"
    elif sec < 86400:
        n, unit = sec // 3600, "h"
    else:
        n, unit = sec // 86400, "d"
    if not long:
        return f"{n}{unit}"
    if unit == "d" and n < 1:
        return "today"
    return "today" if unit != "d" else f"{n}d ago"


def clip(s, width, fam="sg", w=400, size=14):
    if measure(s, fam, w, size) <= width:
        return s
    while s and measure(s + "…", fam, w, size) > width:
        s = s[:-1]
    return s.rstrip() + "…"


def star(cx, cy, r, color):
    """Small five-point star (the fonts have no ★ glyph)."""
    pts = []
    for i in range(10):
        ang = -math.pi / 2 + i * math.pi / 5
        rad = r if i % 2 == 0 else r * 0.42
        pts.append(f"{cx + rad * math.cos(ang):.1f},{cy + rad * math.sin(ang):.1f}")
    return f'<polygon points="{" ".join(pts)}" fill="{color}"/>'


def build_metrics(data):
    shipped = sum(1 for p in PROJECTS if p[8])
    total = data.get("contributions")
    return [(str(len(CERTS)), "certifications earned across GenAI & Tech", "sunText"),
            (str(shipped), "shipped web and software projects", "text"),
            (f"{total:,}" if total is not None else "n/a", "contributions on GitHub this year", "text"),
            (CORE_DOMAINS, "core domains: Web Dev, Systems & Creative", "text")]


# ═══════════════════════════════ SECTIONS ═══════════════════════════════

def hero(t):
    W, H = 880, 470
    s = SVG(W, H, f"{' '.join(NAME)}. {TAGLINE} Skills orbit: " +
            "; ".join(f"{r}: {', '.join(n)}" for r, n in ORBIT))
    s.css.append("@keyframes tw{0%,100%{opacity:.12}50%{opacity:1}}.tw{animation:tw 4s ease-in-out infinite}")
    s.add(card(0, 0, W, H, t["hero"], t["line"], 20))
    rnd = random.Random(11)
    for _ in range(50):
        x, y = rnd.uniform(14, W - 14), rnd.uniform(14, H - 14)
        r = 1.5 if rnd.random() < .2 else 1
        s.add(f'<circle class="tw" cx="{x:.0f}" cy="{y:.0f}" r="{r}" fill="{t["star"]}" opacity="{t["starOp"]}" '
              f'style="animation-delay:-{rnd.uniform(0, 4):.1f}s;animation-duration:{rnd.uniform(2.5, 5.5):.1f}s"/>')

    s.text(44, 72, HANDLE, t["faint"], 13, "jb")
    s.text(42, 140, NAME[0], t["text"], 66, "sg", 700, ls=-1.4)
    s.text(42, 202, NAME[1], t["text"], 66, "sg", 700, ls=-1.4)
    y = 244
    for line in wrap(TAGLINE, 350, "sg", 400, 17):
        s.text(44, y, line, t["muted"], 17)
        y += 25
    py = y + 14
    pw = measure(STATUS, "jb", 400, 13) + 50
    s.add(f'<rect x="44.5" y="{py+.5}" width="{pw:.0f}" height="35" rx="17.5" fill="{t["okBg"]}" stroke="{t["okLine"]}"/>')
    s.add(pulse_dot(64, py + 18, t["ok"]))
    s.text(78, py + 22.5, STATUS, t["okText"], 13, "jb")
    lx = 44
    for ring, label in (("code", "languages"), ("dev", "dev"), ("tools", "tools · creative")):
        s.add(f'<circle cx="{lx+4}" cy="{py+66}" r="4" fill="{t[ring]}"/>')
        s.text(lx + 14, py + 70, label, t["muted"], 12, "jb")
        lx += measure(label, "jb", 400, 12) + 36

    cx, cy, k = 600, 238, 0.52
    radii, durs = [80, 132, 184], [26, 40, 58]
    for (ring, _), r in zip(ORBIT, radii):
        s.add(f'<ellipse cx="{cx}" cy="{cy}" rx="{r}" ry="{r*k:.1f}" fill="none" stroke="{t[ring]}" '
              f'stroke-dasharray="4 5" opacity=".55"/>')
    s.add(f'<circle cx="{cx}" cy="{cy}" r="48" fill="{t["sun"]}" opacity=".16"/>')
    s.add(f'<circle cx="{cx}" cy="{cy}" r="34" fill="{t["sun"]}"/>')
    s.text(cx, cy + 7.5, "ZH", t["sunInk"], 21, "sg", 700, "middle")
    for ri, ((ring, names), r, dur) in enumerate(zip(ORBIT, radii, durs)):
        path = f"M{cx+r},{cy} A{r},{r*k:.1f} 0 1,1 {cx-r},{cy} A{r},{r*k:.1f} 0 1,1 {cx+r},{cy}"
        for i, name in enumerate(names):
            lw = measure(name, "jb", 400, 11.5) + 16
            g = (f'<circle r="7" fill="{t[ring]}" stroke="{t["hero"]}" stroke-width="4"/>'
                 f'<rect x="12" y="-11" width="{lw:.0f}" height="22" rx="6" fill="{t["chip"]}" stroke="{t["line"]}"/>')
            s.add(f"<g>{g}")
            s.text(20, 4, name, t["text"], 11.5, "jb")
            s.add(f'<animateMotion dur="{dur}s" begin="-{(dur*i/len(names) + dur*0.37*ri) % dur:.1f}s" repeatCount="indefinite" '
                  f'path="{path}"/></g>')
    return s.render()


def facts(t):
    W, H = 880, 90
    s = SVG(W, H, ". ".join(f"{a}: {b}" for a, b in FACTS))
    w = (W - 32) / 3
    for i, (label, value) in enumerate(FACTS):
        x = i * (w + 16)
        s.add(card(x, 0, w, H, t["surface"], t["line"], 14))
        s.text(x + 20, 34, label, t["faint"], 13)
        s.text(x + 20, 62, value, t["text"], 17, w=500)
    return s.render()


def pipeline(t, total):
    W = 880
    sh, sy = 180, 64
    log_y = sy + sh + 52
    log_h = 26 * (len(LOG) + 1) + 26
    H = log_y + log_h + 28
    s = SVG(W, H, "Career pipeline: " + "; ".join(f"{a} {b}, {c} ({d})" for a, b, c, d in STAGES))
    s.add(card(0, 0, W, H, t["surface"], t["line"], 18))
    passed = sum(1 for _, _, ok, _ in LOG if ok)
    meta = "run_id 2026-zuh" + (f"  ·  {total:,} contributions this year" if total else "")
    s.text(28, 40, meta, t["faint"], 12, "jb")
    s.text(W - 28, 40, f"{passed} of {len(STAGES)} stages passed", t["faint"], 12, "jb", anchor="end")
    n = len(STAGES)
    gap = 12
    w = (W - 56 - gap * (n - 1)) / n
    for i, (stage, title, sub, when) in enumerate(STAGES):
        x = 28 + i * (w + gap)
        last = i == n - 1
        s.add(card(x, sy, w, sh, t["chip"] if last else t["log"], t["genai"] if last else t["line"], 14, last))
        s.text(x + 16, sy + 28, f"{i+1:02d} · {stage}", t["genai"] if last else t["faint"], 12, "jb")
        if last:
            s.add(f'<circle cx="{x+w-22:.1f}" cy="{sy+24}" r="6" fill="none" stroke="{t["genai"]}" stroke-width="2"/>')
            s.add(pulse_dot(round(x + w - 22, 1), sy + 24, t["genai"], 3))
        else:
            s.add(f'<circle cx="{x+w-22:.1f}" cy="{sy+24}" r="9" fill="{t["ok"]}"/>'
                  f'<path d="M{x+w-26:.1f} {sy+24.5} l2.8 2.8 l5.2 -5.6" fill="none" stroke="{t["okInk"]}" '
                  f'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>')
        ty = sy + 62
        for line in wrap(title, w - 32, "sg", 700, 18):
            s.text(x + 16, ty, line, t["text"], 18, w=700)
            ty += 22
        ty += 4
        for line in wrap(sub, w - 32, "sg", 400, 13):
            s.text(x + 16, ty, line, t["muted"], 13)
            ty += 18
        s.text(x + 16, sy + sh - 18, when, t["faint"], 12, "jb")
    py = sy + sh + 24
    s.add(f'<rect x="28" y="{py}" width="{W-56}" height="6" rx="3" fill="{t["track"]}"/>')
    target = (W - 56) * (passed / n + 0.01)
    s.add(f'<rect x="28" y="{py}" width="0" height="6" rx="3" fill="{t["ok"]}">'
          f'<animate attributeName="width" values="0;{target:.0f};{target:.0f}" keyTimes="0;.7;1" '
          f'dur="4.5s" repeatCount="indefinite"/></rect>')
    s.add(card(28, log_y, W - 56, log_h, t["log"], t["line"], 12))
    cols = [48, 112, 208, 232]
    for i, (when, stage, ok, text) in enumerate(LOG):
        y = log_y + 34 + i * 26
        s.text(cols[0], y, f"[{when}]", t["faint"], 12.5, "jb")
        s.text(cols[1], y, stage, t["ml"] if ok else t["genai"], 12.5, "jb")
        s.text(cols[2], y, "✓" if ok else "…", t["ok"] if ok else t["genai"], 12.5, "jb")
        s.text(cols[3], y, text, t["text"], 12.5, "jb")
    cy = log_y + 34 + len(LOG) * 26 - 13
    s.add(f'<rect x="{cols[3]}" y="{cy}" width="8" height="16" fill="{t["accent"]}">'
          f'<animate attributeName="opacity" values="1;0;1" dur="1.1s" calcMode="discrete" repeatCount="indefinite"/></rect>')
    return s.render()


def metrics(t, items):
    W, H = 880, 132
    s = SVG(W, H, ". ".join(f"{v} {l}" for v, l, _ in items))
    w = (W - 42) / 4
    for i, (value, label, col) in enumerate(items):
        x = i * (w + 14)
        s.add(card(x, 0, w, H, t["surface"], t["line"], 16))
        s.text(x + 20, 58, value, t[col], 40, w=700, ls=-0.8)
        y = 88
        for line in wrap(label, w - 40, "sg", 400, 14)[:2]:
            s.text(x + 20, y, line, t["muted"], 14)
            y += 20
    return s.render()


def project(t, typ, title, chip, featured, desc, stack, linked, live=None):
    W, H = 432, 252
    s = SVG(W, H, f"{title}: {desc} Built with {', '.join(stack)}.")
    s.add(card(0, 0, W, H, t["surface"], t["sun"] if featured else t["line"], 16))
    s.text(24, 38, f"artifact / {typ}", t[TYPE_COLOR[typ]], 12, "jb")
    cw = measure(chip, "jb", 400, 11.5) + 20
    if featured:
        s.add(f'<rect x="{W-24-cw:.1f}" y="22" width="{cw:.1f}" height="24" rx="12" fill="{t["sun"]}"/>')
        s.text(W - 24 - cw / 2, 38, chip, t["sunInk"], 11.5, "jb", anchor="middle")
    else:
        s.add(f'<rect x="{W-24-cw+.5:.1f}" y="22.5" width="{cw-1:.1f}" height="23" rx="11.5" fill="none" stroke="{t["line2"]}"/>')
        s.text(W - 24 - cw / 2, 38, chip, t["muted"], 11.5, "jb", anchor="middle")
    s.text(24, 78, title, t["text"], 22, w=700, ls=-0.2)
    y = 106
    for line in wrap(desc, W - 48, "sg", 400, 14.5)[:3]:
        s.text(24, y, line, t["muted"], 14.5)
        y += 22
    x = 24
    for tag in stack:
        tw = measure(tag, "jb", 400, 11.5) + 18
        s.add(f'<rect x="{x}" y="180" width="{tw:.1f}" height="24" rx="6" fill="{t["chip"]}"/>')
        s.text(x + 9, 196, tag, t["muted"], 11.5, "jb")
        x += tw + 6
    link = "View repo" if linked else "Repo coming soon"
    s.text(24, 233, link, t["accent"], 13.5, w=500)
    lx = 24 + measure(link, "sg", 500, 13.5) + 6
    if linked:
        s.add(f'<path d="M{lx:.1f} {233-1} l7 -7 M{lx+1.5:.1f} {226} h5.5 v5.5" fill="none" stroke="{t["accent"]}" '
              f'stroke-width="1.6" stroke-linecap="round"/>')
    if live:  # live repo data, right-aligned: stars, main language, last push
        avail = W - 24 - (lx + 24) - 12
        stars = live["stars"]
        parts = ([live["language"]] if live.get("language") else []) + [f"updated {ago(live['pushed_at'], True)}"]
        for drop_lang in (False, True):
            use = parts[1:] if drop_lang else parts
            txt = " · ".join(use)
            sw = 14 if stars else 0
            if measure(txt, "jb", 400, 11.5) + sw + (measure(str(stars), "jb", 400, 11.5) + 6 if stars else 0) <= avail:
                break
        right = W - 24
        s.text(right, 233, txt, t["faint"], 11.5, "jb", anchor="end")
        if stars:
            sx = right - measure(txt, "jb", 400, 11.5) - 14
            s.text(sx, 233, str(stars), t["faint"], 11.5, "jb", anchor="end")
            s.add(star(sx - measure(str(stars), "jb", 400, 11.5) - 8, 229, 5.5, t["sun"]))
    return s.render()


def stats(t, data):
    W, H = 880, 200
    w = (W - 16) / 2
    prof, repos = data.get("profile"), data.get("repos")
    own = [r for r in (repos or []) if not r["fork"]]
    stars = sum(r["stars"] for r in own) if repos is not None else None
    n_repos = prof["public_repos"] if prof else None
    contrib = data.get("contributions")
    langs = defaultdict(int)
    for r in own:
        if r["language"]:
            langs[r["language"]] += 1
    top = sorted(langs.items(), key=lambda kv: (-kv[1], kv[0]))[:4]
    tot = sum(langs.values()) or 1
    fmt = lambda v: "n/a" if v is None else f"{v:,}"
    cells = [(fmt(n_repos), "public repos", "accent"), (fmt(stars), "stars earned", "sunText"),
             (fmt(contrib), "contributions this year", "ml")]
    label = (f"GitHub stats. Public repos: {fmt(n_repos)}. Stars earned: {fmt(stars)}. "
             f"Contributions this year: {fmt(contrib)}. Top languages by repo: "
             + (", ".join(f"{k} {round(v * 100 / tot)}%" for k, v in top) or "no data yet") + ".")
    s = SVG(W, H, label)
    s.add(card(0, 0, w, H, t["surface"], t["line"], 16))
    s.text(24, 38, f"stats / {USER}", t["faint"], 12, "jb")
    cw = (w - 48) / 3
    for i, (value, lab, col) in enumerate(cells):
        x = 24 + i * cw
        s.text(x, 104, value, t[col], 36, w=700, ls=-0.8)
        y = 132
        for line in wrap(lab, cw - 12, "sg", 400, 13.5)[:2]:
            s.text(x, y, line, t["muted"], 13.5)
            y += 19
    x0 = w + 16
    s.add(card(x0, 0, w, H, t["surface"], t["line"], 16))
    s.text(x0 + 24, 38, "stats / top languages (by repo)", t["faint"], 12, "jb")
    colors = [t["genai"], t["dev"], t["tools"], t["sun"]]
    track_x, track_w = x0 + 128, w - 128 - 24 - 56
    if not top:
        s.text(x0 + 24, 90, "no language data yet", t["muted"], 14)
    for i, (lang, n) in enumerate(top):
        y = 76 + i * 30
        pct = n / tot
        s.text(x0 + 24, y + 9, lang, t["text"], 12.5, "jb")
        s.add(f'<rect x="{track_x:.1f}" y="{y}" width="{track_w:.1f}" height="9" rx="4.5" fill="{t["track"]}"/>')
        s.add(f'<rect x="{track_x:.1f}" y="{y}" width="{max(track_w * pct, 9):.1f}" height="9" rx="4.5" fill="{colors[i]}"/>')
        s.text(x0 + w - 24, y + 9, f"{round(pct * 100)}%", t["muted"], 12.5, "jb", anchor="end")
    return s.render()


ACTIVITY_COLOR = {"push": "ml", "pr": "genai", "new": "sunText"}


def activity(t, events):
    W = 880
    events = events or []
    rows = max(len(events), 1)
    H = 70 + rows * 30 + 14
    s = SVG(W, H, "Recent public GitHub activity: " +
            ("; ".join(f"{e['kind']} in {e['repo']}, {e['text']}" for e in events) or "none yet") + ".")
    s.add(card(0, 0, W, H, t["surface"], t["line"], 18))
    s.text(28, 40, f"last {len(events) or 0} public events  ·  github.com/{USER}", t["faint"], 12, "jb")
    s.add(card(28, 56, W - 56, rows * 30 + 18, t["log"], t["line"], 12))
    if not events:
        s.text(48, 56 + 30, "no recent public activity", t["muted"], 12.5, "jb")
        return s.render()
    for i, e in enumerate(events):
        y = 56 + 30 + i * 30 - 4
        s.text(48, y, f"[{ago(e['when'])}]", t["faint"], 12.5, "jb")
        s.text(112, y, e["kind"], t[ACTIVITY_COLOR[e["kind"]]], 12.5, "jb")
        s.text(166, y, clip(e["repo"], 138, "jb", 400, 12.5), t["muted"], 12.5, "jb")
        s.text(330, y, clip(e["text"], W - 28 - 330 - 20, "jb", 400, 12.5), t["text"], 12.5, "jb")
    return s.render()


def chip_tags(s, t, items, x0, y, max_x, dashed=False):
    """Lay out tag chips left to right, wrapping at max_x. Returns the y of the bottom edge."""
    x = x0
    for item in items:
        tw = measure(item, "sg", 400, 14) + 24 if dashed else measure(item, "jb", 400, 11.5) + 18
        h = 33 if dashed else 24
        if x + tw > max_x and x > x0:
            x, y = x0, y + h + 9
        if dashed:
            s.add(f'<rect x="{x+.5:.1f}" y="{y+.5}" width="{tw-1:.1f}" height="{h}" rx="8" fill="none" '
                  f'stroke="{t["line2"]}" stroke-dasharray="4 3"/>')
            s.text(x + 12, y + 22, item, t["text"], 14)
        else:
            s.add(f'<rect x="{x:.1f}" y="{y}" width="{tw:.1f}" height="{h}" rx="6" fill="{t["chip"]}"/>')
            s.text(x + 9, y + 16, item, t["muted"], 11.5, "jb")
        x += tw + (8 if dashed else 6)
    return y + (33 if dashed else 24)


def startup(t):
    W = 880
    d = STARTUP
    s = SVG(W, 240, f"{d['title']}, {d['role']}. {d['desc']} Status: {d['chip']}." +
            (f" Built with {', '.join(d['stack'])}." if d["stack"] else ""))
    s.text(28, 42, f"startup / {d['role'].lower()}", t["genai"], 12, "jb")
    cw = measure(d["chip"], "jb", 400, 11.5) + 20
    s.add(f'<rect x="{W-28-cw:.1f}" y="26" width="{cw:.1f}" height="24" rx="12" fill="{t["sun"]}"/>')
    s.text(W - 28 - cw / 2, 42, d["chip"], t["sunInk"], 11.5, "jb", anchor="middle")
    s.text(28, 90, d["title"], t["text"], 32, w=700, ls=-0.5)
    y = 122
    for line in wrap(d["desc"], 680, "sg", 400, 15.5)[:3]:
        s.text(28, y, line, t["muted"], 15.5)
        y += 23
    bottom = chip_tags(s, t, d["stack"], 28, y + 6, W - 28) if d["stack"] else y - 10
    sy = bottom + 20
    H = sy + 8 + 26
    s.body.insert(0, card(0, 0, W, H, t["surface"], t["sun"], 18))
    s.add(f'<defs><pattern id="hz" width="18" height="18" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'
          f'<rect width="9" height="18" fill="{t["sun"]}"/><rect x="9" width="9" height="18" fill="{t["chip"]}"/>'
          f'<animate attributeName="x" from="0" to="18" dur="1.4s" repeatCount="indefinite"/></pattern></defs>'
          f'<rect x="28" y="{sy}" width="{W-56}" height="8" rx="4" fill="url(#hz)" opacity=".9"/>')
    s.h = H
    return s.render()


def creative(t):
    W, H = 880, 236
    s = SVG(W, H, "Creative work: " + " ".join(f"{ti}. {tx}" for _, ti, tx, _ in CREATIVE) +
            (" Portfolio link available." if PORTFOLIO_URL else " Portfolio coming soon."))
    n = len(CREATIVE)
    w = (W - 16 * (n - 1)) / n
    cols = ["genai", "dev", "tools"]
    for i, (kind, title, text, tags) in enumerate(CREATIVE):
        x = i * (w + 16)
        s.add(card(x, 0, w, 194, t["surface"], t["line"], 16))
        s.text(x + 22, 36, f"creative / {kind}", t[cols[i % 3]], 12, "jb")
        s.text(x + 22, 70, title, t["text"], 20, w=700, ls=-0.2)
        y = 96
        for line in wrap(text, w - 44, "sg", 400, 13.5)[:3]:
            s.text(x + 22, y, line, t["muted"], 13.5)
            y += 19
        chip_tags(s, t, tags, x + 22, 150, x + w - 22)
    note = "portfolio  ·  " + (PORTFOLIO_URL.replace("https://", "").replace("http://", "") if PORTFOLIO_URL else "coming soon")
    s.text(4, 224, note, t["accent"] if PORTFOLIO_URL else t["faint"], 12.5, "jb")
    return s.render()


def openwork(t):
    W, H = 880, 200
    w = (W - 16) / 2
    s = SVG(W, H, "Open to opportunities in " + ", ".join(OPEN_TO) + " roles. Ask me about: " + ", ".join(ASK_ME) +
            f". Best way to reach me: {EMAIL}.")
    s.add(card(0, 0, w, H, t["surface"], t["ok"], 16))
    s.text(24, 40, "$", t["accent"], 14, "jb", 500)
    s.text(40, 40, "cat open_to.txt", t["text"], 14, "jb", 500)
    label = "open to opportunities"
    pw = measure(label, "jb", 400, 13) + 50
    s.add(f'<rect x="24.5" y="60.5" width="{pw:.0f}" height="35" rx="17.5" fill="{t["okBg"]}" stroke="{t["okLine"]}"/>')
    s.add(pulse_dot(44, 78, t["ok"]))
    s.text(58, 82.5, label, t["okText"], 13, "jb")
    bottom = chip_tags(s, t, [f"{r} roles" for r in OPEN_TO], 24, 110, w - 24)
    s.text(24, bottom + 30, f"best way to reach me: {EMAIL}", t["muted"], 12.5, "jb")
    x0 = w + 16
    s.add(card(x0, 0, w, H, t["surface"], t["line"], 16))
    s.text(x0 + 24, 40, "$", t["accent"], 14, "jb", 500)
    s.text(x0 + 40, 40, "man ask_me_about", t["text"], 14, "jb", 500)
    chip_tags(s, t, ASK_ME, x0 + 24, 64, x0 + w - 24, dashed=True)
    return s.render()


def endpoint(t, method, route, value, hot):
    W, H = 212, 96
    s = SVG(W, H, f"{method} {route}: {value}")
    s.add(card(0, 0, W, H, t["surface"], t["sun"] if hot else t["line"], 14))
    mw = measure(method, "jb", 500, 11) + 16
    s.add(f'<rect x="18" y="16" width="{mw:.1f}" height="22" rx="5" fill="{t["sun"] if hot else t["chip"]}"/>')
    s.text(26, 31, method, t["sunInk"] if hot else t["ml"], 11, "jb", 500)
    s.text(18, 60, route, t["faint"], 12.5, "jb")
    if measure(value, "sg", 500, 15) < W - 36:
        size = 15
    elif measure(value, "sg", 500, 13.5) < W - 36:
        size = 13.5
    else:
        size = 12
    s.text(18, 82, value, t["text"], size, w=500)
    return s.render()


def extras(t):
    W = 880
    w = (W - 16) / 2
    H = 236
    s = SVG(W, H, "Certifications: " + ", ".join(CERTS) + ". Currently learning: " + ", ".join(LEARNING) + ". " + FUN_FACT)
    s.add(card(0, 0, w, H, t["surface"], t["line"], 16))
    s.text(24, 40, "$", t["accent"], 14, "jb", 500)
    s.text(40, 40, "pip list --certified", t["text"], 14, "jb", 500)
    for i, c in enumerate(CERTS):
        s.text(24, 76 + i * 25, c, t["muted"], 12.5, "jb")
    x0 = w + 16
    s.add(card(x0, 0, w, H, t["surface"], t["line"], 16))
    s.text(x0 + 24, 40, "$", t["accent"], 14, "jb", 500)
    s.text(x0 + 40, 40, "cat currently_learning.txt", t["text"], 14, "jb", 500)
    x, y = x0 + 24, 60
    for item in LEARNING:
        iw = measure(item, "sg", 400, 14) + 24
        if x + iw > x0 + w - 24:
            x, y = x0 + 24, y + 42
        s.add(f'<rect x="{x+.5:.1f}" y="{y+.5}" width="{iw-1:.1f}" height="33" rx="8" fill="none" '
              f'stroke="{t["line2"]}" stroke-dasharray="4 3"/>')
        s.text(x + 12, y + 22, item, t["text"], 14)
        x += iw + 8
    y += 64
    for line in wrap(FUN_FACT, w - 48, "sg", 400, 14):
        s.text(x0 + 24, y, line, t["muted"], 14)
        y += 21
    return s.render()


def main():
    ASSETS.mkdir(exist_ok=True)
    data = load_github()
    total = data.get("contributions")
    items = build_metrics(data)
    keep = set()
    for name, t in THEMES.items():
        out = {f"hero-{name}.svg": hero(t), f"facts-{name}.svg": facts(t),
               f"pipeline-{name}.svg": pipeline(t, total), f"metrics-{name}.svg": metrics(t, items),
               f"stats-{name}.svg": stats(t, data), f"activity-{name}.svg": activity(t, data.get("events")),
               f"startup-{name}.svg": startup(t), f"creative-{name}.svg": creative(t),
               f"openwork-{name}.svg": openwork(t), f"extras-{name}.svg": extras(t)}
        for slug, typ, title, chip, feat, desc, stack, repo, _shipped in PROJECTS:
            out[f"project-{slug}-{name}.svg"] = project(t, typ, title, chip, feat, desc, stack,
                                                         bool(repo), repo_info(data, repo) if repo else None)
        for slug, method, route, value, hot in ENDPOINTS:
            out[f"endpoint-{slug}-{name}.svg"] = endpoint(t, method, route, value, hot)
        for fn, svg in out.items():
            (ASSETS / fn).write_text(svg, encoding="utf-8")
        keep.update(out)
    for stale in ASSETS.glob("*.svg"):  # drop SVGs for anything removed from CONTENT
        if stale.name not in keep:
            stale.unlink()
            print("removed stale", stale.name)
    print(f"built {len(keep)} SVGs (contributions: {total if total is not None else 'n/a'})")


if __name__ == "__main__":
    main()