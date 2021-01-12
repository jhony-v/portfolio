module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false,
  theme: {
    extend : {
      colors : {
        primary : "#7440e2",
        secondary : "rgb(52, 211, 153)",
        third : "#8af0eb",
        label : "#ffffff"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
