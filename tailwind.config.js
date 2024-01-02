/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        "themeBlack": "#1a1919"
      },
      fontFamily: {
        "quicksand": 'Quicksand'
      }
    },
  },
  plugins: [],
}

