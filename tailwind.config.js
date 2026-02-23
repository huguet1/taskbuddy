/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#41fd28',
          400: '#13db23',
          500: '#13e91e',
          600: '#0a8d1f',
          700: '#078603',
          800: '#108119',
          900: '#0c5a19',
        }
      }
    },
  },
  plugins: [],
}
