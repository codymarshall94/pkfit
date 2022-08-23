import React from 'react';
import Box from '@mui/system/Box';
import { EXERCISES } from '../exercises';
import { useSelector } from 'react-redux';

function ExerciseDisplay() {
  const { value } = useSelector((state) => state.skills);
    let filteredExercises = EXERCISES.filter(exer => exer.category.includes(value));

  return (
    <Box>
        {filteredExercises.map((exer, index) => (
            <Box key={index}>{exer.name}</Box>
        ))}
    </Box>
  )
}

export default ExerciseDisplay