import { configureStore } from '@reduxjs/toolkit';
import skillReducer from "./skills";
import modalReducer from "./modal";
import userReducer from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    skills: skillReducer,
    modal: modalReducer,
    user: userReducer,
  },
})