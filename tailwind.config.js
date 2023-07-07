/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    experimental: {
      cssVariables: true,
      extendedSpacingScale: true,
      roundedClip: true
    },
    extend: {
      fontFamily: {
        qs: ['Quicksand']
      },
      colors: {
        BLUE: '#4FBAE5',
        GRAY: '#B7BBC4',
        SUBBLUE: '#4FBAE5',
        LIGHTGRAY: '#E3EBF4',
        GRAY1: '#D0DDEA',
        GRAY2: '#B7BBC4',
        PLACEHOLDER: 'var(--main-white, #FFF)',
        TABS: '#808BF0',
        NONSELECTED: 'var(--main-70, #ACB0BB)',
        FONT: 'var(--main-80, #74747C)',
        DESCRIPTION: 'var(--main-60, #B7BBC4)',
        VIOLET: 'var(--purple-10, #F4F5FD)'
      },
      gap: {
        20: '72px',
        25: '140px'
      },
      width: {
        464: '464px',
        466: '466px'
      },
      height: {
        208: '208px',
        357: '357px'
      }
    }
  },
  plugins: []
}
