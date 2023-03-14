import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import ExerciseItem from "./ExerciseItem";

const WorkoutDisplay = ({ workout, setSelectedExercise }) => {
  const theme = useTheme();
  if (workout) {
    return (
      <>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.primary,
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Workout Overview
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {workout.map((exer) => (
            <ExerciseItem
              key={exer.name}
              exercise={exer}
              setSelectedExercise={setSelectedExercise}
            />
          ))}
        </Box>
      </>
    );
  }
};

export default WorkoutDisplay;
