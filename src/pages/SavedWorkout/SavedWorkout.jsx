import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Workout from "../../components/Workout";
import { useSelector } from "react-redux";
import DescriptionModal from "../../components/DescriptionModal";
import Typography from "@mui/material/Typography";
import BackButton from "../../components/BackButton";
import TimerModal from "../../components/TimerModal";
import TimerIcon from '@mui/icons-material/Timer';

function SavedWorkout() {
  const [open, setOpen] = useState(false);
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
      <Button sx={{position: "absolute", top: "5rem", right: ".5rem"}} variant="contained" onClick={() => setOpen(true)}><TimerIcon /></Button>

      <DescriptionModal />
      <TimerModal open={open} setOpen={setOpen}/>
    </Box>
  );
}

export default SavedWorkout;
