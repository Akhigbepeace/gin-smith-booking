/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sulphur-point": ["Sulphur Point", "sans-serif"],
        "water-brush": ["Water Brush", "cursive"],
      },
    },
  },
  plugins: [],
};
