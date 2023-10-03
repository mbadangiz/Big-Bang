/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#406DD5",
        blueSecondary: "#4376EE",
        blueGray: "#C3CFE2",
        graySilver: "#F5F7FA",
        grayDetail: "#8D8D8D",
        textBlack: "#303030",
      },
    },
  },
  plugins: [],
};
