/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      colors: {
        'black-500': '#000000df',
        'black-300': '#000000aa',
      },
      backgroundImage:{
        'circle': "url('/src/assets/circle.webp')",
        'logo': "url('/src/assets/logo.png')",
        'about-bg': "url('/src/assets/about-bg.jpg')",
      }
    },
  },
  plugins: [],
}