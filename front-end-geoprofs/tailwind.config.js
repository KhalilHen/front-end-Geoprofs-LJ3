import daisyui from './node_modules/daisyui'
const plugin = require('tailwindcss/plugin');
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, 
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
      });
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
});