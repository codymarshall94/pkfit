import React from "react";
import "../../css/skills.css";
import ExerciseList from "../../components/ExerciseList";
import SkillHeader from "../../components/SkillHeader";
import BackButton from "../../components/BackButton";
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
      <BackButton page="skills" />
      <SkillHeader />
      <ExerciseList />
    </Box>
  );
}

export default Skill;
