/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#025b69',
          light: '#025b6926',
        },
        accent: {
          DEFAULT: '#1d343d',
          green: '#b1c5a4',
        },
        neutral: {
          light: '#f9f9f9',
          DEFAULT: '#636363',
          dark: '#111111',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}