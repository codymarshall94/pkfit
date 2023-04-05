import React from "react";
import Navbar from "./pages/Global/Navbar";
import Home from "./pages/Home/Home";
import Generator from "./pages/Generator/Generator";
import Skill from "./pages/Skill/Skill";
import Skills from "./pages/Skills/Skills";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import SavedWorkouts from "./pages/SavedWorkouts/SavedWorkouts";
import SavedWorkout from "./pages/SavedWorkout/SavedWorkout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/routelayouts/ProtectedRoute";
import Plans from "./pages/Plans/Plans";
import PlanDetails from "./pages/Plans/PlanDetails";
import { theme } from "./theme";
import Articles from "./pages/Articles/Articles";
import Article from "./pages/Articles/Article";
import CreateArticle from "./pages/Articles/CreateArticle";
import AdminPanelRoute from "./components/routelayouts/AdminPanelRoute";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <CssBaseline />
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plans/:id" element={<PlanDetails />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/skills/:id" element={<Skill />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Article />} />
            <Route element={<AdminPanelRoute />}>
              <Route path="/createarticle" element={<CreateArticle />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/saved-workouts" element={<SavedWorkouts />} />
              <Route path="/saved-workouts/:id" element={<SavedWorkout />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
