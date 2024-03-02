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
        men_section: "url('../public/assets/menProducts.jpg')",
        women_section: "url('../public/assets/womenProducts.jpg')",
        banner: "url('../public/static/images/banner.jpg')",
        jacket: "url('../public/assets/jacket.jpg')",
        pant: "url('../public/assets/pant.jpg')",
        tshirt: "url('../public/assets/tshirt.jpg')",
        shoe: "url('../public/assets/shoe.jpg')",
      },
    },
  },
  plugins: [],
};
