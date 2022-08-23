import { configureStore } from '@reduxjs/toolkit';
import skillReducer from "./skills";

export const store = configureStore({
  reducer: {
    skills: skillReducer,
  },
})