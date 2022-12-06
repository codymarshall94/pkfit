import React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import "../css/skills.css";

function VaultExercises() {
  return (
    <Box>
        <Link to="/skills" className='back-button'>Back</Link>
        <h1>Vaults</h1>
    </Box>
  )
}

export default VaultExercises