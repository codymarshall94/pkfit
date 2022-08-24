import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

function Home() {
  return (
    <Box>
      <Box sx={{ bgcolor: "#F3F3F4", height: "50px" }}></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <h1 className="home-title">Parkour Workout Generator</h1>
        <h3>Quick workouts for anywhere you are</h3>
      </Box>
      <Box className="home-image-container">
        <img
          className="home-image"
          src={require("../images/homePageImage.jpg")}
          alt=""
        />
      </Box>
      <Link
        to="/generator"
        className="home-button"
        style={{ textDecoration: "none" }}
      >
        Generate Now
      </Link>
    </Box>
  );
}

export default Home;
