import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { animated, useTransition, config } from "react-spring";
import "../css/workout.css";

function Workout({ workout, openModalWithExercise, sets, reps, isVisible, setIsVisible }) {
  const transition = useTransition(isVisible, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 50 },
  });
  const AnimatedGridItem = animated(Grid);

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
            overflowX: "hidden",
          }}
        >
          {workout.map((exercise) => (
            <>
              {transition((style, item) =>
                item ? (
                  <AnimatedGridItem
                    key={exercise.id}
                    item
                    xs={11}
                    lg={7}
                    className="workout-item"
                    style={style}
                    onClick={() => openModalWithExercise({ exercise })}
                    sx={{ margin: ".25rem" }}
                  >
                    <Grid
                      item
                      xs={3}
                      lg={2}
                      className="workout-image-container"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {exercise.image !== null ? (
                        <img
                          src={exercise.image}
                          className="workout-image"
                          alt=""
                          height="80px"
                        />
                      ) : (
                        <img
                          src={require("../images/placeholderthumb.png")}
                          className="workout-image"
                          alt=""
                        />
                      )}
                    </Grid>
                    <Grid
                      item
                      xs={8}
                      sx={{
                        display: "flex",
                        width: "1rem",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingLeft: ".25rem",
                      }}
                    >
                      <span className="workout-name-text">{exercise.name}</span>
                      <span className="workout-reps-text">
                        {sets} x {reps}
                      </span>
                    </Grid>
                    <Grid
                      item
                      xs={1}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <ArrowCircleRightOutlinedIcon />
                    </Grid>
                  </AnimatedGridItem>
                ) : null
              )}
            </>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default Workout;
