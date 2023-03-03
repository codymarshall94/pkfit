import { configureStore } from '@reduxjs/toolkit';
import skillReducer from "./reducers/skillsSlice";
import selectedWorkoutReducer from "./reducers/selectedWorkoutSlice";

export const store = configureStore({
  reducer: {
    skills: skillReducer,
    selectedWorkout: selectedWorkoutReducer,
  },
})