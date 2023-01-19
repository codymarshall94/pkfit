import { Button, ButtonGroup, Box, Typography } from "@mui/material";
import React from "react";

const typeOptions = ["Full", "Upper", "Lower"];
const timeOptions = [5, 10, 20];
const goalOptions = ["Power", "Strength", "Conditioning"];
const additonalOptions = ["Warmup", "Core", "Cooldown"];

function WorkoutSelector({
  handleTypeClick,
  handleGoalClick,
  handleTimeClick,
  workoutType,
  exerciseTime,
  goal,
  additional,
  handleAdditionalClick,
}) {

  return (
    <Box>
      <Box>
        <Typography variant="h3" sx={{ margin: ".5rem 0" }}>
          Target Area
        </Typography>
        <ButtonGroup>
          {typeOptions.map((type) => (
            <Button
              key={type}
              color="secondary"
              variant={workoutType === type ? "contained" : "outlined"}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="h3" sx={{ margin: ".5rem 0" }}>
          Time (min)
        </Typography>
        <ButtonGroup>
          {timeOptions.map((time) => (
            <Button
              key={time}
              color="secondary"
              variant={exerciseTime === time ? "contained" : "outlined"}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="h3" sx={{ margin: ".5rem 0" }}>
          Goal
        </Typography>
        <ButtonGroup>
          {goalOptions.map((goalType) => (
            <Button
              key={goalType}
              color="secondary"
              variant={goal === goalType ? "contained" : "outlined"}
              onClick={() => handleGoalClick(goalType)}
            >
              {goalType}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box>
        <Typography variant="h3" sx={{ margin: ".5rem 0" }}>
          Add Ons
        </Typography>
        <ButtonGroup>
          {additonalOptions.map((option) => (
            <Button
              key={option}
              color="secondary"
              variant={additional.includes(option) ? "contained" : "outlined"}
              onClick={() => handleAdditionalClick(option)}
            >
              {option}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default WorkoutSelector;
