import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import TitleBackground from "../../components/TitleBackground";

const allDesc = "All of the exercises that will help you improve your skills.";
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
    <Box sx={{ padding: "2rem", textAlign: "center" }}>
      <Box
        sx={{
          position: "relative",
          marginBottom: "2rem",
          width: "20rem",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h1"
          sx={{ marginBottom: "2rem", fontWeight: "bold", color: "white" }}
        >
          {skill}
        </Typography>
        <TitleBackground width="20rem" />
      </Box>
      <Typography variant="h4">
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
          : allDesc}
      </Typography>
    </Box>
  );
}

export default ExerciseHeader;
