/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_color:"#111827",
        hover_color:"#1f2937",
      }
    },
  },
  plugins: [],
}