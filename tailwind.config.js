/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font1: [ 'Odor Mean Chey', 'serif'],
        font2: ['Open Sans', 'sans-serif'],
        font3: ['Roboto', 'sans-serif']
      },
    },  },
  plugins: [],
}