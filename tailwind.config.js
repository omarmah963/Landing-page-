/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.htm"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        veryPaleRed: "hsl(13,100%,96%)",
        veryLightGray: "hsl(0,0%,98%)",
        veryDarkBlue: "hsl(233,12%,13%)",
      },
    },
  },
  plugins: [],
};
