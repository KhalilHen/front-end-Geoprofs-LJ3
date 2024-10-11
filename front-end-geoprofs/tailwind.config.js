import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        myTheme: {
          "btn-primary":"#20B5FF",
          "btn-secondary":"#FFFFFF",
          "btn-warning":"#FF0000"
        }
      }
    ],
  }
}