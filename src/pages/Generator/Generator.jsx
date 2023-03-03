import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { EXERCISES } from "../../exercises/exercises";
import { WARMUPS } from "../../exercises/warmups";
import { COOLDOWNS } from "../../exercises/cooldowns";
import { CORE } from "../../exercises/core";
import WorkoutSelector from "../../components/WorkoutSelector";
import GenerateBtn from "../../components/GenerateBtn";
import Workout from "../../components/WorkoutDisplay";
import SaveWorkout from "../../components/SaveWorkout";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../theme";
import ExerciseDescription from "../../components/ExerciseDescription";
import { useAuth } from "../../context/AuthContext";
import DialogModal from "../../components/DialogModal";

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
const setsLookup = { 10: 2, 20: 3, 30: 4, 60: 5 };
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
  const [workout, setWorkout] = useState(null);
  const [additional, setAdditional] = useState([]);
  const includeWarmup = additional.includes("Warmup");
  const includeCooldown = additional.includes("Cooldown");
  const includeCore = additional.includes("Core");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [workoutInfo, setWorkoutInfo] = useState({
    workoutType: null,
    exerciseTime: null,
    goal: null,
    exerciseAmount: null,
    reps: null,
    sets: null,
  });
  const { currentUser } = useAuth();
  const [open, setOpen] = useState(false);

  const handleAdditionalClick = (option) => {
    if (additional.includes(option)) {
      setAdditional(additional.filter((item) => item !== option));
    } else {
      setAdditional([...additional, option]);
    }
  };

  const handleTypeClick = (workoutType) => {
    setWorkoutInfo({ ...workoutInfo, workoutType });
  };

  const handleTimeClick = (exerciseTime) => {
    setWorkoutInfo({ ...workoutInfo, exerciseTime });
  };

  const handleGoalClick = (goal) => {
    setWorkoutInfo({ ...workoutInfo, goal });
  };

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

  const generateWorkout = () => {
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
        display: "grid",
        gridAutoColumns: "1fr",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
        gridTemplateRows: { xs: "1fr 1fr 1fr", md: "1fr 1fr", lg: "1fr" },
        gap: "1rem",
        gridTemplateAreas: {
          xs: '"Selector" "Exercise-List" "Description"',
          md: '"Selector Exercise-List" "Selector Description"',
          lg: "'Selector Exercise-List Description'",
        },
        height: "50%",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          gridArea: "Selector",
          margin: "0 auto",
          backgroundColor: colors.backgroundWhite[100],
          padding: "2rem",
          minWidth: "100%",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          borderRadius: "1rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
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
        {workout ? (
          <Box sx={{ marginTop: "4rem" }}>
            {currentUser ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setOpen(true)}
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
      <Box
        sx={{
          gridArea: "Exercise-List",
          margin: "0 auto",
          backgroundColor: colors.backgroundWhite[100],
          padding: "2rem",
          minWidth: "100%",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          borderRadius: "1rem",
        }}
      >
        <Workout
          workout={workout}
          setSelectedExercise={setSelectedExercise}
        />
      </Box>
      <Box
        sx={{
          gridArea: "Description",
          margin: "0 auto",
          backgroundColor: colors.backgroundWhite[100],
          padding: "2rem",
          minWidth: "100%",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          borderRadius: "1rem",
        }}
      >
        <ExerciseDescription exercise={selectedExercise} />
      </Box>
      <DialogModal
        open={open}
        setOpen={setOpen}
        children={<SaveWorkout setOpen={setOpen} workout={workout} />}
      />
    </Box>
  );
}

export default Generator;
