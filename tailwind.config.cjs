/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        '920': '920px',
        'screens-576': '540px',
        'screens-600': '600px',
        'screens-1200': '1200px',
      },
      transformOrigin: {
        'top-left-1/4-0': 'calc(100% - 30px) 0'
      },
      colors: {
        "black": "#111111",
        "dark-color": "#111111",
        "main-color": "#ff4545",
        "#646a7c": "#646a7c",
        "#F5F7FA": "#F5F7FA",

        "gray-color": {
          100: "#bdbdbd",
        },
        "border-color": "#eaeaea",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        rubik: "Rubik, sans-serif"
      },
      container: {
        screens: {
          xl: "1200px",
        },
        padding: {
          "2xl": "12px",
          sm: "2rem",
          "70px": "70px",
        },
        zIndex: {
          1: 1,
        },
      },
      maxWidth: {
        1200: "1200px",
      },
      lineHeight: {
        "50px": "50px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
