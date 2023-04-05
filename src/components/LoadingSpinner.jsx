import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        boxShadow:
          "48px 0 0 0 rgba(200,0,0,.3), 36px 36px 0 0 rgba(200,0,0,.3), 0px 48px 0 0 rgba(200,0,0,.3), -36px 36px 0 0 rgba(200,0,0,.3), -48px 0 0 0 rgba(200,0,0,.3), -36px -36px 0 0 rgba(200,0,0,.3), 0px -48px 0 0 rgba(200,0,0,.3), 36px -36px 0 0 rgba(200,0,0,.3)",
        animation: `${spin} 1s linear infinite`,
      }}
    />
  );
};

export default LoadingSpinner;
