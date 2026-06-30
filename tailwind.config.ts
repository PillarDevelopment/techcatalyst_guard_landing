import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#00052e",
        signal: "#0428cb",
        arc: "#34fcff",
        halo: "#afb4db",
        carbon: "#222222",
        slate: "#4f5166",
        fog: "#6b6b83",
        mist: "#8185a0",
        silver: "#dbdcdf",
        paper: "#ffffff",
        line: "#dbdcdf",
        ink: "#222222",
        muted: "#4f5166",
        dim: "#6b6b83",
        soft: "#f6f8ff",
        blue: {
          DEFAULT: "#0428cb",
          bright: "#163bef",
          soft: "#eef2ff",
        },
        green: { DEFAULT: "#34fcff", deep: "#0aa4a6" },
        amber: "#34fcff",
        danger: "#0428cb",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "sans-serif"],
        mono: [
          "var(--font-ibm-plex-mono)",
          "IBM Plex Mono",
          "SF Mono",
          "ui-monospace",
          "monospace",
        ],
      },
      boxShadow: {
        card: "0 0 0 1px rgba(219,220,223,1)",
        panel: "0 0 0 1px rgba(219,220,223,1)",
        cta: "none",
      },
      borderRadius: {
        card: "8px",
        panel: "8px",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 68% 38%, rgba(175,180,219,0.36) 0%, rgba(4,40,203,0.22) 22%, rgba(0,5,46,0) 56%)",
      },
    },
  },
  plugins: [],
};

export default config;
