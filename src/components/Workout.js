import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Workout({ workout }) {
  if (workout) {
    return (
      <Box sx={{ marginTop: "2rem" }}>
        <Grid container spacing={2}>
          {workout.map((exercise) => (
            <Grid key={exercise.id} item xs={12}>
              {exercise.name}
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default Workout;
