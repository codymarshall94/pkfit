import React from "react";
import { EXERCISES } from "../exercises";
import { useSelector, useDispatch } from "react-redux";
import { handleSelectedItem } from "../redux/reducers/modalSlice";
import DescriptionModal from "./DescriptionModal";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

function ExerciseList() {
  const { skill } = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  let filteredExercises = EXERCISES.sort((a, b) => {
    //sorting alphabetically before filtering out the category
    return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
  }).filter((exer) => exer.category.includes(skill));

  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: "2rem" }}>
      <Grid
        container
        className="workout-item-container"
        sx={{
          width: { sm: "60%", lg: "40%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filteredExercises.map((exer) => (
          <Grid
            item
            key={exer.id}
            xs={11}
            sm={10}
            lg={8}
            className="workout-item"
            onClick={() => dispatch(handleSelectedItem(exer))}
            sx={{
              height: "3rem",
              margin: ".25rem 0",
              backgroundColor: "listBackground.main",
              overflow: "hidden",
            }}
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
            </Grid>
            <Grid item xs={1} sx={{ display: "flex", alignItems: "center" }}>
              <ArrowCircleRightOutlinedIcon />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <DescriptionModal />
    </Box>
  );
}

export default ExerciseList;
