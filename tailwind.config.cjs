/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Helvetica-World': ['Helvetica-World', 'Helvetica', 'san-serif'],
      },
      colors: {
        primary: "#0134F1",
        secondary: "#05F925",
        tertiary: "#F5F5F5",
        background: "#000014",
        'black-rgba': 'rgba(58, 58, 58, 0.6)',
      },
    },
  },
  plugins: [],
}
