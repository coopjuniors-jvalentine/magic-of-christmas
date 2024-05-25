/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Libre Baskerville'", ...defaultTheme.fontFamily.sans],
      },

      animation: {
        "blob-1": "blob 5s infinite",
        "blob-2": "blob 6s infinite",
        "blob-3": "blob 7s infinite",
        "blob-4": "blob 8s infinite",
        "glow-1": "glow 5s infinite",
        "glow-2": "glow 6s infinite",
        "glow-3": "glow 7s infinite",
        "glow-4": "glow 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1) ",
            opacity: "0.3",
          },
          "33%": {
            transform: "scale(1.05) ",
            opacity: "0.2",
          },
          "66%": {
            transform: "scale(0.95) ",
            opacity: "0.4",
          },
          "100%": {
            transform: "scale(1) ",
            opacity: "0.3",
          },
        },
        glow: {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.25",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
