import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
    red: {
      main: "#FF0336",
      text: "#000",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
    background: {
      default: "#fff",
      black: "#000",
      grey: "#F0F0F0",
    },
    redContained: {
      main: "#FF0336",
      contrastText: "#fff",
    },
    grey: {
      main: "#575455",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: { xs: "2rem", sm: "3rem", lg: "3rem" },
      fontWeight: 700,
    },
    h2: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: { xs: "1.5rem", sm: "2rem", lg: "2rem" },
      fontWeight: 600,
    },
    h3: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 24,
      fontWeight: 500,
    },
    h4: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 500,
    },
    h5: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 14,
    },
    span: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 12,
    },
  },
});
