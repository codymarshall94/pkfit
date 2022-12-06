import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ee6c4d",
      light: "#F18970",
      dark: "#A64B35",
    },
    secondary: {
      main: '#6A8D73',
      light: '#87A38F',
      dark: '#4A6250',
    },
    success: {
      main: "#4caf50",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

