import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    // state: value
    nextIndex: 0,
    isLoading: true,
  },
  reducers: {
    setNextIndex: (state, action) => {
      state.nextIndex = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  },
});

export const { setNextIndex, setIsLoading } = projectSlice.actions;

export default projectSlice.reducer;
