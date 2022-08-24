import React from "react";
import "../css/skills.css";
import Header from "./Header";
import ExerciseDisplay from "./ExerciseDisplay";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const jumpDesc =
  "Exercises that help with Precisions, Strides or just overall leg strength";
const vaultDesc =
  "Exercises that promote pushing power and improving hip drive";
const swingDesc =
  "Exercises that increase grip strength, hip drive and engagement of the core";
const balanceDesc =
  "Exercises that work on coordination and stabilization of smaller muscles";
const climbDesc = "Exercises that increase grip and pulling strength";

function Exercises() {
  //grabbing state from redux store
  const { value } = useSelector((state) => state.skills);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <Header />
      <Box className="exercise-header">
        <Link to="/skills" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </Link>
        <h1>{value}</h1>
        <h4>
          {value === "Jump"
            ? jumpDesc
            : value === "Vault"
            ? vaultDesc
            : value === "Swing"
            ? swingDesc
            : value === "Balance"
            ? balanceDesc
            : value === "Climb"
            ? climbDesc
            : "No Description"}
        </h4>
      </Box>

      <ExerciseDisplay />
    </Box>
  );
}

export default Exercises;
