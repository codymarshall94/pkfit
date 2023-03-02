import React from "react";
import ExerciseList from "../../components/ExerciseList";
import SkillHeader from "../../components/SkillHeader";
import Box from "@mui/material/Box";

function Skill() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      <SkillHeader />
      <ExerciseList />
    </Box>
  );
}

export default Skill;
