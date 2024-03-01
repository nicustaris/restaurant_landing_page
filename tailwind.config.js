/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#EA6D27",
        customBlack: "#101A24",
        grayBg: "#F3F4F4",
      },
    },
  },
  plugins: [],
};
