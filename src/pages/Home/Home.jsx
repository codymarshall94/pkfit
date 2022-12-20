import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../../App.css";
import { Typography } from "@mui/material";
import { useEffect } from "react";

const actionWords = ["Jump", "Vault", "Run", "Swing", "Climb", "Balance"];

function Home() {
  const [actionWord, setActionWord] = useState("Jump");
  const [animationCurrent, setAnimationCurrent] = useState("home-word-in");

  useEffect(() => {
    const interval = setInterval(() => {
      if (actionWords.indexOf(actionWord) === actionWords.length - 1) {
        setActionWord(actionWords[0]);
      } else {
        setActionWord(actionWords[actionWords.indexOf(actionWord) + 1]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [actionWord]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animationCurrent === "home-word-in") {
        setAnimationCurrent("home-word-out");
      } else {
        setAnimationCurrent("home-word-in");
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [animationCurrent]);

  return (
    <Box
      className="home-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            width: { xs: "80%", sm: "60%", md: "40%" },
          }}
        >
          <img
            src={require("../../images/logo/logo-no-background.png")}
            alt=""
            className="home-logo"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "auto",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography variant="h2">Generate workouts to</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "auto",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            variant="h2"
            className={animationCurrent}
            sx={{ marginLeft: ".5rem", color: "primary.main" }}
          >
            {actionWord}
          </Typography>
        </Box>
      </Box>
      <Box className="home-image-container">
        <img
          className="home-image"
          src={require("../../images/homePageImage.jpg")}
          alt=""
        />
      </Box>
      <Button color="primary" variant="contained">
        <Link
          to="/generator"
          style={{ textDecoration: "none", color: "white" }}
        >
          Generate Now
        </Link>
      </Button>
    </Box>
  );
}

export default Home;
