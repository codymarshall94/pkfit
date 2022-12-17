import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "../css/timer.css";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const lengthOptions = [30, 60, 90, 120];
let interval;

function Timer() {
  const [time, setTime] = useState(30);
  const [length, setLength] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(interval);
      setIsPlaying(false);
      setTime(length);
    }
  }, [time, length]);

  const startTimer = () => {
    clearInterval(interval);
    if (isPaused) {
      setIsPaused(false);
      setTime(time);
    }
    setIsPlaying(true);
    setTime(length);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  const handleUserOption = (option) => {
    clearInterval(interval);
    setIsPlaying(false);
    setLength(option);
    setTime(option);
  };

  const resetTimer = () => {
    clearInterval(interval);
    setIsPlaying(false);
    setTime(length);
  };

  return (
    <Box>
      <Box className="timer">
        <Box className="timer-overlay"></Box>
        <Typography variant="h6" id="countdown-number">
          {time}s
        </Typography>
        <svg viewBox="0 0 100 100">
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="10%" stopColor="#f18971" />
            <stop offset="100%" stopColor="#EE6C4D" />
          </linearGradient>
          <circle
            className="main-circle-30"
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="none"
            transform="rotate(30 50 50)"
            style={{
              animation: isPlaying
                ? `countdown ${length}s linear forwards`
                : "unset",
            }}
          ></circle>
        </svg>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginY: "2rem" }}>
        {lengthOptions.map((option) => (
          <Button
            variant={length === option ? "contained" : "outlined"}
            key={option}
            className="btn-square"
            onClick={() => {
              handleUserOption(option);
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: length === option ? "white" : "text.primary",
              }}
            >
              {option}
            </Typography>
          </Button>
        ))}
      </Box>
      <Box className="btn-container">
        <Button
          variant="contained"
          className="btn-circle"
          onClick={() => startTimer()}
          sx={{
            backgroundColor: "primary.main",
          }}
        >
          <PlayArrowIcon />
        </Button>
        <Button
          variant="contained"
          className="btn-circle"
          onClick={() => resetTimer()}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "primary.main",
            borderRadius: "50%",
            width: "4rem",
            height: "4rem",
            margin: "0 1rem",
            transition: "all 500ms",
            userSelect: "none",
          }}
        >
          <RestartAltIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default Timer;
