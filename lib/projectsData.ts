export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  liveUrl?: string;
  githubUrl?: string;
  category: "vanilla" | "devtools" | "team" | "utility";
  tags: string[];
  features: string[];
  architectureNotes: string;
  year: string;
  role: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "zenith-cpp",
    title: "Zenith C++",
    subtitle: "Browser-native client-side C++ IDE with WebAssembly & Monaco Editor",
    description:
      "Full-featured browser C++ development environment compiling and running C++ code 100% client-side via JSCPP interpreter and WebAssembly workers. Zero server round-trips.",
    fullDescription:
      "Zenith C++ is a privacy-first, client-side C++ IDE that runs entirely inside the browser. Powered by JSCPP as the primary execution engine and Monaco Editor (the VS Code core engine), code compiles in milliseconds on isolated Web Worker threads without sending source code to an external backend. Includes Xterm.js terminal rendering, stdin program input, 40+ standard library headers, and dark/light themes.",
    liveUrl: "https://zenith-cpp.vercel.app",
    githubUrl: "https://github.com/zakiuhh/zenith-cpp",
    category: "devtools",
    tags: ["C++17", "Monaco Editor", "Xterm.js", "WebAssembly", "Web Workers", "Vanilla CSS", "Zero-Backend"],
    features: [
      "Monaco Editor integration with full C++ syntax highlighting, auto-completion & shortcuts",
      "Xterm.js ANSI-compatible terminal emulator rendering stdout/stderr with real-time streaming",
      "100% client-side execution via Web Workers & JSCPP engine — works completely offline",
      "Interactive stdin input panel with automatic cin/getline program detection",
      "Polyfilled support for 40+ C++ standard library headers (<iostream>, <vector>, <algorithm>, etc.)",
      "Infinite loop protection with instant Web Worker execution termination",
    ],
    architectureNotes:
      "Architected with Monaco Editor v0.47, Xterm.js v5, JSCPP v2.0.9 runtime bundle, and Web Worker thread isolation. Requires COEP/COOP cross-origin security headers for SharedArrayBuffer memory allocation.",
    year: "2026",
    role: "Creator & Lead Architect",
  },
  {
    slug: "snapkode",
    title: "SnipCode / SnapKode",
    subtitle: "High-resolution customizable code screenshot & markdown export tool",
    description:
      "Browser tool to turn code snippets into beautiful, shareable code screenshots with 16 gradient themes, window frames, line highlighting, and custom watermarks.",
    fullDescription:
      "SnipCode (SnapKode) is an advanced browser-native code screenshot generator designed for developers, educators, and content creators. Built with zero runtime frameworks, it allows users to format code with 16 gradient themes, 3 window frame styles (macOS, Windows, None), line highlighting, social media aspect ratio presets, custom watermarks, and high-resolution PNG, SVG, or Markdown exports.",
    githubUrl: "https://github.com/zakiuhh/snapkode",
    category: "vanilla",
    tags: ["HTML5", "Modern CSS", "Vanilla JavaScript", "Highlight.js", "html2canvas", "LocalStorage"],
    features: [
      "16 professionally designed themes across Vibrant, Dark, Light, and Elegant palettes",
      "3 window frame styles: macOS traffic lights, Windows controls, or frameless minimal",
      "Line highlighting by holding Alt/Ctrl + clicking line numbers with purple contrast",
      "5 social media aspect ratio presets (Square 1:1, Twitter 16:9, Instagram 4:5, LinkedIn 1.91:1)",
      "High-resolution PNG export (2x, 4x, 6x scaling), vector SVG export, and Markdown snippet copy",
      "URL state sharing — full editor configuration encoded directly into shareable URLs",
    ],
    architectureNotes:
      "Handcrafted using ES Modules, modern CSS Grid/Flexbox, Highlight.js for syntax detection, html2canvas for vector rendering, and LocalStorage for preset management.",
    year: "2024",
    role: "Creator & UI/UX Developer",
  },
  {
    slug: "deep-cache-cleaner",
    title: "DeepCacheCleaner",
    subtitle: "Automated Windows cache cleaner wiping 51 cache locations across 9 phases",
    description:
      "Single-file automated Batch script that deep-wipes 51 Windows cache locations across 9 structured phases including WinSxS, update leftovers, shader caches, and dev tool caches.",
    fullDescription:
      "DeepCacheCleaner is a powerful system maintenance utility for Windows 10 & 11. Going far beyond standard Disk Cleanup, this automated Batch script targets 51 deep cache locations across 9 structured phases. It safely force-closes running apps, cleans Windows Update leftovers, shrinks the WinSxS store via DISM, wipes GPU shader caches (NVIDIA/AMD), gaming caches (Steam/Epic), and developer caches (npm, Yarn, Bun, NuGet, pip), then executes a 5x desktop Explorer refresh.",
    githubUrl: "https://github.com/zakiuhh/DeepCacheCleaner",
    category: "utility",
    tags: ["Windows Batch Script", "System Administration", "WinSxS DISM", "Shader Cache", "Dev Maintenance"],
    features: [
      "Deep wipes 51 cache locations across 9 automated structured phases",
      "Reclaims 2 GB to 50+ GB of disk space from update leftovers and component stores",
      "Hardware-aware GPU shader cache cleanup for NVIDIA (DXCache/GLCache) and AMD (DxCache)",
      "Developer environment cache cleaning for npm, Yarn, Bun, NuGet, pip, and Winget",
      "Proactive app-closing to unlock locked cache files for Chrome, Discord, Steam, VS Code, and Slack",
      "Automatic Administrator elevation and DISM WinSxS component store compression",
    ],
    architectureNotes:
      "Engineered with native Windows Command Scripting, DISM API integration, process termination handles, error suppression (>nul 2>&1), and Win32 Explorer refresh signals.",
    year: "2026",
    role: "Creator & System Developer",
  },
  {
    slug: "cs501",
    title: "C++ Crashed (CS501)",
    subtitle: "Interactive C++ learning platform & verified credential engine built with team",
    description:
      "Self-contained interactive learning platform for the CS501 Programming Fundamentals course. Features 807 C++ MCQs, inline Judge0 C++ compiler execution, 70 certificate themes, and Supabase cloud progress sync.",
    fullDescription:
      "C++ Crashed (CS501) is a comprehensive, interactive web application engineered collaboratively with a student engineering team for the CS501 Programming Fundamentals syllabus. It transforms static lecture slides into an interactive classroom experience with inline Judge0 C++ code compilation, a live code playground, an 807 MCQ quiz bank, 70 customizable credential themes, dual-orientation PDF/PNG exports, and Supabase cloud sync.",
    liveUrl: "https://cs-501.vercel.app",
    githubUrl: "https://github.com/zakiuhh/cs-501",
    category: "team",
    tags: ["TanStack Start", "React 19", "TypeScript", "Supabase", "Judge0 API", "Tailwind CSS v4", "Team Project"],
    features: [
      "Interactive classroom combining slide decks, live Judge0 C++ execution, and inline quizzes",
      "Massive 807 C++ MCQ question bank covering 8 core modules with customizable quizzes",
      "70 custom certificate themes (6 built-in + 64 brand themes) with dual PDF/PNG export engines",
      "Anonymous 6-character cloud progress sync backed by Supabase database",
      "Public certificate verification engine (`/verify/:id`) for authenticating student credentials",
    ],
    architectureNotes:
      "Architected with TanStack Start (SSR + file-based routing), React 19, Tailwind CSS v4, Nitro server, Supabase PostgreSQL, and Judge0 C++ GCC compiler runtime execution API.",
    year: "2025",
    role: "Co-Creator & Frontend/UI Engineer (Team Project)",
  },
  {
    slug: "coloristan",
    title: "Coloristan",
    subtitle: "Zero-dependency color name identifier and multi-format converter",
    description:
      "Vanilla HTML5/CSS3/JS tool to identify color names and convert between HEX, RGB, HSL, OKLCH. Smart autocomplete across 100+ named colors.",
    fullDescription:
      "Coloristan is a high-speed, zero-dependency color intelligence utility built entirely with native web standards. Designed for developers and designers who value pure browser performance, it accurately matches colors to human-readable names and converts between HEX, RGB, HSL, and modern OKLCH color spaces in real time without calling an external API or bundling heavy libraries.",
    liveUrl: "https://coloristan.vercel.app",
    githubUrl: "https://github.com/zakiuhh",
    category: "vanilla",
    tags: ["HTML5", "CSS3", "Vanilla JavaScript", "OKLCH Color Space", "Zero-Dependency"],
    features: [
      "Real-time instant color name identification across 100+ curated colors",
      "Bi-directional color space conversion: HEX <-> RGB <-> HSL <-> OKLCH",
      "Fuzzy search autocomplete for quick color discovery",
      "Instant copy-to-clipboard functionality with feedback toast",
      "Zero backend, zero build tool step, 100% browser native runtime",
    ],
    architectureNotes:
      "Engineered with vanilla JavaScript using direct CSS custom properties manipulation and lightweight color matrix distance algorithms to calculate closest color names dynamically.",
    year: "2024",
    role: "Creator & Lead Developer",
  },
  {
    slug: "whats-next",
    title: "What's Next?",
    subtitle: "Multi-provider BYOK AI career & skill guidance advisor",
    description:
      "BYOK career advisor generating 12 personalized suggestions across career, courses, projects, books. Integrates 4 AI providers (Groq, Anthropic, Kimi, Mistral).",
    fullDescription:
      "What's Next? is an open-source, Bring-Your-Own-Key (BYOK) career exploration engine. It connects directly from the browser to 4 major LLM providers (Groq, Anthropic, Kimi, Mistral) to deliver highly tailored action plans covering career pathways, skill upgrades, recommended books, and portfolio project ideas.",
    githubUrl: "https://github.com/zakiuhh/what-s-next",
    category: "vanilla",
    tags: ["Vanilla JS", "Multi-AI Integration", "Fetch API", "Groq / Anthropic / Kimi / Mistral", "No-Bundler"],
    features: [
      "Seamless integration with 4 LLM providers via direct REST API calls",
      "Live model fetching with fallback strategies and latency optimization",
      "Generates 12 categorized, actionable recommendations in seconds",
      "Client-side API key encryption stored strictly in local memory",
      "Zero node_modules, zero frameworks, built with pure JavaScript ESM",
    ],
    architectureNotes:
      "Utilizes native Fetch API abstractions with custom error boundary handlers to deal with rate limits, provider stream parsing, and dynamic response formatting across different API schemas.",
    year: "2024",
    role: "Creator & Lead Developer",
  },
  {
    slug: "decky-cap-docs",
    title: "DECKY CAP Docs",
    subtitle: "Interactive single-page documentation site for an autonomous aerial platform",
    description:
      "9-section single-page documentation site with custom magnetic cursor physics, IntersectionObserver scroll animations, collapsible sidebar with localStorage, and live accent color picker.",
    fullDescription:
      "DECKY CAP Docs is a futuristic, highly interactive technical documentation web app created for a conceptual autonomous aerial platform (CAP). It packs sophisticated interactive UI engineering — including custom spring-physics magnetic cursor motion, real-time accent color theme shifting, keyboard navigation shortcuts, and stateful sidebars — into a zero-framework codebase.",
    githubUrl: "https://github.com/zakiuhh/deckyDocu",
    category: "vanilla",
    tags: ["HTML5", "Vanilla JS", "IntersectionObserver", "Custom CSS Variables", "Physics Engine"],
    features: [
      "9 comprehensive technical documentation sections with deep linking",
      "Custom canvas/DOM magnetic cursor physics with spring acceleration",
      "IntersectionObserver triggered scroll reveals and sidebar progress tracker",
      "Live CSS variable accent color picker with instant site-wide restyling",
      "Collapsible sidebar state persisted across user sessions in localStorage",
      "Keyboard shortcut navigation (Cmd/Ctrl + K, arrow keys)",
    ],
    architectureNotes:
      "Handcrafted using modular JavaScript ES modules, requestAnimationFrame physics loop for smooth cursor tracking, and CSS variable tokens for dynamic theme switching.",
    year: "2024",
    role: "Creator & UI/UX Developer",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
