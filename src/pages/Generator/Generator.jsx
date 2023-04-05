import React, { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import GenerateSelector from "./GenerateSelector";
import GenerateBtn from "./GenerateBtn";
import WorkoutDisplay from "../../components/WorkoutDisplay";
import SaveWorkout from "../../components/SaveWorkout";
import DialogModal from "../../components/DialogModal";
import useWorkoutInfo from "../../hooks/useWorkoutInfo";
import { generateWorkout } from "../../utils/generateWorkout";
import useModal from "../../hooks/useModal";
import ExerciseDescription from "../../components/ExerciseDescription";
import GenerateModal from "../../components/GenerateModal";

const GeneratorFooter = ({ workout, setOpen }) => {
  const theme = useTheme();
  const { currentUser } = useAuth();

  return (
    <Box
      width="100%"
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: {
          xs: "1rem",
          md: "2rem 4rem",
        },
      }}
    >
      {workout ? (
        <Box sx={{ margin: "1rem 0" }}>
          {currentUser ? (
            <Button
              variant="contained"
              color="red"
              onClick={() => setOpen(true)}
              sx={{ marginTop: "1rem", fontWeight: "600" }}
            >
              Save Workout
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Typography variant="h5" color={theme.palette.text.primary}>
                  Login to save your workout
                </Typography>
              </Link>
            </>
          )}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            color={theme.palette.text.primary}
            fontWeight="600"
          >
            Choose your workout type, time, and goal to generate a workout
          </Typography>
        </Box>
      )}
    </Box>
  );
};

function Generator() {
  const [workout, setWorkout] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [open, setOpen] = useState(false);
  const { isShowing, toggle } = useModal();
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#FDFBFE",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <GeneratorFooter workout={workout} setOpen={setOpen} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <GenerateSelector
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
      </Box>
      <WorkoutDisplay
        workout={workout}
        setSelectedExercise={setSelectedExercise}
        toggle={toggle} //gotta figure out why cant usehook in greybtn component
      />
      <GenerateModal
        show={isShowing}
        hide={toggle}
        children={<ExerciseDescription exercise={selectedExercise} />}
      />
      <DialogModal
        open={open}
        setOpen={setOpen}
        children={<SaveWorkout setOpen={setOpen} workout={workout} />}
      />
    </Box>
  );
}

export default Generator;
