/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
  "./Src/**/*.{html, js}"],
  theme: {
    screens: {
      sm: '310px',
      md: '780px',
      lg: '986px',
      xl: '1440'
    },
    extend: {
      colors: {
        royalOrange: '#f8a590',
        lightOrange: '#f3d5ab',
        melonOrange: '#f79862',
        darkGrayish: 'hsl(277, 12%, 61%)',
        veryLightGray: 'hsl(0, 0%, 96%)',
        veryDarkGray: 'hsl(244, 12%, 13%)',
        paleWhite: '#f7f8f3',
        veryDarkNaval: '#1b2524',
        bluishgray: '#38676d',
        veryDarkBluish:'#1e4d53'
        
        
        
      }

    },
  },
  plugins: [],
}

