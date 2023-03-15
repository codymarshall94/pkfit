import { Typography, Button, useTheme, Grid } from "@mui/material";

const GreyButton = ({ text }) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#575455",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1rem",
        height: "3rem",
        position: "relative",
        margin: "1rem",
        transition: "all 0.3s ease-in-out",
        borderRadius: "2rem",
        "&:hover": {
          backgroundColor: theme.palette.red.main,
        },
      }}
    >
      {text}
    </Button>
  );
};

const ExerciseGridItem = ({ header, info }) => {
  return (
    <Grid item xs={3}>
      <Typography variant="h5" color="#A5A5A5" my=".5rem">{header}</Typography>
      <Typography variant="h5" fontWeight="bold">{info}</Typography>
    </Grid>
  );
};

const ExerciseItem = ({ exercise, setSelectedExercise }) => {
  const theme = useTheme();
  const { name, reps, rest } = exercise;
  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.background.grey,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        width: { xs: "100%", md: "80%", lg: "60%", xl: "50%" },
        margin: "0 auto",
        textAlign: { xs: "center", md: "left"},
        p: "1rem",
        mb: ".5rem",
      }}
    >
      <ExerciseGridItem header="Exercise" info={name} />
      <ExerciseGridItem header="Reps" info={reps} />
      <ExerciseGridItem header="Rest" info={rest} />
      <Grid item xs={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <GreyButton text="View" onClick={() => setSelectedExercise(exercise)} />
      </Grid>
    </Grid>
  );
};

export default ExerciseItem;