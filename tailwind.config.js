/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      robotoFlex: ["Roboto Flex", "sans-serif"],
    },
    colors: {
      'background': '#1E1E1E',
      'white': '#FFFFFF',
      'subHero': '#CECECE',
      'formBorderColor': '#D9D9D9',
    },
    extend: {},
  },
  plugins: [],
}

