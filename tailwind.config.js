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
        VIOLET: 'var(--purple-10, #F4F5FD)',
        TEXTVIOLET: 'rgba(171, 178, 245, 1)',
        BORDER: 'var(--purple-60, #939CEF)',
        VIOLETBG: 'var(--purple-60, #939CEF)',
        WHITE: 'var(--main-white, #FFF)',
        LIGHTVIOLET: 'var(--purple-30, #EFF0FD)',
        BACKGROUND: '#F2F7FB',
        PUREWHITE: '#FFF'
      },
      gap: {
        20: '72px',
        25: '140px'
      },
      width: {
        464: '464px',
        466: '466px',
        423: '423px',
        290: '290px',
        96: '96px',
        286: '286px'
      },
      height: {
        208: '208px',
        357: '357px',
        2: '2px',
        94: '94px',
        32: '32px',
        61: '61px'
      }
    }
  },
  plugins: []
}
