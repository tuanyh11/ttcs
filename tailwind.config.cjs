/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#064e3b',
        "danger": '#E11D48',
        "success": '#069668'
      },
      fontFamily: {
        "Roboto": "'Roboto', sans-serif"
      }
    },
  },
  plugins: [],
}
