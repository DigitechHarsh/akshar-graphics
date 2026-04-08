/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E3311D",
        secondary: "#00D2FF",
        background: "#0a0a0a",
        foreground: "#ffffff",
      },
    },
  },
  plugins: [],
}
