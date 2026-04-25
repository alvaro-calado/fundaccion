import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Source Serif 4'", "Georgia", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        forest: {
          50: "#f0f7f0",
          100: "#dceedd",
          200: "#b8debb",
          300: "#87c48c",
          400: "#55a85e",
          500: "#2d8c3a",
          600: "#1e6e2b",
          700: "#185724",
          800: "#14451e",
          900: "#0f3517",
        },
        earth: {
          50: "#fdf8f0",
          100: "#faeedd",
          200: "#f3d9b1",
          300: "#ebbe7c",
          400: "#e09d45",
          500: "#d4801e",
          600: "#b86414",
          700: "#954d12",
          800: "#793d14",
          900: "#633314",
        },
        clay: {
          50: "#fdf4f0",
          100: "#fbe5dc",
          200: "#f7c9b4",
          300: "#f1a280",
          400: "#e8714a",
          500: "#de4a22",
          600: "#c43518",
          700: "#a32b16",
          800: "#862519",
          900: "#6f2219",
        },
        ocean: {
          50: "#f0f4fb",
          100: "#dde6f5",
          200: "#c0d0ed",
          300: "#95b1e1",
          400: "#648cd2",
          500: "#3f6cc4",
          600: "#2d54a8",
          700: "#264388",
          800: "#243a6f",
          900: "#22335c",
        },
        cream: "#FAF8F3",
        dark: "#1a1a1a",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in-left": "slideInLeft 0.7s ease forwards",
        "counter": "counter 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;