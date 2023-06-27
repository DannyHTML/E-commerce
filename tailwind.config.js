/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["hsl(26, 100%, 55%)"],
        secondary: ["hsl(25, 100%, 94%)"],
      },
    },
    fontFamily: {
      mainFont: ["Kumbh Sans, sans-serif"],
    },
  },
  plugins: [],
};
