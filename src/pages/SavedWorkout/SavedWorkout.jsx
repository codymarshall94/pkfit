import React from "react";
import Box from "@mui/material/Box";
import Workout from "../../components/Workout";
import { useSelector } from "react-redux";
import DescriptionModal from "../../components/DescriptionModal";
import Timer from "../../components/Timer";
import Typography from "@mui/material/Typography";
import BackButton from "../../components/BackButton";

function SavedWorkout() {
  const workout = useSelector((state) => state.selectedWorkout.selectedWorkout);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "5rem",
        height: "100vh",
      }}
    >
      <BackButton page="saved-workouts"/>
      <Typography variant="h1" sx={{margin: {xs: "1rem", sm: "2rem 0"}}}>{workout.name}</Typography>
      <Box sx={{
        width: {xs: "100%", md: "50%"},
      }}>
        <Workout workout={workout.exercises} isVisible={true} />
      </Box>

      <DescriptionModal />
      <Timer />
    </Box>
  );
}

export default SavedWorkout;
