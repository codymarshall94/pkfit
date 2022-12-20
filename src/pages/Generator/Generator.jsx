import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { EXERCISES } from "../../exercises";
import WorkoutSelector from "../../components/WorkoutSelector";
import GenerateBtn from "../../components/GenerateBtn";
import Workout from "../../components/Workout";
import DescriptionModal from "../../components/DescriptionModal";
import SaveWorkoutModal from "../../components/SaveWorkoutModal";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const filteredUpper = EXERCISES.filter((exer) =>
  exer.exerciseType.includes("Upperbody")
);
const filteredLower = EXERCISES.filter((exer) =>
  exer.exerciseType.includes("Lowerbody")
);

const powerReps = [1, 3, 5];
const strengthReps = [5, 6, 8, 10];
const conditioningReps = [8, 10, 12, 15];

function Generator() {
  const user = useSelector((state) => state.user.user);
  const [workoutType, setWorkoutType] = useState(null);
  const [exerciseTime, setExerciseTime] = useState(null);
  const [goal, setGoal] = useState(null);
  const [reps, setReps] = useState(null);
  const [exerciseAmount, setExerciseAmount] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openSaveModal, isOpenSaveModal] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
  }, [workout]);

  const generateWorkout = () => {
    let workoutArary = [];
    let newArr = [];
    let sets;
    setIsVisible(false);

    switch (exerciseAmount) {
      case 2:
        sets = 2;
        break;
      case 3:
        sets = 3;
        break;
      case 5:
        sets = 4;
        break;
      default:
        break;
    }

    switch (workoutType) {
      case "Full":
        let shuffledFull = EXERCISES.sort(() => Math.random() - 0.5);
        newArr = shuffledFull.slice(0, exerciseAmount);
        break;
      case "Upper":
        let shuffledUpper = filteredUpper.sort(() => Math.random() - 0.5);
        newArr = shuffledUpper.slice(0, exerciseAmount);
        break;
      case "Lower":
        let shuffledLower = filteredLower.sort(() => Math.random() - 0.5);
        newArr = shuffledLower.slice(0, exerciseAmount);
        break;
      default:
        break;
    }

    newArr.forEach((exer) => {
      let exercise = {
        id: exer.id,
        name: exer.name,
        reps: exer.isStatic
          ? "30-60s"
          : reps[Math.floor(Math.random() * reps.length)],
        sets: sets,
        description: exer.description,
        image: exer.image,
        usedFor: exer.usedFor,
      };
      workoutArary.push(exercise);
    });
    setWorkout(workoutArary);
  };

  const handleTypeClick = (type) => {
    setWorkoutType(type);
  };

  const handleTimeClick = (amount) => {
    setExerciseTime(amount);
    switch (amount) {
      case 5:
        setExerciseAmount(2);
        break;
      case 10:
        setExerciseAmount(3);
        break;
      case 20:
        setExerciseAmount(5);
        break;
      default:
        break;
    }
  };

  const handleGoalClick = (goal) => {
    setGoal(goal);
    switch (goal) {
      case "Power":
        setReps(powerReps);
        break;
      case "Strength":
        setReps(strengthReps);
        break;
      case "Conditioning":
        setReps(conditioningReps);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginTop: "5rem",
      }}
    >
      <Box sx={{ marginBottom: "4rem" }}>
        <WorkoutSelector
          handleTypeClick={handleTypeClick}
          handleTimeClick={handleTimeClick}
          handleGoalClick={handleGoalClick}
          workoutType={workoutType}
          exerciseTime={exerciseTime}
          goal={goal}
        />
        <GenerateBtn
          generateWorkout={generateWorkout}
          workoutType={workoutType}
          exerciseAmount={exerciseTime}
          goal={goal}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "70%", lg: "50%", xl: "30%" },
        }}
      >
        <Workout
          workout={workout}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        {user && workout && (
          <Button
            color="primary"
            variant="contained"
            onClick={() => isOpenSaveModal(true)}
          >
            Save Workout
          </Button>
        )}
        {!user && workout && (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Typography variant="h6">Log in to save this workout</Typography>
          </Link>
        )}
      </Box>

      <DescriptionModal open={open} setOpen={setOpen} />
      <SaveWorkoutModal
        isOpen={openSaveModal}
        setIsOpen={isOpenSaveModal}
        workout={workout}
        workoutType={workoutType}
        exerciseTime={exerciseTime}
        goal={goal}
      />
    </Box>
  );
}

export default Generator;
