import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const jumpDesc =
  "Exercises that help with Precisions, Strides and overall leg strength.";
const vaultDesc =
  "Exercises that promote pushing power and improving hip drive.";
const swingDesc =
  "Exercises that increase grip strength, hip drive and engagement of the core.";
const balanceDesc =
  "Exercises that work on coordination and stabilization of smaller muscles.";
const climbDesc = "Exercises that increase grip and pulling strength.";

function ExerciseHeader() {
  const { skill } = useSelector((state) => state.skills);

  return (
    <Box sx={{position: "relative"}}>
        <Typography variant="h1">{skill}</Typography>
        <Typography variant="h3">
          {skill === "Jump"
            ? jumpDesc
            : skill === "Vault"
            ? vaultDesc
            : skill === "Swing"
            ? swingDesc
            : skill === "Balance"
            ? balanceDesc
            : skill === "Climb"
            ? climbDesc
            : "No Description"}
        </Typography>
    </Box>
  );
}

export default ExerciseHeader;
