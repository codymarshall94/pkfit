import React, { useState } from "react";
import { EXERCISES } from "../../exercises/exercises";
import { useSelector } from "react-redux";
import { Box, Typography, useTheme } from "@mui/material";
import DialogModal from "../../components/DialogModal";
import ExerciseDescription from "../../components/ExerciseDescription";
import { useEffect } from "react";

const SkillItem = ({ exer, handleSelect }) => {
  const theme = useTheme();

  return (
    <Box
      onClick={() => handleSelect(exer)}
      sx={{
        backgroundColor: theme.palette.background.grey,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "20rem",
        width: { xs: "100%", md: "80%", lg: "60%", xl: "50%" },
        margin: "0 auto",
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
    </Box>
  );
};

function ExerciseList() {
  const { skill } = useSelector((state) => state.skills);
  const [open, setOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [filteredExercises, setFilteredExercises] = useState([]);

  useEffect(() => {
    if(skill === "All") return setFilteredExercises(EXERCISES);
    const filterExercises = EXERCISES.sort((a, b) => {
      //sorting alphabetically before filtering out the category
      return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
    }).filter((exer) => exer.category.includes(skill));
    setFilteredExercises(filterExercises);
  }, [skill]);

  const handleSelect = (exer) => {
    setSelectedExercise(exer);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: "2rem",
      }}
    >
      {filteredExercises.map((exer) => (
        <SkillItem
          exer={exer}
          setOpen={setOpen}
          key={exer.id}
          handleSelect={handleSelect}
        />
      ))}
      <DialogModal
        open={open}
        setOpen={setOpen}
        children={<ExerciseDescription exercise={selectedExercise} />}
      />
    </Box>
  );
}

export default ExerciseList;
