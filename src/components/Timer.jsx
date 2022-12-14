import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import "../css/timer.css";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
        <Box id="countdown-number">{time}s</Box>
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {lengthOptions.map((option) => (
          <Box
            key={option}
            className="btn-circle"
            onClick={() => {
              handleUserOption(option);
            }}
          >
            {option}s
          </Box>
        ))}
      </Box>
      <Box className="btn-container">
        <Box className="btn-pause btn" onClick={() => startTimer()}>
          <Box className="btn-circle"><PlayArrowIcon /></Box>
        </Box>
        <Box className="btn-stop btn" onClick={() => resetTimer()}>
          <div className="btn-circle"><RestartAltIcon /></div>
        </Box>
      </Box>
    </Box>
  );
}

export default Timer;
