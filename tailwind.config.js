/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        bouncing: {
          '0%': { transform: 'translateY(0em)' },
          '25%': { transform: 'translateY(1em)' },
          '50%': { transform: 'translateY(0em)' },
          '75%': { transform: 'translateY(-1em)' },
          '100%': { transform: 'translateY(0em)' },
        },
        bouncingx: {
          '0%': { transform: 'translateX(0em)' },
          '50%': { transform: 'translateX(0.25em)' },
          '100%': { transform: 'translateX(0em)' },
        },
      },
      screens: {
        'sm': { 'min': '1px', 'max': '767px' },
        'md': { 'min': '768px', 'max': '991px' },
        'lg': { 'min': '992px', 'max': '1239px' },
        'xl': { 'min': '1240px' },
      },
      animation: {
        'bouncing-back': 'bouncing 2s ease-in-out infinite',
        'bouncing-backX': 'bouncingx 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
