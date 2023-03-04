import React, { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useAuth } from "../../context/AuthContext";
import WorkoutSelector from "../../components/WorkoutSelector";
import GenerateBtn from "../../components/GenerateBtn";
import Workout from "../../components/WorkoutDisplay";
import SaveWorkout from "../../components/SaveWorkout";
import DialogModal from "../../components/DialogModal";
import useWorkoutInfo from "../../hooks/useWorkoutInfo";
import ExerciseDescription from "../../components/ExerciseDescription";
import { generateWorkout } from "../../utils/generateWorkout";

function Generator() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { currentUser } = useAuth();
  const [workout, setWorkout] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [open, setOpen] = useState(false);
  const {
    workoutInfo,
    handleTypeClick,
    handleTimeClick,
    handleGoalClick,
    handleCoreClick,
    handleWarmupClick,
    handleCooldownClick,
  } = useWorkoutInfo();

  const handleGenerateClick = () => {
    const workout = generateWorkout(workoutInfo);
    setWorkout(workout);
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
          handleCoreClick={handleCoreClick}
          handleWarmupClick={handleWarmupClick}
          handleCooldownClick={handleCooldownClick}
          workoutType={workoutInfo.workoutType}
          exerciseTime={workoutInfo.exerciseTime}
          goal={workoutInfo.goal}
        />
        <GenerateBtn
          generateWorkout={handleGenerateClick}
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
                  <Typography variant="h5" color={colors.primary[900]}>
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
          display: workout ? "block" : "none",
          gridArea: "Exercise-List",
          margin: "0 auto",
          backgroundColor: colors.backgroundWhite[100],
          padding: "2rem",
          minWidth: "100%",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          borderRadius: "1rem",
        }}
      >
        <Workout workout={workout} setSelectedExercise={setSelectedExercise} />
      </Box>
      <Box
        sx={{
          display: selectedExercise ? "block" : "none",
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
