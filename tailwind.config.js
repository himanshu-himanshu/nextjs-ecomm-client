/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Borui: ["borui", "serif"],
        Gruppo: ["gruppo", "serif"],
      },
      colors: {
        primary: "#113034",
        secondary: "#fffef9",
      },
      backgroundImage: {
        "men-section": "url('../public/assets/menProducts.jpg')",
        "women-section": "url('../public/assets/womenProducts.jpg')",
        banner: "url('../public/assets/banner.jpg')",
      },
    },
  },
  plugins: [],
};
