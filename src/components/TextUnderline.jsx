import React from "react";
import { useTheme } from "@mui/material/styles";

const TextUnderline = () => {
  const theme = useTheme();
  return (
    <span
      style={{
        height: "4px",
        width: "30px",
        backgroundColor: theme.palette.red.main,
      }}
    />
  );
};

export default TextUnderline;
