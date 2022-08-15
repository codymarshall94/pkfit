import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../css/workout.css";

function Workout({ workout }) {
  if (workout) {
    return (
      <Box sx={{ marginTop: "2rem" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5rem",
            height: "15rem",
            overflowY: "auto",
          }}
        >
          {workout.map((exercise) => (
            <Grid key={exercise.id} item xs={11} className="workout-item">
              <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={require("../images/placeholderthumb.png")}
                  className="workout-image"
                  alt=""
                />
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: ".25rem",
                }}
              >
                <span>{exercise.name}</span>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default Workout;
