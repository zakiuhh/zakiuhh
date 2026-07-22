import { ImageResponse } from "next/og";

export const alt = "Zaki Ul Hassan — Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#08090c",
          backgroundImage:
            "radial-gradient(circle at 75% 25%, rgba(0, 255, 136, 0.15) 0%, transparent 55%)",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        {/* Top Header Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "20px",
            color: "#00ff88",
            backgroundColor: "rgba(0, 255, 136, 0.1)",
            padding: "8px 20px",
            borderRadius: "9999px",
            border: "1px solid rgba(0, 255, 136, 0.3)",
          }}
        >
          <span>[ 0x_VANILLA_DEV ]</span>
          <span>// COMSATS BCS</span>
        </div>

        {/* Center Main Identity */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#f1f5f9",
              margin: 0,
              letterSpacing: "-2px",
            }}
          >
            ZAKI UL HASSAN
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#00ff88",
              margin: 0,
            }}
          >
            Vanilla Web Dev & Creative Designer
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              maxWidth: "850px",
              margin: 0,
              fontFamily: "sans-serif",
              lineHeight: 1.4,
            }}
          >
            Building browser-native tools with HTML5, CSS3 & JS — zero frameworks, zero dependencies. Video Editor, Graphic Designer & AI Enthusiast.
          </p>
        </div>

        {/* Footer Bar */}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1e2430",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          <span>zakiulhassan105@gmail.com</span>
          <span style={{ color: "#00ff88" }}>github.com/zakiuhh</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
