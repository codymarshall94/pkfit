import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Button,
  ButtonGroup,
  Box,
  Typography,
  Input,
  InputLabel,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const typeOptions = ["Full", "Upper", "Lower"];
const timeOptions = [10, 20, 30, 60];
const goalOptions = ["Power", "Strength", "Conditioning"];

const selectorOptions = [
  { label: "Workout Type", selections: typeOptions },
  { label: "Time (min)", selections: timeOptions },
  { label: "Goal", selections: goalOptions },
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
        sx={{
          margin: ".5rem 0",
          color: theme.palette.text.primary,
          fontWeight: 600,
        }}
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

const GenerateSelector = ({
  handleTypeClick,
  handleGoalClick,
  handleTimeClick,
  workoutType,
  exerciseTime,
  weighted,
  handleWeightedClick,
  goal,
  handlePushClick,
  handlePullClick,
  push,
  pull,
}) => {
  console.log(push, pull);
  const theme = useTheme();
  return (
    <>
      {selectorOptions.map((option) => (
        <SelectorItem
          key={option.label}
          label={option.label}
          options={option.selections}
          value={
            option.label === "Workout Type"
              ? workoutType
              : option.label === "Time (min)"
              ? exerciseTime
              : option.label === "Goal"
              ? goal
              : null
          }
          handleClick={
            option.label === "Workout Type"
              ? handleTypeClick
              : option.label === "Time (min)"
              ? handleTimeClick
              : option.label === "Goal"
              ? handleGoalClick
              : null
          }
        />
      ))}
      <FormGroup row sx={{ marginTop: "1rem" }}>
        <FormControlLabel
          control={
            <Checkbox
              name="weighted"
              id="weighted"
              checked={weighted}
              defaultChecked="true"
              onChange={() => handleWeightedClick(!weighted)}
              sx={{
                color: theme.palette.text.primary,
              }}
            />
          }
          label="Weighted"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="push"
              id="push"
              checked={push}
              disabled={workoutType !== "Upper"}
              onChange={() => handlePushClick(!push)}
              sx={{
                color: theme.palette.text.primary,
              }}
            />
          }
          label="Push"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="pull"
              id="pull"
              checked={pull}
              disabled={workoutType !== "Upper"}
              defaultChecked="true"
              onChange={() => handlePullClick(!pull)}
              sx={{
                color: theme.palette.text.primary,
              }}
            />
          }
          label="Pull"
        />
      </FormGroup>
    </>
  );
};

export default GenerateSelector;
