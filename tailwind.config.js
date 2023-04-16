/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./src/**/*.{js,ts,jsx,tsx}",
    './sections/**/*.{html,js,ts,jsx,tsx}',
    './styles/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}