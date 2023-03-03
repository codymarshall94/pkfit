import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, ButtonGroup, Box, Typography } from "@mui/material";
import { tokens } from "../theme";

const typeOptions = ["Full", "Upper", "Lower"];
const timeOptions = [10, 20, 30, 60];
const goalOptions = ["Power", "Strength", "Conditioning"];
const additonalOptions = ["Warmup", "Core", "Cooldown"];

const options = [
  { label: "Workout Type", options: typeOptions },
  { label: "Time (min)", options: timeOptions },
  { label: "Goal", options: goalOptions },
  { label: "Additional", options: additonalOptions },
];

const SelectorItem = ({ label, options, value, handleClick }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <Box>
      <Typography
        variant="h3"
        sx={{ margin: ".5rem 0", color: colors.primary[500] }}
      >
        {label}
      </Typography>
      <ButtonGroup>
        {options.map((option) => (
          <Button
            key={option}
            color="primary"
            variant={selected === option ? "contained" : "outlined"}
            onClick={() => handleClick(option)}
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

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
      {options.map((option) => (
        <SelectorItem
          key={option.label}
          label={option.label}
          options={option.options}
          value={
            option.label === "Workout Type"
              ? workoutType
              : option.label === "Time (min)"
              ? exerciseTime
              : option.label === "Goal"
              ? goal
              : additional
          }
          handleClick={
            option.label === "Workout Type"
              ? handleTypeClick
              : option.label === "Time (min)"
              ? handleTimeClick
              : option.label === "Goal"
              ? handleGoalClick
              : handleAdditionalClick
          }
        />
      ))}
    </Box>
  );
}

export default WorkoutSelector;
