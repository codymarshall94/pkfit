import React from 'react';
import Box from '@mui/material/Box';
import Header from './Navbar';
import { Link } from "react-router-dom";
import "../css/skills.css";

function ClimbExercises() {
  return (
    <Box>
      <Link to="/skills" className='back-button'>Back</Link>
        <h1>Climb</h1>
    </Box>
  );
}

export default ClimbExercises;
