/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#0F172A',
        slate: { 50: '#F8FAFC' },
        accent: { DEFAULT: '#F97316', hover: '#EA580C' },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 16px 48px rgba(15, 23, 42, .08)',
        card: '0 10px 36px rgba(15, 23, 42, .06)',
      },
    },
  },
  plugins: [],
}
