import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        brutalist: {
          cream: "#f9f7ec",
          ink: "#1a1a1a",
          yellow: "#e7b623",
          teal: "#339999",
          cyan: "#00e5ff",
          red: "#d92626",
          coral: "#ff5a36",
          muted: "#666666",
          placeholder: "#999999",
        },
      },
      fontFamily: {
        mono: [
          "Cascadia Code",
          "Cascadia Mono",
          "SF Mono",
          "SFMono-Regular",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(20, 20, 20, 0.06)",
        "brutalist-sm": "3px 3px 0 0 #1a1a1a",
        brutalist: "4px 4px 0 0 #1a1a1a",
        "brutalist-lg": "8px 8px 0 0 #1a1a1a",
        "brutalist-red": "6px 6px 0 0 #ff5a36",
        "brutalist-cyan": "6px 6px 0 0 #00e5ff",
        "brutalist-yellow": "6px 6px 0 0 #e7b623",
        "brutalist-white": "4px 4px 0 0 #f9f7ec",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "brutalist-marquee": "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
