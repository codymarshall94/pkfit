import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function GenerateBtn({ generateWorkout, workoutType, exerciseAmount, goal }) {
  return (
    <Box sx={{ margin: "1rem" }}>
      <Button
        variant="contained"
        onClick={() => generateWorkout()}
        disabled={workoutType && exerciseAmount && goal ? false : true}
      >
        GENERATE
      </Button>
    </Box>
  );
}

export default GenerateBtn;
