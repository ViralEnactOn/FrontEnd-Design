/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        qs: ['Quicksand']
      },
      colors: {
        BLUE: '#4FBAE5',
        GRAY: '#B7BBC4',
        SUBBLUE: '#4FBAE5'
      }
    }
  },
  plugins: []
}
