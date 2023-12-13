/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "xenon-900": "#000033",
        "xenon-600": "#003DFF",
        "xenon-400": "#457AFF",
        "grey-900": "#23263B",
        "grey-700": "#484C7A",
        white: "#FFFFFF",
        "grey-200": "#D6D6E7",
      },

      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
