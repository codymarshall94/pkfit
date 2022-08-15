import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import "../css/workout.css";

function Workout({ workout, openModalWithExercise }) {

  if (workout) {
    return (
      <Box sx={{ marginTop: "2rem" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5rem",
            height: "16rem",
            overflowY: "auto",
          }}
        >
          {workout.map((exercise) => (
            <Grid key={exercise.id} item xs={11} className="workout-item" onClick={() => openModalWithExercise({exercise})} sx={{margin: '.25rem'}}>
              <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={require("../images/placeholderthumb.png")}
                  className="workout-image"
                  alt=""
                />
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: ".25rem",
                }}
              >
                <span>{exercise.name}</span>
              </Grid>
              <Grid item xs={1} sx={{ display: "flex", alignItems: "center" }}>
                <ArrowCircleRightOutlinedIcon />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default Workout;
