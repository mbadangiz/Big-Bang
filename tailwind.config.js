/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#406DD5", // Darker Project Blue
        blueSecondary: "#4376EE", // Lighter Project Blue
        blueGray: "#C3CFE2", // Color Between Project Blue and Project Gray and it works in some places like teacher's section wrapper gradient
        graySilver: "#F5F7FA", // InnerPages Background Color
        grayDetail: "#8D8D8D", // Details gray color
        textBlack: "#303030", // Titles Black color
        errorColor: "#f24073",
        lightGray: "#d2d2d2",
      },
      spacing: {
        0.75: "3px",
        250: "250px",
        280: "280px",
        300: "300px",
        350: "350px",
        375: "375px",
        400: "400px",
        450: "450px",
        500: "500px",
      },
      fontSize: {
        "10xl": "135px",
      },
    },
  },
  plugins: [],
};
