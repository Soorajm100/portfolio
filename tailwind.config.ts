import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      keyframes: {
        sunRise: {
          "0%": { transform: "translate(-50%, 120px)", opacity: "0.7" },
          "100%": { transform: "translate(-50%, -120px)", opacity: "1" },
        },

        cloudMove: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(120vw)" },
        },

        cloudMoveSlow: {
          "0%": { transform: "translateX(-250px)" },
          "100%": { transform: "translateX(120vw)" },
        },

        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },

        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },

        blink: {
          "50%": { borderColor: "transparent" },
        },
      },

      animation: {
        sunRise: "sunRise 6s ease-in-out forwards",
        cloudMove: "cloudMove 25s linear infinite",
        cloudMoveSlow: "cloudMoveSlow 40s linear infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",

        typing: "typing 2.5s steps(30, end) forwards",
        blink: "blink 0.7s step-end infinite",
      },
    },
  },

  plugins: [],
} satisfies Config;
