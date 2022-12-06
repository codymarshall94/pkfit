import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import { EXERCISES } from "../../exercises";
import ExerciseSelector from "../../components/ExerciseSelector";
import GenerateBtn from "../../components/GenerateBtn";
import Workout from "../../components/Workout";
import DescriptionModal from "../../components/DescriptionModal";
import HowToModal from "../../components/HowToModal";

const filteredUpper = EXERCISES.filter((exer) =>
  exer.exerciseType.includes("Upperbody")
);
const filteredLower = EXERCISES.filter((exer) =>
  exer.exerciseType.includes("Lowerbody")
);

function Generator() {
  const [workoutType, setWorkoutType] = useState(null);
  const [exerciseAmount, setExerciseAmount] = useState(null);
  const [goal, setGoal] = useState(null);
  const [reps, setReps] = useState(null);
  const [sets, setSets] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [open, setOpen] = useState(false);
  const [openHowTo, setOpenHowTo] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let repsArray = [];
  let shuffled;
  let newArr;
  let shuffledUpper;
  let shuffledLower;
  let newUpper;
  let newLower;
  let shuffledFiltered;
  let shuffledFilteredUpper;
  let shuffledFilteredLower;

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
  }, [workout]);

  const generateWorkout = () => {
    setIsVisible(false);
    handleSets();
    handleReps();
    shuffled = [...filteredLower].sort(() => Math.random() - 0.5);

    switch (workoutType) {
      case "Lower":
        shuffled = [...filteredLower].sort(() => Math.random() - 0.5);
        shuffledFiltered = shuffled.filter(
          (exer) => exer[`is${goal}`] === true
        );
        newArr = shuffledFiltered.slice(0, exerciseAmount);
        setWorkout(newArr);
        break;
      case "Upper":
        shuffled = [...filteredUpper].sort(() => Math.random() - 0.5);
        shuffledFiltered = shuffled.filter(
          (exer) => exer[`is${goal}`] === true
        );
        newArr = shuffledFiltered.slice(0, exerciseAmount);
        setWorkout(newArr);
        break;
      case "Full":
        shuffledUpper = [...filteredUpper].sort(() => Math.random() - 0.5);
        shuffledLower = [...filteredLower].sort(() => Math.random() - 0.5);
        shuffledFilteredUpper = shuffledUpper.filter(
          (exer) => exer[`is${goal}`] === true
        );
        shuffledFilteredLower = shuffledLower.filter(
          (exer) => exer[`is${goal}`] === true
        );
        newUpper = shuffledFilteredUpper.slice(0, exerciseAmount / 2);
        newLower = shuffledFilteredLower.slice(0, exerciseAmount / 2 + 1);
        newArr = newUpper.concat(newLower);
        setWorkout(newArr);
        break;
      default:
        break;
    }
  };

  const handleReps = () => {
    switch (goal) {
      case "Power":
        setReps([1, 5]);
        break;
      case "Strength":
        setReps([6, 8]);
        break;
      case "Conditioning":
        setReps([12, 20]);
        break;
      default:
        break;
    }
  };

  const handleOpenHowTo = () => {
    setOpenHowTo(!openHowTo);
  };

  const handleSets = () => {
    setSets(10 / exerciseAmount);
  };

  const handleTypeClick = (type) => {
    setWorkoutType(type);
  };

  const handleAmountClick = (amount) => {
    setExerciseAmount(amount);
  };

  const handleGoalClick = (goal) => {
    setGoal(goal);
  };

  return (
    <Box sx={{ textAlign: "center", margin: "auto" }}>
      <InfoIcon
        sx={{
          fontSize: { xs: "2rem", lg: "2.5rem" },
          position: "absolute",
          right: "1rem",
          top: "3.5rem",
          cursor: "pointer",
        }}
        onClick={() => handleOpenHowTo()}
      />
      <ExerciseSelector
        handleTypeClick={handleTypeClick}
        handleAmountClick={handleAmountClick}
        handleGoalClick={handleGoalClick}
        workoutType={workoutType}
        exerciseAmount={exerciseAmount}
        goal={goal}
      />
      <GenerateBtn
        generateWorkout={generateWorkout}
        workoutType={workoutType}
        exerciseAmount={exerciseAmount}
        goal={goal}
      />
      <Workout
        workout={workout}
        sets={sets}
        reps={reps}
        repsArray={repsArray}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <DescriptionModal open={open} setOpen={setOpen} />
      <HowToModal openHowTo={openHowTo} handleOpenHowTo={handleOpenHowTo} />
    </Box>
  );
}

export default Generator;
