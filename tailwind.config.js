/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(209, 23%, 22%)",
        VeryDarkBlue: "hsl(207, 26%, 17%)",
        VeryDarkBlue: "hsl(200, 15%, 8%)",
        DarkGray: "hsl(0, 0%, 52%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
