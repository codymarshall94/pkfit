import React from "react";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";
import { Typography, Box, Grid } from "@mui/material";

const GridItem = ({ exer, setSelectedExercise }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      onClick={() => setSelectedExercise(exer)}
      sx={{
        display: "flex",
        alignItems: "center",
        color: colors.primary[900],
        minWidth: "100%",
        overflow: "hidden",
        backgroundColor: colors.primaryOrange[500],
        borderRadius: "1rem",
        margin: ".25rem 0",
        height: "5rem",
        maxHeight: "5rem",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: colors.primaryOrange[400],
        },
      }}
    >
      <Grid item xs={3} lg={2} sx={{ height: "100%" }}>
        {exer.image !== null ? (
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={exer.image}
            alt="a person doing the exercise"
          />
        ) : (
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={require("../images/placeholderthumb.png")}
            alt="a person doing the exercise"
          />
        )}
      </Grid>
      <Grid
        item
        xs={9}
        lg={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography variant="h5">{exer.name}</Typography>
        <Typography variant="h5">
          {exer.sets} x {exer.reps}
        </Typography>
      </Grid>
    </Box>
  );
};

const WorkoutDisplay = ({ workout, setSelectedExercise }) => {
  if (workout) {
    return (
      <Grid container>
        {workout.map((exer) => (
          <GridItem
            exer={exer}
            key={exer.id}
            setSelectedExercise={setSelectedExercise}
          />
        ))}
      </Grid>
    );
  }
};

export default WorkoutDisplay;
