import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedItem: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
      state.isOpen = true;
    },
    openModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, handleSelectedItem } = modalSlice.actions;

export default modalSlice.reducer;
