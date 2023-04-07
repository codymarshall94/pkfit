import React from "react";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import DialogModal from "../../components/DialogModal";
import ExerciseDescription from "../../components/ExerciseDescription";
import { AnimatePresence, motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

const SkillItem = ({ exer, handleSelect }) => {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={12}
      sm={4}
      md={4}
      lg={4}
      xl={3}
      onClick={() => handleSelect(exer)}
      component={motion.div}
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      sx={{
        backgroundColor: theme.palette.background.grey,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: ".5rem",
        textAlign: { xs: "center", md: "left" },
        p: "1rem",
        mb: ".5rem",
      }}
    >
      {exer.image !== null ? (
        <Box
          component="img"
          sx={{
            width: "25%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
          src={exer.image}
          alt="a person doing the exercise"
        />
      ) : (
        <Box
          component="img"
          sx={{
            width: "25%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
          src={require("../../images/placeholderimg.jpg")}
          alt="a person doing the exercise"
        />
      )}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
        }}
      >
        {exer.name}
      </Typography>
    </Grid>
  );
};

function ExerciseList({
  selectedExercise,
  open,
  setOpen,
  handleSelect,
  filteredExercises,
}) {

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {filteredExercises.length === 0 && (
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            No exercises found
          </Typography>
        )}
      </Box>
      <AnimatePresence mode="exitBeforeEnter">
        <Grid
          component={motion.div}
          layout
          container
          spacing={2}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          {filteredExercises.map((exer) => (
            <SkillItem
              exer={exer}
              setOpen={setOpen}
              key={exer.name}
              handleSelect={handleSelect}
            />
          ))}
        </Grid>
      </AnimatePresence>
      <DialogModal
        open={open}
        setOpen={setOpen}
        children={<ExerciseDescription exercise={selectedExercise} />}
      />
    </>
  );
}

export default ExerciseList;
