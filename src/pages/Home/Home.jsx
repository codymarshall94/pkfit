import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../../App.css";
import { Typography } from "@mui/material";

function Home() {
  return (
    <Box
      className="home-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <Typography variant="h1">Workout Generator</Typography>
        <Typography variant="h2">Quick workouts for anywhere you are</Typography>
      </Box>
      <Box className="home-image-container">
        <img
          className="home-image"
          src={require("../../images/homePageImage.jpg")}
          alt=""
        />
      </Box>
      <Button color="primary" variant="contained">
        <Link to="/generator" style={{ textDecoration: "none", color: "white" }}>
          Generate Now
        </Link>
      </Button>
    </Box>
  );
}

export default Home;