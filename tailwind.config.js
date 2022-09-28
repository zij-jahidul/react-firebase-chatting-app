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
    },
  },
  plugins: [],
};
