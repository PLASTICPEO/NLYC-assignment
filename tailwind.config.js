export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "homepage-color": "#161616",
        "color-bureikou-txt": "#FFFFFF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(3, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "150px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
