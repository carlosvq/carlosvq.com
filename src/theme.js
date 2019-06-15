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
      primary: "#2D84FC",
      green: "#48D69F",
      darkGreen: "#00C57A",
    },
    focus: {
      primary: "#0052C3",
      green: "#009A5F",
    },
  },
  unit: {
    getRem(px) {
      return `${px / 16}rem`
    },
  },
}

export default theme
