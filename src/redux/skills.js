import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    changeSkill: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSkill } = skillSlice.actions

export default skillSlice.reducer