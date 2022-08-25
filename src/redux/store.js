import { configureStore } from '@reduxjs/toolkit';
import skillReducer from "./skills";
import modalReducer from "./modal";

export const store = configureStore({
  reducer: {
    skills: skillReducer,
    modal: modalReducer,
  },
})