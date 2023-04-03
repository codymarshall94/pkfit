import React from "react";
import WorkoutDisplay from "../../components/WorkoutDisplay";
import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
import PageHeader from "../../components/UI/PageHeader";
import TitleBackground from "../../components/TitleBackground";

function SavedWorkout() {
  const workout = useSelector((state) => state.selectedWorkout.selectedWorkout);

  return (
    <>
      <PageHeader title="Saved Workout" />
      <Box sx={{ position: "relative", width: "20rem", margin: "0 auto" }}>
        <TitleBackground width="20rem" />
        <Typography
          variant="h1"
          sx={{
            margin: {
              xs: "1rem",
              sm: "2rem 0",
              color: "white",
              textAlign: "center",
            },
          }}
        >
          {workout.name.toUpperCase()}
        </Typography>
      </Box>
      <WorkoutDisplay workout={workout.exercises} />
    </>
  );
}

export default SavedWorkout;
