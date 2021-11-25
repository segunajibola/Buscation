module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.js", "./public/index.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
        DEFAULT: "#0fa9e6",
        light: "#3fbaeb",
        dark: "#0c87b8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
