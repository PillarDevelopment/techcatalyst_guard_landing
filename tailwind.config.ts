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
          DEFAULT: "#1837da",
          bright: "#0046f9",
          soft: "#e2e2fd",
        },
        green: { DEFAULT: "#10bc10", deep: "#0c9a0c" },
        amber: "#ff6900",
        danger: "#d22e44",
        ink: "#313131",
        muted: "#63666a",
        dim: "#979797",
        soft: "#f9fafc",
        line: "#edf0f7",
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"],
        mono: [
          "SF Mono",
          "ui-monospace",
          "JetBrains Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 16px 40px rgba(30,40,90,.08)",
        panel: "0 24px 60px rgba(30,40,90,.10)",
        cta: "0 8px 24px rgba(24,55,218,.25)",
      },
      borderRadius: {
        card: "20px",
        panel: "30px",
      },
    },
  },
  plugins: [],
};
export default config;
