/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple-light': '#A881E6',
      'purple': '#7450AC',
      'purple-dark': '#523480',
      'gray': {
        '100': '#FBF9FE',
        '200': '#AFABB6',
        '300': '#252529',
        '400': '#17171A',
        '500': '#111112',
        '600': '#0C0C0D'
      },
      'success-light': '#4E995E',
      'success': '#2F723D',
      'pink': ' #DB5BBF',
      'pink-dark': '#251622',
      'orange': '#E07B67',
      'orange-black': '#261A17',
      'yellow': ' #BB9F3A',
      'yellow-black': '#211E12',
      'green': ' #8CAD51',
      'green-dark': '#1C2015',
      'blue': '#7B94CB',
      'blue-dark': '#1A1D23'
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/HeroImage.png')",
      }
    },
  },
  plugins: [],
}