import React from "react";
import Workout from "../../components/WorkoutDisplay";
import { useSelector } from "react-redux";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

function SavedWorkout() {
  const workout = useSelector((state) => state.selectedWorkout.selectedWorkout);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: "5rem",
        height: "100vh",
        color: colors.primary[900],
      }}
    >
      <Typography variant="h1" sx={{ margin: { xs: "1rem", sm: "2rem 0" } }}>
        {workout.name}
      </Typography>
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Workout workout={workout.exercises} />
      </Box>
    </Box>
  );
}

export default SavedWorkout;
