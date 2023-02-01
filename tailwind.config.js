/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nuncio: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#5F35F5",
        textColor: "#585D8E",

        inputColor: "#11175D",
      },
      screens: {
        smp: "374px",
        sml: "684px",
        mdp: "767px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
