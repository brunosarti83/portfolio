/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'conic-gradient': 'conic-gradient(from 180deg at 50% 50%, #00FFB2 110.62499642372131deg, rgba(0, 87, 255, 0.00) 283.1249928474426deg)',
      },
      fontFamily: {
        'work': ["Work Sans", "sans"],
        'source': ["Source Sans 3", "sans"],
      },
      dropShadow: {
        'dark': '-8px 8px 4px rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        fade: {
          '0%': {opacity: 0.3},
          '20%': {opacity: 1},
          '50%': {opacity: 1},
          '80%': {opacity: 1},
          '100%': {opacity: 0.3},
        }
      },
      animation: {
        'fade': 'fade 5s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

