/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: "1380px",
        imageCategory: "60px",
        navbar: "600px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-kanit)"],
      },
      colors: {
        myCustomBgBody: "#f2efefbd",
        bgCategory: "#ffe4c4",
        customHover: "#ffeed7",
        bgHeader: "#fadc89a3",
        bgSiderBar: "#ffe4c4",
        bgBtn: "#1D5D9B",
        bgLogin: "#8CC0DE",
      },
      height: {
        500: "500px",
        240: "240px",
      },
      width: {
        menubar: "80%",
      },
      boxShadow: {
        customShadow: "1px 1px 7px #66666654",
      },
    },
  },
  plugins: [],
};
