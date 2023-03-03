import React from "react";
import Home from "./pages/Home/Home";
import Header from "./pages/Global/Navbar";
import Generator from "./pages/Generator/Generator";
import Skill from "./pages/Skill/Skill";
import Skills from "./pages/Skills/Skills";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import SavedWorkouts from "./pages/SavedWorkouts/SavedWorkouts";
import SavedWorkout from "./pages/SavedWorkout/SavedWorkout";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
          <div className="App">
            <Header />
            <div className="content" style={{ marginTop: "3rem" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generator" element={<Generator />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/skills/:id" element={<Skill />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/saved-workouts" element={<SavedWorkouts />} />
                  <Route
                    path="/saved-workouts/:id"
                    element={<SavedWorkout />}
                  />
                </Route>
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </div>
        </AuthContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
