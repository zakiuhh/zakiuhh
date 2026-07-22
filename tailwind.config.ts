import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "var(--bg-base)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          glow: "var(--accent-glow)",
          muted: "var(--accent-muted)",
        },
        border: {
          subtle: "var(--border-color)",
          bright: "var(--border-light)",
        },
        text: {
          main: "var(--text-primary)",
          sub: "var(--text-secondary)",
          dim: "var(--text-muted)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "ascii-glitch": "asciiGlitch 3s infinite",
      },
      keyframes: {
        asciiGlitch: {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1", filter: "brightness(1.2)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
