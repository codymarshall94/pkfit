import { configureStore } from '@reduxjs/toolkit';
import skillReducer from "./skills";
import modalReducer from "./modal";
import userReducer from "./reducers/userSlice";
import selectedWorkoutReducer from "./reducers/selectedWorkoutSlice";

export const store = configureStore({
  reducer: {
    skills: skillReducer,
    modal: modalReducer,
    user: userReducer,
    selectedWorkout: selectedWorkoutReducer,
  },
})