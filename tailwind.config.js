/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        "sulphur-point": ["Sulphur Point", "sans-serif"],
        "water-brush": ["Water Brush", "cursive"],
        "the-nautigal": ["The Nautigal", "cursive"],
      },
      screens: {
        sm: "300px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
