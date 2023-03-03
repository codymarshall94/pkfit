import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const GenerateBtn = ({ workoutInfo, generateWorkout }) => {
  const { workoutType, exerciseTime, goal } = workoutInfo;
  return (
    <Box sx={{ margin: "2rem" }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => generateWorkout()}
        disabled={workoutType && exerciseTime && goal ? false : true}
      >
        GENERATE
      </Button>
    </Box>
  );
}
export default GenerateBtn;