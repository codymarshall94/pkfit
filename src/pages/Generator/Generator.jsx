import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { EXERCISES } from "../../exercises";
import { WARMUPS } from "../../warmups";
import { COOLDOWNS } from "../../cooldowns";
import { CORE } from "../../core";
import WorkoutSelector from "../../components/WorkoutSelector";
import GenerateBtn from "../../components/GenerateBtn";
import Workout from "../../components/Workout";
import DescriptionModal from "../../components/DescriptionModal";
import SaveWorkoutModal from "../../components/SaveWorkoutModal";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const filteredExercises = (type) =>
  EXERCISES.filter((exer) => exer.exerciseType.includes(type));

const powerReps = [1, 3, 5];
const strengthReps = [5, 6, 8, 10];
const conditioningReps = [8, 10, 12, 15];
const warmupReps = [10, 20, "30s", "60s"];
const cooldownReps = ["30s", "60s", "120s"];
const coreReps = ["30s", "60s"];
const repsLookup = {
  Power: powerReps,
  Strength: strengthReps,
  Conditioning: conditioningReps,
};
const setsLookup = { 5: 2, 10: 3, 20: 5 };
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

const createWorkoutExercise = (exer, sets, reps) => {
  const randomReps = reps[Math.floor(Math.random() * reps.length)];
  return {
    id: exer.id,
    name: exer.name,
    reps: exer.isStatic ? "30-60s" : randomReps,
    sets: sets,
    description: exer.description,
    image: exer.image,
    usedFor: exer.usedFor,
  };
};

function Generator() {
  const user = useSelector((state) => state.user.user);
  const [openDescriptionModal, setOpenDescriptionModal] = useState(false);
  const [workout, setWorkout] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const [additional, setAdditional] = useState([]);
  const includeWarmup = additional.includes("Warmup");
  const includeCooldown = additional.includes("Cooldown");
  const includeCore = additional.includes("Core");

  const handleAdditionalClick = (option) => {
    if (additional.includes(option)) {
      setAdditional(additional.filter((item) => item !== option));
    } else {
      setAdditional([...additional, option]);
    }
  };

  const [workoutInfo, setWorkoutInfo] = useState({
    workoutType: null,
    exerciseTime: null,
    goal: null,
    exerciseAmount: null,
    reps: null,
    sets: null,
  });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
  }, [workout]);

  useEffect(() => {
    const { workoutType, exerciseTime, goal } = workoutInfo;
    if (workoutType && exerciseTime && goal) {
      setWorkoutInfo({
        ...workoutInfo,
        exerciseAmount: setsLookup[exerciseTime],
        reps: repsLookup[goal],
        sets: setsLookup[exerciseTime],
      });
    }
  }, [workoutInfo.workoutType, workoutInfo.exerciseTime, workoutInfo.goal]);

  const handleTypeClick = (workoutType) => {
    setWorkoutInfo({ ...workoutInfo, workoutType });
  };

  const handleTimeClick = (exerciseTime) => {
    setWorkoutInfo({ ...workoutInfo, exerciseTime });
  };

  const handleGoalClick = (goal) => {
    setWorkoutInfo({ ...workoutInfo, goal });
  };

  const generateWorkout = () => {
    setIsVisible(false);
    let workoutArary = [];
    let newArr = [];
    let { workoutType, exerciseAmount } = workoutInfo;

    switch (workoutType) {
      case "Full":
        newArr = shuffleArray(EXERCISES).slice(0, exerciseAmount);
        break;
      case "Upper":
        newArr = shuffleArray(filteredExercises("Upperbody")).slice(
          0,
          exerciseAmount
        );
        break;
      case "Lower":
        newArr = shuffleArray(filteredExercises("Lowerbody")).slice(
          0,
          exerciseAmount
        );
        break;
      default:
        newArr = [];
        break;
    }
    if (newArr.length > 0) {
      workoutArary = newArr.map((exer) =>
        createWorkoutExercise(
          exer,
          workoutInfo.sets,
          repsLookup[workoutInfo.goal]
        )
      );
      if (includeWarmup) {
        const warmupCategory =
          workoutType === "Full"
            ? "Full"
            : workoutType === "Upper"
            ? "Upperbody"
            : "Lowerbody";
        const filteredWarmups = WARMUPS.filter((warmup) =>
          warmup.category.includes(warmupCategory)
        );
        const randomWarmup = shuffleArray(filteredWarmups)[0];
        workoutArary.unshift({
          id: randomWarmup.id,
          name: randomWarmup.name,
          reps: warmupReps[Math.floor(Math.random() * warmupReps.length)],
          sets: 1,
          description: randomWarmup.description,
          image: randomWarmup.image,
          usedFor: randomWarmup.usedFor,
        });
      }
      if (includeCore) {
        const randomCore = shuffleArray(CORE)[0];
        workoutArary.push({
          id: randomCore.id,
          name: randomCore.name,
          reps: coreReps[Math.floor(Math.random() * coreReps.length)],
          sets: 1,
          description: randomCore.description,
          image: randomCore.image,
          usedFor: randomCore.usedFor,
        });
      }
      if (includeCooldown) {
        const cooldownCategory =
          workoutType === "Full"
            ? "Full"
            : workoutType === "Upper"
            ? "Upperbody"
            : "Lowerbody";
        const filteredCooldowns = COOLDOWNS.filter((cooldown) =>
          cooldown.category.includes(cooldownCategory)
        );
        const randomCooldown = shuffleArray(filteredCooldowns)[0];
        workoutArary.push({
          id: randomCooldown.id,
          name: randomCooldown.name,
          reps: cooldownReps[Math.floor(Math.random() * cooldownReps.length)],
          sets: 1,
          description: randomCooldown.description,
          image: randomCooldown.image,
          usedFor: randomCooldown.usedFor,
        });
      }

      setWorkout(workoutArary);
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
          workoutType={workoutInfo.workoutType}
          exerciseTime={workoutInfo.exerciseTime}
          goal={workoutInfo.goal}
          additional={additional}
          handleAdditionalClick={handleAdditionalClick}
        />
        <GenerateBtn
          generateWorkout={generateWorkout}
          workoutInfo={workoutInfo}
        />
      </Box>
      <Workout
        workout={workout}
        openSaveModal={openSaveModal}
        isVisible={isVisible}
      />
      <DescriptionModal
        open={openDescriptionModal}
        setOpen={setOpenDescriptionModal}
        workout={workout}
      />
      <SaveWorkoutModal
        openSaveModal={openSaveModal}
        setOpenSaveModal={setOpenSaveModal}
        workout={workout}
        user={user}
      />
      {workout ? (
        <Box sx={{ marginTop: "4rem" }}>
          {user ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpenSaveModal(true)}
            >
              Save Workout
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Typography variant="subtitle1">
                  Login to save your workout
                </Typography>
              </Link>
            </>
          )}
        </Box>
      ) : (
        <Box sx={{ marginTop: "4rem" }}>
          <Typography variant="subtitle1">
            Choose your workout type, time, and goal to generate a workout
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Generator;
