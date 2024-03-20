/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        richBeige: {
          100: "#EABE6C",
          200: "#FFEDD8",
        },
        richMaroon: "#891652",
        richBlack: "#240A34",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        amarath: ["Amaranth", "sans-serif"],
        noto: ["Noto Sans Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
