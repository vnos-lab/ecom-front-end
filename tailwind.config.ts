/* eslint-disable global-require */
import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /**
         * @description: Custom colors for the application
         * @see https://tailwindcss.com/docs/customizing-colors
         * 2 types of colors:
         * 1. Percentage based colors (e.g. --mx-black-50p for 50% black)
         * 2. Custom colors (e.g. --mx-gray-1 for #FAFAFA, --mx-gray-2 for #F5F5F5, etc.)
         */
        /**
         * FIXME: We need to fix the names of the colors, following the pattern from
         * https://tailwindcss.com/docs/functions-and-directives#theme
         */
        transparent: "transparent",
        mx: {
          "secondary-2": "#DB4444",
        },
        "mx-black-30p": "rgba(0, 0, 0, 0.3)",
        "mx-black-50p": "rgba(0, 0, 0, 0.5)",
        "mx-gray-1": "#FAFAFA",
        "mx-gray-2": "#F5F5F5",
        "mx-red": {
          1: "#DB4444",
        },
        "mx-unrated-star": "rgba(0, 0, 0, 0.25)",
        "mx-rated-star": "#FFAD33",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: `${0}` },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: `${0}` },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
