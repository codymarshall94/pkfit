import { FormGroup } from "@mui/material";
import GeneratorCheckbox from "./GeneratorCheckbox";
import SelectorItem from "./SelectorItem";

const typeOptions = ["Full", "Upper", "Lower"];
const timeOptions = [10, 20, 30, 60];
const goalOptions = ["Power", "Strength", "Conditioning"];

const GenerateSelector = ({
  handleTypeClick,
  handleGoalClick,
  handleTimeClick,
  handleWeightedClick,
  handlePushClick,
  handlePullClick,
  weighted,
  push,
  pull,
  workoutType,
  exerciseTime,
  goal,
}) => {
  const selectors = [
    {
      label: "Workout Type",
      options: typeOptions,
      value: workoutType,
      handleClick: handleTypeClick,
    },
    {
      label: "Time (min)",
      options: timeOptions,
      value: exerciseTime,
      handleClick: handleTimeClick,
    },
    {
      label: "Goal",
      options: goalOptions,
      value: goal,
      handleClick: handleGoalClick,
    },
  ];

  const checkBoxes = [
    {
      label: "Weighted",
      value: weighted,
      handleClick: handleWeightedClick,
      isDisabled: false,
    },
    {
      label: "Push",
      value: push,
      handleClick: handlePushClick,
      isDisabled: workoutType !== "Upper",
    },
    {
      label: "Pull",
      value: pull,
      handleClick: handlePullClick,
      isDisabled: workoutType !== "Upper",
    },
  ];

  return (
    <>
      {selectors.map((selector) => (
        <SelectorItem
          key={selector.label}
          label={selector.label}
          options={selector.options}
          value={selector.value}
          handleClick={selector.handleClick}
        />
      ))}
      <FormGroup row sx={{ marginTop: "1rem" }}>
        {checkBoxes.map((checkBox) => (
          <GeneratorCheckbox
            key={checkBox.label}
            label={checkBox.label}
            value={checkBox.value}
            handleClick={checkBox.handleClick}
            isDisabled={checkBox.isDisabled}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default GenerateSelector;
