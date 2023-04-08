import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import ExerciseItem from "./ExerciseItem";
import { motion, AnimatePresence } from "framer-motion";

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.7,
      delayChildren: 0,
    },
  },
  exit: {
    opacity: 0,
  },
};

const WorkoutDisplay = ({ workout, setSelectedExercise, toggle }) => {
  const theme = useTheme();
  if (workout.length !== 0) {
    return (
      <>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.primary,
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Workout Overview
        </Typography>
        <AnimatePresence mode="wait">
          <Box
            component={motion.div}
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            exit="exit"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            {workout.map((exer) => (
              <ExerciseItem
                key={exer.name}
                exercise={exer}
                setSelectedExercise={setSelectedExercise}
                toggle={toggle}
              />
            ))}
          </Box>
        </AnimatePresence>
      </>
    );
  }
};

export default WorkoutDisplay;
