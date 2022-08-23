import React from 'react';
import Box from '@mui/material/Box';
import Header from './Header';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "../css/skills.css";
import ExerciseDisplay from './ExerciseDisplay';

function Exercises() {
  //grabbing state from redux store
  const { value } = useSelector((state) => state.skills);

  return (
    <Box>
      <Header />
      <Link to="/skills" className='back-button'>Back</Link>
        <h1>{value}</h1>
        <ExerciseDisplay />
    </Box>
  );
}

export default Exercises;
