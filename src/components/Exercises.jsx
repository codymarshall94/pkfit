import React from "react";
import "../css/skills.css";
import Box from "@mui/material/Box";
import ExerciseDisplay from "./ExerciseDisplay";
import ExerciseHeader from "./ExerciseHeader";

function Exercises() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <ExerciseHeader />
      <ExerciseDisplay />
    </Box>
  );
}

export default Exercises;
