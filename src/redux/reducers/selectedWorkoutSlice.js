import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedWorkout: {},
};

export const selectedWorkoutSlice = createSlice({
  name: "selectedWorkout",
  initialState,
  reducers: {
    setSelectedWorkout: (state, action) => {
      state.selectedWorkout = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setSelectedWorkout } = selectedWorkoutSlice.actions;

export default selectedWorkoutSlice.reducer;
