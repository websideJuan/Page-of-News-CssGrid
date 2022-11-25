/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans:'Inter, sans-serif'
      },
      textColor:{
        lightWhite:'hsl(233, 8%, 79%)',
        orange:'#e9ab53',
      },
      backgroundColor:{
        lightWhite:'hsl(240, 100%, 5%)',
        red:'#f15e50'
      }
    },
  },
  plugins: [],
}
