import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        ow: {
          orange: "#F99E1A",
          orangeHot: "#FFB340",
          orangeDeep: "#C87806",
          /* Theme accent — alpha modifiers supported via rgb channel var */
          cyan: "rgb(var(--ow-accent-rgb) / <alpha-value>)",
          accent: "rgb(var(--ow-accent-rgb) / <alpha-value>)",
          blue: "#2563EB",
          /* Surfaces — vars resolve per [data-theme] */
          bg0: "rgb(var(--bg-0-rgb) / <alpha-value>)",
          bg1: "rgb(var(--bg-1-rgb) / <alpha-value>)",
          bg2: "rgb(var(--bg-2-rgb) / <alpha-value>)",
          bg3: "rgb(var(--bg-3-rgb) / <alpha-value>)",
          /* Foreground */
          fg0: "var(--fg-0)",
          fg1: "rgb(var(--fg-1-rgb) / <alpha-value>)",
          fg2: "var(--fg-2)",
          fg3: "var(--fg-3)",
          fg4: "var(--fg-4)",
          /* Lines */
          line1: "var(--line-1)",
          line2: "var(--line-2)",
          line3: "var(--line-3)",
          /* Decorative — used only in TrustedBy avatars; theme-agnostic */
          bronze: "#C07248",
          silver: "#B7C0C9",
          gold: "#D9A93C",
          platinum: "#36C4A7",
          diamond: "#3B7DD8",
          master: "#8E5CC9",
          gm: "#D34A4A",
          top500: "#E0B22F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "ow-1": "2px",
        "ow-2": "4px",
      },
      boxShadow: {
        glow: "0 0 32px rgba(249,158,26,0.25)",
        glowLg: "0 0 48px rgba(249,158,26,0.35)",
        cyanGlow: "0 0 24px rgb(var(--ow-accent-rgb) / 0.22)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.23, 1, 0.32, 1)",
        "smooth-inout": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 240ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
        pulseSoft: "pulseSoft 2.4s ease-in-out infinite",
        borderPulse: "borderPulse 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
