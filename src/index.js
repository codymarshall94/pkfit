import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Generator from "./components/Generator";
import reportWebVitals from "./reportWebVitals";
import Skills from "./components/Skills";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Exercises from "./components/Exercises";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="generator" element={<Generator />} />
        <Route path="skills" element={<Skills />} />
        <Route path="exercises" element={<Exercises />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
