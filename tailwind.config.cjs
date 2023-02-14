/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-color': '#111111',
        'main-color': '#ff4545',
        
        'gray-color':  {
          '100': '#bdbdbd'
        }
      },
      fontFamily: {
        poppins: "Poppins, sans-serif"
      },
      container: {
        'screens': {
          xl: '1200px'
        },
        padding: {
          '2xl': '12px',
          'sm': '2rem'
        }
      }
      
      
    },
  },
  plugins: [],
}
