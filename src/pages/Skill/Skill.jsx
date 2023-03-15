import React from "react";
import SkillList from "./SkillList";
import SkillHeader from "./SkillHeader";
import { Box, useTheme } from "@mui/material";

function Skill() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "5rem",
        color: theme.palette.text.primary,
      }}
    >
      <SkillHeader />
      <SkillList />
    </Box>
  );
}

export default Skill;
