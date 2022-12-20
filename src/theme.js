import { createTheme } from "@mui/material/styles";

/*
primary: #EE6C4D
secondary: #357996
primary-light: #FF8F75
primary-dark: #DC4724
primary-lighter #FFB29F
primary-darker #AB2E11
secondary-light: #5392AD
secondary-dark: #1C698B
secondary-lighter #84B8CE
secondary-darker #0F506C
ternary: #97D946
ternary-light: #B2EB6B
ternary-dark: #7DC921
ternary-lighter #CAF398
ternary-darker #97D946
primary-text: #434344
secondary-text: #c7c4c4
ternary-text: #FFFFFF
*/

const theme = createTheme({
  palette: {
    primary: {
      main: "#EE6C4D",
      light: "#FF8F75",
      dark: "#DC4724",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#357996",
      light: "#357996",
      dark: "#1C698B",
      contrastText: "#FFFFFF",
    },
    ternary: {
      main: "#97D946",
      light: "#B2EB6B",
      dark: "#7DC921",
      contrastText: "#FFFFFF",
    },
    listBackground: {
      main: "#84B8CE",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: {
        xs: "2rem",
        sm: "3rem",
      },
      fontWeight: 700,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      color: "#434344",
    },
    h2: {
      fontSize: {xs: "1rem", sm: "1.5rem"},
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#434344",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#434344",
    },
    h4: {
      fontSize: "1rem",
      lineHeight: 1.2,
      color: "#434344",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#434344",
    },
    h6: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      color: "#434344",
    },
    subtitle1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.00938em",
      color: "#434344",
    },
  },
});

export default theme;
