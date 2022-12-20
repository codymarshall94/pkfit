import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function BackButton({ page }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(`/${page}`);
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        marginLeft: "1rem",
      }}
    >
      <Button
        variant="outlined"
        onClick={() => handleBackClick()}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </Box>
  );
}

export default BackButton;
