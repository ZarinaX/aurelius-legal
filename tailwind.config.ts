import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Premium
        midnight: {
          50: "#f8f9fa",
          100: "#f0f3f7",
          500: "#1a2332",
          700: "#0f1419",
          900: "#050708",
        },
        charcoal: {
          50: "#fafbfc",
          500: "#2d2d2d",
          700: "#1a1a1a",
          900: "#0a0a0a",
        },
        gold: {
          300: "#d4af37",
          400: "#c9a961",
          500: "#b8860b",
          600: "#9b6d0f",
        },
        platinum: {
          300: "#e8e8e8",
          400: "#d3d3d3",
          500: "#c0c0c0",
          600: "#b0b0b0",
        },
      },
      fontFamily: {
        serif: [
          "Playfair Display",
          "Georgia",
          "serif",
        ],
        sans: [
          "Inter",
          "Montserrat",
          "system-ui",
          "sans-serif",
        ],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "120rem",
      },
      letterSpacing: {
        "wider-xl": "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
