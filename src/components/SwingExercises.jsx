import React from "react";
import Box from "@mui/material/Box";
import Header from "./Navbar";
import { Link } from "react-router-dom";
import "../css/skills.css";

function SwingExercises() {
  return (
    <Box>
      <Link to="/skills" className="back-button">
        Back
      </Link>
      <h1>Swing</h1>
    </Box>
  );
}

export default SwingExercises;
