/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      ntt: "1200px",
    },

    extend: {
      colors: {
        main: "#0059BC",
      },
    },
  },
  plugins: [],
};
