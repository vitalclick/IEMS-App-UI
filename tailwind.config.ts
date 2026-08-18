import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0B4A4A",
          dark: "#083A3A",
          light: "#E7F2F0",
        },
        orange: {
          DEFAULT: "#E8863C",
          light: "#FCEADA",
        },
        brandred: {
          DEFAULT: "#E14E4E",
          light: "#FCEBEB",
        },
        blueaccent: {
          DEFAULT: "#3B7DD8",
          light: "#E8F0FC",
        },
        purpleaccent: {
          DEFAULT: "#7C5CC4",
          light: "#EFEAFB",
        },
        greenaccent: {
          DEFAULT: "#1F9E6E",
          light: "#E4F5EE",
        },
        canvas: "#F3F2EE",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 3px rgba(16, 24, 40, 0.06), 0 1px 2px rgba(16, 24, 40, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
