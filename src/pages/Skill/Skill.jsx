import React, { useState, useEffect } from "react";
import SkillList from "./SkillList";
import SkillHeader from "./SkillHeader";
import { Box, useTheme } from "@mui/material";
import SearchBar from "../../components/SearchBar";
import EXERCISESS from "../../data/exercisess";
import { useParams } from "react-router-dom";
import PageResults from "../../components/PageResults";

const allExercises = [
  ...EXERCISESS.weighted.lowerbody,
  ...EXERCISESS.weighted.upperbody.push,
  ...EXERCISESS.weighted.upperbody.pull,
  ...EXERCISESS.bodyweight.lowerbody,
  ...EXERCISESS.bodyweight.upperbody.push,
  ...EXERCISESS.bodyweight.upperbody.pull,
];

const Skill = () => {
  const theme = useTheme();
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [exerciseData, setExerciseData] = useState(allExercises);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (params.id === "All") return setFilteredExercises(allExercises);
    const filterAndSortedExercises = allExercises
      .sort((a, b) => {
        //sorting alphabetically before filtering out the category
        return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
      })
      .filter((exer) => exer.category.includes(params.id));
    setExerciseData(filterAndSortedExercises);
  }, [params]);

  useEffect(() => {
    if (searchQuery === "") return setFilteredExercises(exerciseData);
    const filteredData = exerciseData.filter((exer) =>
      exer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredExercises(filteredData);
  }, [searchQuery, exerciseData]);

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
        marginTop: "5rem",
        color: theme.palette.text.primary,
      }}
    >
      <SkillHeader skill={params.id} />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
      >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Box>
      <PageResults amount={filteredExercises.length} />
      <SkillList
        selectedExercise={selectedExercise}
        setOpen={setOpen}
        open={open}
        filteredExercises={filteredExercises}
        handleSelect={handleSelect}
      />
    </Box>
  );
};

export default Skill;
