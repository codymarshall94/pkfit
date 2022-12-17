import React from "react";
import "../css/skills.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ExerciseDisplay from "./ExerciseDisplay";
import ExerciseHeader from "./ExerciseHeader";

function Exercises() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/skills");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "flex-start", marginLeft: "1.5rem" }}
      >
        <Button
          variant="outlined"
          onClick={() => handleBackClick()}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Box>
      <ExerciseHeader />
      <ExerciseDisplay />
    </Box>
  );
}

export default Exercises;
