import { Button, ButtonGroup, Box } from "@mui/material";
import React from "react";

function TargetArea({handleTypeClick, handleGoalClick, handleAmountClick, workoutType, exerciseAmount, goal}) {
  return (
    
    <Box sx={{margin: "1.5rem 0"}}>
      <Box>
        <h3>Workout Type</h3>
        <ButtonGroup>
          <Button color="secondary" variant={workoutType === "Full" ? "contained" : "outlined" } onClick={() => handleTypeClick("Full")}>Full</Button>
          <Button color="secondary" variant={workoutType === "Upper" ? "contained" : "outlined" } onClick={() => handleTypeClick("Upper")}>Upper</Button>
          <Button color="secondary" variant={workoutType === "Lower" ? "contained" : "outlined" } onClick={() => handleTypeClick("Lower")}>Lower</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <h3>Exercises</h3>
        <ButtonGroup>
          <Button color="secondary" variant={exerciseAmount === 5 ? "contained" : "outlined" } onClick={() => handleAmountClick(5)}>5</Button>
          <Button color="secondary" variant={exerciseAmount === 10 ? "contained" : "outlined" } onClick={() => handleAmountClick(10)}>10</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <h3>Workout Style</h3>
        <ButtonGroup>
          <Button color="secondary" variant={goal === "Power" ? "contained" : "outlined" } onClick={() => handleGoalClick("Power")}>Power</Button>
          <Button color="secondary" variant={goal === "Strength" ? "contained" : "outlined" } onClick={() => handleGoalClick("Strength")}>Strength</Button>
          <Button color="secondary" variant={goal === "Conditioning" ? "contained" : "outlined" } onClick={() => handleGoalClick("Conditioning")}>Conditioning</Button>
        </ButtonGroup>
        
      </Box>
    </Box>
  );
}

export default TargetArea;
