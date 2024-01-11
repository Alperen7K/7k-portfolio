/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gri: "#393E46",
        açıkGri: "#888B8F",
        yeşil: "#CBF281",
        beyaz: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
