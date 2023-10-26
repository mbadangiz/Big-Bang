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
        lightGray: "#F6F6F6",
        divider: "#D9D9D9",
      },
      spacing: {
        0.75: "3px",
        280: "280px",
        300: "300px",
        350: "350px",
        375: "375px",
        450: "540px",
      },
      fontSize: {
        "10xl": "135px",
      },
    },
  },
  plugins: [],
};
