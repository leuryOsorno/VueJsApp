/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:'#61BC5C',
      secundary:'#3B463A',
      neutral:'#B17833'
    },
    extend: {
      fontFamily:{
        Roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

