/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E3311D",
        background: "#ffffff",
        foreground: "#0f172a",
        slate: {
          950: "#020617",
          900: "#0f172a",
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
          100: "#f1f5f9",
          50: "#f8fafc",
        }
      },
    },
  },
  plugins: [],
}
