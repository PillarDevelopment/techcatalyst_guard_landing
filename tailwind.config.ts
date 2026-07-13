import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#2b46f0",
          bright: "#1c33d4",
          soft: "#e3e9ff",
          tint: "#f2f5ff",
        },
        navy: {
          950: "#070b1d",
          900: "#0c1228",
          800: "#141b38",
          line: "#26305c",
          text: "#aab3d6",
        },
        green: { DEFAULT: "#0aa34f", deep: "#087a3c" },
        amber: "#e07c00",
        danger: "#d92d47",
        ink: "#232a42",
        heading: "#0d1326",
        muted: "#565e78",
        dim: "#8d93ab",
        soft: "#f6f8fc",
        line: "#e4e8f4",
        "line-strong": "#c9d2ea",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "SF Mono",
          "ui-monospace",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(13,19,38,.04), 0 8px 24px -12px rgba(13,19,38,.10)",
        panel: "0 1px 2px rgba(13,19,38,.05), 0 24px 48px -20px rgba(13,19,38,.16)",
        cta: "0 8px 20px -8px rgba(43,70,240,.45)",
      },
      borderRadius: {
        card: "14px",
        panel: "18px",
      },
    },
  },
  plugins: [],
};
export default config;
