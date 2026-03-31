/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legendary: {
          blue: '#1A73E8',
          red: '#E81A1A',
        },
      },
    },
  },
  plugins: [],
}