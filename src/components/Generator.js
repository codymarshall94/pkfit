import React, { useState, useEffect } from "react";
import { LOWERBODY } from "../lowerbody";
import { UPPERBODY } from "../upperbody";
import Header from "./Header";
import ExerciseSelector from "./ExerciseSelector";
import GenerateBtn from "./GenerateBtn";
import Workout from "./Workout";
import DescriptionModal from "./DescriptionModal";

function Generator() {
    const [workoutType, setWorkoutType] = useState(null);
    const [exerciseAmount, setExerciseAmount] = useState(null);
    const [goal, setGoal] = useState(null);
    const [reps, setReps] = useState(null);
    const [sets, setSets] = useState(null);
    const [workout, setWorkout] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const handleOpen = () => setOpen(true);
  
    let repsArray = [];
    let shuffled;
    let newArr;
    let shuffledUpper;
    let shuffledLower;
    let newUpper;
    let newLower;
    let fullWorkArr;

    useEffect(() => {
      setTimeout(() => setIsVisible(true), 150);
    }, [workout])
    
    //function to generate workout
    const generateWorkout = () => {
      setIsVisible(false);
      handleSets();
      handleReps();
  
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
  
    const handleReps = () => {
      if (goal === "Power") {
        setReps("1-5 @ 85-100%");
      }
      if (goal === "Strength") {
        setReps("6-8 @ 70-90%");
      }
      if (goal === "Conditioning") {
        setReps("12-20");
      }
    };
  
    /*
    const handleReps = () => {
      if (reps === "6-10") {
        for (let i = 0; i < 8; i++) {
          let randomNum = Math.round(Math.random() * (10 - 6) + 6);
          repsArray.push(randomNum);
        }
      }
      console.log(repsArray);
    }; */
  
    const handleSets = () => {
      if (exerciseAmount === 5) {
        setSets(3);
      }
      if (exerciseAmount === 10) {
        setSets(2);
      }
    };
  
    const openModalWithExercise = (item) => {
      setSelectedExercise(item);
      handleOpen();
    };
  
    const handleTypeClick = (type) => {
      setWorkoutType(type);
    };
  
    const handleAmountClick = (amount) => {
      setExerciseAmount(amount);
    };
  
    const handleGoalClick = (g) => {
      setGoal(g);
    };
  
    return (
      <div className="App">
        <Header />
        {/*Title*/}
        {/*Button To Select if lower/upper/full*/}
        {/*Select rep ranges*/}
        <ExerciseSelector
          handleTypeClick={handleTypeClick}
          handleAmountClick={handleAmountClick}
          handleGoalClick={handleGoalClick}
          workoutType={workoutType}
          exerciseAmount={exerciseAmount}
          goal={goal}
        />
        {/*Generate Workout Button*/}
        <GenerateBtn
          generateWorkout={generateWorkout}
          workoutType={workoutType}
          exerciseAmount={exerciseAmount}
          goal={goal}
        />
        {/*Display exercise list*/}
        <Workout
          workout={workout}
          openModalWithExercise={openModalWithExercise}
          sets={sets}
          reps={reps}
          repsArray={repsArray}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        <DescriptionModal
          selectedExercise={selectedExercise}
          open={open}
          setOpen={setOpen}
        />
      </div>
    );
}

export default Generator