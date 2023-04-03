import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Button, ButtonGroup, Box, Typography } from "@mui/material";

const typeOptions = ["Full", "Upper", "Lower"];
const timeOptions = [10, 20, 30, 60];
const goalOptions = ["Power", "Strength", "Conditioning"];

const options = [
  { label: "Workout Type", options: typeOptions },
  { label: "Time (min)", options: timeOptions },
  { label: "Goal", options: goalOptions },
];

const SelectorItem = ({ label, options, value, handleClick }) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ margin: ".5rem 0", color: theme.palette.text.primary, fontWeight: 600 }}
      >
        {label}
      </Typography>
      <ButtonGroup>
        {options.map((option) => (
          <Button
            key={option}
            color="grey"
            variant={selected === option ? "contained" : "outlined"}
            onClick={() => handleClick(option)}
            sx={{ borderRadius: "2rem" }}
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

function GenerateSelector({
  handleTypeClick,
  handleGoalClick,
  handleTimeClick,
  workoutType,
  exerciseTime,
  goal,
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
              : goal
          }
          handleClick={
            option.label === "Workout Type"
              ? handleTypeClick
              : option.label === "Time (min)"
              ? handleTimeClick
              : handleGoalClick
          }
        />
      ))}
    </Box>
  );
}

export default GenerateSelector;
