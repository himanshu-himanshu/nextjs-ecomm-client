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
        men_section: "url('/assets/menProducts.jpg')",
        women_section: "url('/assets/womenProducts.jpg')",
        banner: "url('/static/images/banner.jpg')",
        jacket: "url('/assets/jacket.jpg')",
        pant: "url('/assets/pant.jpg')",
        tshirt: "url('/assets/tshirt.jpg')",
        shoe: "url('/assets/shoe.jpg')",
      },
    },
  },
  plugins: [],
};
