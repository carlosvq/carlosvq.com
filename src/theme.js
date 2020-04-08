const theme = {
  colors: {
    primary: "#412F86",
    secondary: "#6F4A9E",
    black: "#000000",
    gray: "#7a838f",
    darkGray: "#626262",
    lightGray: "#d5d9dc",
    green: "#12cb87",
    white: "#ffffff",
    hover: {
      primary: "#2d84fc",
      green: "#48d69f",
      darkGreen: "#00c57a",
    },
    focus: {
      primary: "#0052c3",
      green: "#009a5f",
    },
  },
  unit: {
    getRem(px) {
      return `${px / 16}rem`
    },
  },
}

export default theme
