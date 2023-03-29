/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7127BA',
          DEFAULT: '#1a0b2e',
          dark: '#11071f',
        },
        purple: '#2b0b3a'
      }
    },
  },
  plugins: [],
}