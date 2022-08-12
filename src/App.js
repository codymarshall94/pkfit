import React, { useState } from "react";
import { LOWERBODY } from "./lowerbody";
import { UPPERBODY } from "./upperbody";
import "./App.css";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ExerciseSelector from "./components/ExerciseSelector";
import GenerateBtn from "./components/GenerateBtn";
import Workout from "./components/Workout";

function App() {
  const [workoutType, setWorkoutType] = useState(null);
  const [exerciseAmount, setExerciseAmount] = useState(null);
  const [reps, setReps] = useState(null);
  const [workout, setWorkout] = useState(null);

  //function to generate workout
  const generateWorkout = () => {
    let shuffled;
    let newArr;
    let shuffledUpper;
    let shuffledLower;
    let newUpper;
    let newLower;
    let fullWorkArr;

    if (workoutType === "Lower") {
      shuffled = [...LOWERBODY].sort(() => Math.random() - 0.5);
      newArr = shuffled.slice(0, exerciseAmount);
      setWorkout(newArr);
    }
    if (workoutType === "Upper") {
      shuffled = [...UPPERBODY].sort(() => Math.random() - 0.5);
      newArr = shuffled.slice(0, exerciseAmount);
      setWorkout(newArr);
    }
    if (workoutType === "Full") {
      shuffledUpper = [...UPPERBODY].sort(() => Math.random() - 0.5);
      shuffledLower = [...LOWERBODY].sort(() => Math.random() - 0.5);
      newUpper = shuffledUpper.slice(0, exerciseAmount / 2);
      newLower = shuffledLower.slice(0, exerciseAmount / 2 + 1);
      fullWorkArr = newUpper.concat(newLower);
      setWorkout(fullWorkArr);
    }
  };

  const handleTypeClick = (type) => {
    setWorkoutType(type);
  };

  const handleAmountClick = (amount) => {
    setExerciseAmount(amount);
  };

  const handleRepsClick = (reps) => {
    setReps(reps);
  };

  return (
    <div className="App">
      <Header />
      {/*Title*/}
      <h1 className="app-title">Parkour Workout Generator</h1>
      {/*Button To Select if lower/upper/full*/}
      {/*Select rep ranges*/}
      <ExerciseSelector
        handleTypeClick={handleTypeClick}
        handleAmountClick={handleAmountClick}
        handleRepsClick={handleRepsClick}
      />
      {/*Show Selections*/}
      <Box sx={{ margin: "1rem" }}>
        {workoutType ? <Chip label={workoutType} variant="outlined" /> : null}
        {exerciseAmount ? (
          <Chip label={exerciseAmount} variant="outlined" />
        ) : null}
        {reps ? <Chip label={reps} variant="outlined" /> : null}
      </Box>

      {/*Generate Workout Button*/}
      <GenerateBtn
        generateWorkout={generateWorkout}
        workoutType={workoutType}
        exerciseAmount={exerciseAmount}
        reps={reps}
      />
      {/*Display exercise list*/}
      <Workout workout={workout} />
    </div>
  );
}

export default App;
