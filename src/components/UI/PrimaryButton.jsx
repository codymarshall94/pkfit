import React from "react";
import "../../styles/PrimaryButton.css";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PrimaryButton = ({ route, text, size }) => {
  const theme = useTheme();
  return (
    <Link
      to={route}
      className={`primary-button ${size}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        height: "3rem",
        position: "relative",
        margin: "1rem",
        transition: "all 0.3s ease-in-out",
        backgroundColor: "#fff",
        color: "#000",
        fontWeight: "bold",
        fontSize: "1rem",
      }}
    >
      {text.toUpperCase()}
        <ArrowForwardIcon sx={{
            color: theme.palette.red.main,
            marginLeft: "0.5rem",
        }}
        />
    </Link>
  );
};

export default PrimaryButton;
