import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  skill: "",
}

export const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    changeSkill: (state, action) => {
      state.skill = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeSkill } = skillSlice.actions

export default skillSlice.reducer