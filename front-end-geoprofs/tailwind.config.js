import daisyui from './node_modules/daisyui'
const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  },
  plugins: [daisyui, 
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      )
    })
  ],
  daisyui: {
    themes: [
      {
        myTheme: {
          "btn-primary": "#20B5FF",
          "btn-secondary": "#FFFFFF",
          "btn-warning": "#FF0000"
        }
      }
    ],
  }
}