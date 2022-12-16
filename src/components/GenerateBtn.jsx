import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function GenerateBtn({ generateWorkout, workoutType, exerciseAmount, goal }) {
  return (
    <Box sx={{ margin: "2rem" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => generateWorkout()}
        disabled={workoutType && exerciseAmount && goal ? false : true}
      >
        GENERATE
      </Button>
    </Box>
  );
}
export default GenerateBtn;