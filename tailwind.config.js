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
        quickSand: ['"Quicksand", sans-serif'] //Name Change
      },
      colors: {
        blue: '#4FBAE5',
        gray: '#B7BBC4',
        lightgray: '#E3EBF4',
        gray1: '#D0DDEA',
        tabs: '#808BF0',
        nonSelected: '#ACB0BB',
        font: ' #74747C',
        violet: ' #F4F5FD',
        textviolet: 'rgba(171, 178, 245, 1)',
        violetbg: ' #939CEF',
        white: ' #FFF',
        lightviolet: '#EFF0FD',
        background: '#F2F7FB',
        fontgray: '#848D93'
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
