import { Button, ButtonGroup, Box } from "@mui/material";
import React from "react";

function TargetArea({handleTypeClick, handleRepsClick, handleAmountClick}) {
  return (
    <Box>
      <Box>
        <h3>Workout Type</h3>
        <ButtonGroup>
          <Button onClick={() => handleTypeClick("Full")}>Full</Button>
          <Button onClick={() => handleTypeClick("Upper")}>Upper</Button>
          <Button onClick={() => handleTypeClick("Lower")}>Lower</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <h3>Exercises</h3>
        <ButtonGroup>
          <Button onClick={() => handleAmountClick(5)}>5</Button>
          <Button onClick={() => handleAmountClick(10)}>10</Button>
        </ButtonGroup>
      </Box>
      <Box>
        <h3>Reps</h3>
        <ButtonGroup>
          <Button onClick={() => handleRepsClick("6-10")}>6-10</Button>
          <Button onClick={() => handleRepsClick("10-15")}>10-15</Button>
          <Button onClick={() => handleRepsClick("Time")}>Time</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default TargetArea;
