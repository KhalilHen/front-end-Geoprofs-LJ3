import daisyui from './node_modules/daisyui'
const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, 
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
};