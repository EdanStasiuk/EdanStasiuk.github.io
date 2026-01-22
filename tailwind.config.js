/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      robotoFlex: ["Roboto Flex", "sans-serif"],
      hero: ["Roboto", "sans-serif"],
    },
    colors: {
      'background': '#87CEEB',
      'hero': '#10689A',
      'secondary-background': '#232323',
      'tails-background': '#1A1A1A',
      'tails-border': '#343431',
      'white': '#FFFFFF',
      'subHero': '#CECECE',
      'formBorderColor': '#D9D9D9',
    },
    extend: {},
  },
  plugins: [],
}
