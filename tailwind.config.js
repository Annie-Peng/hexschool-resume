/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1280px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          0: "#E8F5FF",
          50: "#EBF7FF",
          100: "#BCDBF3",
          200: "#93BFE8",
          300: "#6EA3DC",
          400: "#4B87D1",
          500: "#2C6DC5",
          600: "#1C51A7",
          700: "#0F3A89",
          800: "#06266B",
          900: "#00164D",
        },
        secondary: {
          dark: "#2C3844",
          0: "#E9F8FF",
          100: "#E1F0F7",
          200: "#DAE8EF",
          300: "#D3DFE8",
          400: "#CCD7E0",
          500: "#C5CFD8",
          600: "#7C99B5",
          700: "#436892",
          800: "#193F6F",
          900: "#001F4D",
        },
      },
      backgroundImage: {
        close: "url(/icons/close.png)",
        check: "url(/icons/check.svg)",
        uncheck: "url(/icons/uncheck.svg)",
        thinBorderHexschool: "url(/images/thin-border-hexschool.png)",
        filledHexschool: "url(/images/filled-hexschool.png)",
      },
    },
  },
  plugins: [],
};
