import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { animated, useTransition } from "react-spring";
import "../css/workout.css";
import { useDispatch } from "react-redux";
import { handleSelectedItem } from "../redux/modal";

function Workout({ workout, sets, reps, isVisible }) {
  const AnimatedGridItem = animated(Grid);
  const dispatch = useDispatch();
  const transition = useTransition(isVisible, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 50 },
  });

  if (workout) {
    return (
      <Box sx={{ marginTop: "2rem" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5rem",
            height: {xs: "20rem", lg: "auto"},
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {workout.map((exer) => (
            <Fragment key={exer.id}>
              {transition((style, item) =>
                item ? (
                  <AnimatedGridItem
                    key={exer.id}
                    item
                    xs={11}
                    lg={7}
                    className="workout-item"
                    style={style}
                    onClick={() => dispatch(handleSelectedItem({ exer }))}
                    sx={{ margin: ".25rem", height: "3rem" }}
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
                        {sets} x {exer.isStatic ? "30-60s" : `${reps[0]}-${reps[1]}`}
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
      </Box>
    );
  }
}

export default Workout;
