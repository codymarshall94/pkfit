import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Navbar";
import Generator from "./pages/Generator/Generator";
import Exercises from "./components/Exercises";
import Skills from "./pages/Skills/Skills";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="generator" element={<Generator />} />
          <Route path="skills" element={<Skills />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="*" element={<App />} />
        </Routes>
    </div>
  );
}

export default App;
