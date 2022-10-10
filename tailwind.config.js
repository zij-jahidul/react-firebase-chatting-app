/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#5F35F5",
        textcolor: "#585D8E",

        inputcolor: "#11175D",
      },
      screens: {
        smp: "374px",
        sml: "684px",
        mdp: "767px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};
