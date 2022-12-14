import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { animated, useTransition } from "react-spring";
import "../css/workout.css";
import { useDispatch } from "react-redux";
import { handleSelectedItem } from "../redux/modal";

function Workout({ workout, isVisible }) {
  const AnimatedGridItem = animated(Grid);
  const dispatch = useDispatch();
  const transition = useTransition(isVisible, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 50 },
  });

  console.log(workout);

  if (workout) {
    return (
        <Grid
          container
          sx={{
            position: "relative",
            margin: "auto",
            marginBottom: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "auto", 
            maxHeight: "20rem",
            width: "100%",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {workout.map((exer) => (
            <Fragment key={exer.id}>
              {transition((style, item) =>
                item ? (
                  <AnimatedGridItem
                    item
                    xs={11}
                    lg={7}
                    className="workout-item"
                    style={style}
                    onClick={() => dispatch(handleSelectedItem({ exer }))}
                    sx={{ height: "3rem", margin: ".25rem 0" }}
                  >
                    <Grid
                      item
                      xs={3}
                      lg={2}
                      className="workout-image-container"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {exer.image !== null ? (
                        <img
                          src={exer.image}
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
                      <span className="workout-name-text">{exer.name}</span>
                      <span className="workout-reps-text">
                        {exer.sets} x {exer.reps}
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
            </Fragment>
          ))}
        </Grid>
    );
  }
}

export default Workout;
