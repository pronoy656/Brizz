import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#4a148c", // Deep, rich purple (Primary)
          900: "#3b0764",
          950: "#311b92", // Deep bluish-purple
        },
        accent: {
          light: "#f3e8ff",
          dark: "#1e1b4b", // Very dark navy-purple
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-inter)", "sans-serif"],
        bengali: ["var(--font-noto-bengali)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333333%)" }, // -33.3% because we triplicated the list
        },
      },
      boxShadow: {
        "subtle": "0 4px 20px rgba(0, 0, 0, 0.04)",
        "card": "0 2px 10px rgba(0, 0, 0, 0.02), 0 10px 30px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 10px 40px rgba(0, 0, 0, 0.08)",
      }
    },
  },
  plugins: [],
};
export default config;
