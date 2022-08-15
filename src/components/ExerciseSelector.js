import { Button, ButtonGroup, Box } from "@mui/material";
import React from "react";

function TargetArea({handleTypeClick, handleRepsClick, handleAmountClick, workoutType, exerciseAmount, reps}) {
  return (
    <Box>
      <Box>
        <h3>Workout Type</h3>
        <ButtonGroup>
          <Button color="success" variant={workoutType === "Full" ? "contained" : "outlined" } onClick={() => handleTypeClick("Full")}>Full</Button>
          <Button color="success" variant={workoutType === "Upper" ? "contained" : "outlined" } onClick={() => handleTypeClick("Upper")}>Upper</Button>
          <Button color="success" variant={workoutType === "Lower" ? "contained" : "outlined" } onClick={() => handleTypeClick("Lower")}>Lower</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <h3>Exercises</h3>
        <ButtonGroup>
          <Button color="success" variant={exerciseAmount === 5 ? "contained" : "outlined" } onClick={() => handleAmountClick(5)}>5</Button>
          <Button color="success" variant={exerciseAmount === 10 ? "contained" : "outlined" } onClick={() => handleAmountClick(10)}>10</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <h3>Reps</h3>
        <ButtonGroup>
          <Button color="success" variant={reps === "6-10" ? "contained" : "outlined" } onClick={() => handleRepsClick("6-10")}>6-10</Button>
          <Button color="success" variant={reps === "10-15" ? "contained" : "outlined" } onClick={() => handleRepsClick("10-15")}>10-15</Button>
          <Button color="success" variant={reps === "Time" ? "contained" : "outlined" } onClick={() => handleRepsClick("Time")}>Time</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default TargetArea;
