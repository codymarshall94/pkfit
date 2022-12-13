import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from "react-redux";
import { EXERCISES } from "../../exercises";
import ExerciseSelector from "../../components/ExerciseSelector";
import GenerateBtn from "../../components/GenerateBtn";
import Workout from "../../components/Workout";
import DescriptionModal from "../../components/DescriptionModal";
import HowToModal from "../../components/HowToModal";
import SaveWorkoutModal from "../../components/SaveWorkoutModal";
import { Link } from "react-router-dom";

const filteredUpper = EXERCISES.filter((exer) =>
  exer.exerciseType.includes("Upperbody")
);
const filteredLower = EXERCISES.filter((exer) =>
  exer.exerciseType.includes("Lowerbody")
);

function Generator() {
  const user = useSelector((state) => state.user.user);
  const [workoutType, setWorkoutType] = useState(null);
  const [exerciseTime, setExerciseTime] = useState(null);
  const [goal, setGoal] = useState(null);
  const [reps, setReps] = useState(null);
  const [sets, setSets] = useState(null);
  const [exerciseAmount, setExerciseAmount] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [open, setOpen] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openSaveModal, isOpenSaveModal] = useState(false);

  let repsArray = [];
  let shuffled;
  let newArr;
  let shuffledUpper;
  let shuffledLower;
  let newUpper;
  let newLower;

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
  }, [workout]);

  const generateWorkout = async () => {
    setIsVisible(false);

    switch (exerciseAmount) {
      case 2:
        setSets(2);
        break;
      case 3:
        setSets(3);
        break;
      case 5:
        setSets(4);
        break;
      default:
        break;
    }

    switch (workoutType) {
      case "Full":
        if (exerciseTime) shuffled = EXERCISES.sort(() => Math.random() - 0.5);
        newArr = shuffled.slice(0, exerciseAmount);
        setWorkout(newArr);
        break;
      case "Upper":
        shuffledUpper = filteredUpper.sort(() => Math.random() - 0.5);
        newUpper = shuffledUpper.slice(0, exerciseAmount);
        setWorkout(newUpper);
        console.log(newUpper);
        break;
      case "Lower":
        shuffledLower = filteredLower.sort(() => Math.random() - 0.5);
        newLower = shuffledLower.slice(0, exerciseAmount);
        setWorkout(newLower);
        break;
      default:
        break;
    }
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

  const handleOpenInfoModal = () => {
    setOpenInfoModal(!openInfoModal);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "auto",
      }}
    >
      <InfoIcon
        sx={{
          fontSize: { xs: "2rem", lg: "2.5rem" },
          position: "absolute",
          right: "1rem",
          top: "3.5rem",
          cursor: "pointer",
        }}
        onClick={() => handleOpenInfoModal()}
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: "10%", sm: "20%" },
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ExerciseSelector
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
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "100%", md: "80%", lg: "60%" },
        }}
      >
        <Workout
          workout={workout}
          reps={reps}
          sets={sets}
          repsArray={repsArray}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
        {user && workout && (
          <Button onClick={() => isOpenSaveModal(true)}>Save Workout</Button>
        )}
        {!user && workout && (
          <Link to="/login" style={{ textDecoration: "none" }}>
            Log in to save this workout
          </Link>
        )}
      </Box>

      <DescriptionModal open={open} setOpen={setOpen} />
      <SaveWorkoutModal
        isOpen={openSaveModal}
        setIsOpen={isOpenSaveModal}
        workout={workout}
        workoutType={workoutType}
        exerciseAmount={exerciseTime}
        goal={goal}
      />
      <HowToModal
        openInfoModal={openInfoModal}
        handleOpenInfoModal={handleOpenInfoModal}
      />
    </Box>
  );
}

export default Generator;
