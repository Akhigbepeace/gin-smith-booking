/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sulphur-point": ["Sulphur Point", "sans-serif"],
        "water-brush": ["Water Brush", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
