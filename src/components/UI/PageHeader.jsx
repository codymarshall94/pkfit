import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const PageHeader = ({ title }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: theme.palette.background.black,
        color: theme.palette.text.secondary,
        height: "30vh",
      }}
    >
      <Typography variant="h1" fontWeight="bold" mb="2rem">
        {title}
      </Typography>
    </Box>
  );
};

export default PageHeader;
