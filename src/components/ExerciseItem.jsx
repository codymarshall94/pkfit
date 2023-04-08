import { Typography, Button, useTheme, Grid } from "@mui/material";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
  },
};

const GreyButton = ({ text, exercise, setSelectedExercise, toggle }) => {
  const theme = useTheme();

  const handleClick = () => {
    setSelectedExercise(exercise);
    toggle();
  };

  return (
    <Button
      variant="contained"
      onClick={() => handleClick()}
      sx={{
        backgroundColor: "#575455",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1rem",
        height: "3rem",
        position: "relative",
        textAlign: "center",
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

const ExerciseGridItem = ({ header, info, xs, md }) => {
  return (
    <Grid item xs={xs} md={md}>
      <Typography variant="h5" color="#A5A5A5" my=".5rem">
        {header}
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        {info}
      </Typography>
    </Grid>
  );
};

const ExerciseItem = ({ exercise, setSelectedExercise, toggle }) => {
  const theme = useTheme();
  const { name, reps, rest, sets } = exercise;
  const itemInfoGrid = [
    { header: "Exercise", info: name, xs: 6, md: 3, spacing: "flex-start" },
    { header: "Sets", info: sets, xs: 6, md: 1, spacing: "flex-end" },
    { header: "Reps", info: reps, xs: 6, md: 1, spacing: "flex-end" },
    { header: "Rest", info: rest, xs: 6, md: 1, spacing: "flex-end" },
  ];
  return (
    <Grid
      component={motion.div}
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      container
      sx={{
        backgroundColor: theme.palette.background.grey,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: { xs: "100%", md: "80%", lg: "60%", xl: "50%" },
        textAlign: { xs: "center", md: "left" },
        margin: "0 auto",
        p: "1rem",
        mb: ".5rem",
      }}
    >
      {itemInfoGrid.map((item) => (
        <ExerciseGridItem
          key={item.header}
          header={item.header}
          info={item.info}
          xs={item.xs}
          md={item.md}
          spacing={item.spacing}
        />
      ))}
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <GreyButton
          text="View"
          toggle={toggle}
          exercise={exercise}
          setSelectedExercise={setSelectedExercise}
        />
      </Grid>
    </Grid>
  );
};

export default ExerciseItem;
