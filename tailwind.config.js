/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily:{
      'primary': ["Roboto", ...defaultTheme.fontFamily.sans],
      'secondary': ["Khula", ...defaultTheme.fontFamily.sans],
    },
    screens: {
      'sm': '575px',
      'md': '767px',
      'lg': '991px',
      'xl': '1100px',
    },
    extend: {
      colors:{
        'primary' : '#F73859',
        'secondary' : '#386DF7',
        'heading' : '#101921',
        'text-color' : '#3E4549',
        'border-color' : '#E0E0E0',
        'border-bg' : '#F9F9F9',
        'banner' : '#FAFDFF',
        'category' : '#f7385933',
        'star' : '#EB8D00',
        'icon-bg' : '#8C9194',
        'star' : '#EB8D00',
        'paragraph' : '#333',
      }
    },
  },
  plugins: [],
}


