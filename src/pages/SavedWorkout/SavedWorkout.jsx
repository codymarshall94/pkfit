import React from 'react'
import Box from '@mui/material/Box'
import Workout from '../../components/Workout'
import { useSelector } from 'react-redux'
import DescriptionModal from '../../components/DescriptionModal'
import Timer from '../../components/Timer'

function SavedWorkout() {
  const workout = useSelector((state) => state.selectedWorkout.selectedWorkout)

  return (
    <Box>
        <h1>{workout.name}</h1>
        <Workout workout={workout.exercises} isVisible={true}/>
        <DescriptionModal />
        <Timer />
    </Box>
  )
}

export default SavedWorkout