const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'purple': '#4D46FA',
      'grey': '#a6a6a6'
    },
  },
  plugins: [],
}