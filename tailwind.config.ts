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

        // Role dashboard header shades (dark navy family, darkens with role seniority)
        studentteal: {
          DEFAULT: "#052846",
          dark: "#03192E",
        },
        teacherteal: {
          DEFAULT: "#013448",
          dark: "#012738",
        },
        principalnavy: {
          DEFAULT: "#001C36",
          dark: "#001126",
        },

        // Auth screens (Sign-in / Find school) dark navy backdrop + blue brand gradient
        authnavy: {
          DEFAULT: "#0A2140",
          deep: "#040E1E",
          card: "#081A33",
          border: "#1E3A5F",
        },
        brandblue: {
          DEFAULT: "#0047F1",
          light: "#00C8EC",
        },
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
