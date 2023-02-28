/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    
    extend: {

      screens: {
        'tablet': '640px',
        'laptop': '880px',
        'desktop': '1280px',
      },

      boxShadow: {
        'all': '0 0 0 1000px rgba(0, 0, 0, .4)',
      },

      backgroundImage: {
        'web3desk': "url('./images/image-web-3-desktop.jpg')",
      },

      colors: {
        'Off-white': 'hsl(36, 100%, 99%)',
        'Verydark-blue': 'hsl(240, 100%, 5%)',
        'Softred': 'hsl(5, 85%, 63%)',
        'Softorange': 'hsl(35, 77%, 62%)',
        'Dark-grayishblue': 'hsl(236, 13%, 42%)',
        'Grayish-blue': 'hsl(233, 8%, 79%)',
      },
    },
  },
  plugins: [],
}
