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
        label : "#ffffff",
        dark : {
          10 : "rgb(10,10,10,.1)"
        }
      },
      screens : {
        'md-100' : '980px',
        'phone-100' : '540px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
