/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'calcGrey': '#A5A5A5',
      'calcOrange': '#F1A33B',
      'calcDark': '#333333',
    }),
    textColor: {
      'primary': '#EFEEEE',
    }
  },
  plugins: [],
}
