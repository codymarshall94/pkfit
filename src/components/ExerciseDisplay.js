import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { EXERCISES } from "../exercises";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { handleSelectedItem } from "../redux/modal";
import DescriptionModal from "./DescriptionModal";

function ExerciseDisplay() {
  const { value } = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  let filteredExercises = EXERCISES.filter((exer) =>
    exer.category.includes(value)
  );

  return (
    <>
      <Grid
        container
        className="workout-item-container"
        sx={{ margin: ".25rem" }}
      >
        {filteredExercises.map((exer) => (
          <Grid
            item
            key={exer.id}
            xs={11}
            lg={7}
            className="workout-item"
            onClick={() => dispatch(handleSelectedItem({ exer }))}
            sx={{ margin: ".25rem" }}
          >
            <Grid
              item
              xs={3}
              lg={2}
              className="workout-image-container"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {exer.image !== null ? (
                <img src={exer.image} className="workout-image" alt="" />
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
              lg={9}
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
              <Box>
                {exer.usedFor.map((use) => (
                  <Chip label={use} key={use} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={1} sx={{ display: "flex", alignItems: "center" }}>
              <ArrowCircleRightOutlinedIcon />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <DescriptionModal />
    </>
  );
}

export default ExerciseDisplay;
