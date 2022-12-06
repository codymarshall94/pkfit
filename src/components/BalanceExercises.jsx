import React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import "../css/skills.css";
import ExerciseDisplay from './ExerciseDisplay';

function BalanceExercises() {
  return (
    <Box>
      <Link to="/skills" className='back-button'>Back</Link>
        <h1>Balance</h1>
        <ExerciseDisplay />
    </Box>
  );
}

export default BalanceExercises;
