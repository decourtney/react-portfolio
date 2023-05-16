import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    // state: value
    nextIndex: 0,
  },
  reducers: {
    setNextIndex: (state, action) => {
      state.nextIndex = action.payload;
    },
  },
});

export const { setNextIndex } = projectSlice.actions;

export default projectSlice.reducer;
