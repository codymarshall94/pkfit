import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Navbar";
import Generator from "./pages/Generator/Generator";
import Exercises from "./components/Exercises";
import Skills from "./pages/Skills/Skills";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase-config";
import { setUser } from "./redux/reducers/userSlice";
import { Box } from "@mui/material";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      dispatch(setUser(currentUser.email));
    } else {
      dispatch(setUser(null));
    }
  });

  console.log(user);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="generator" element={<Generator />} />
        <Route path="skills" element={<Skills />} />
        <Route path="exercises" element={<Exercises />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<App />} />
      </Routes>
    </div>
  );
}

export default App;
