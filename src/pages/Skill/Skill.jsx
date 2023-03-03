import React from "react";
import ExerciseList from "./ExerciseList";
import SkillHeader from "./SkillHeader";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";

function Skill() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "5rem",
        color: colors.primary[900],
      }}
    >
      <SkillHeader />
      <ExerciseList />
    </Box>
  );
}

export default Skill;
