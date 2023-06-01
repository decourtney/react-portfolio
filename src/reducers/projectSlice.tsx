import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    // state: value
    nextIndex: 0,
    isLoading: true,
    marqueeMsg: '',
  },
  reducers: {
    setNextIndex: (state, action) => {
      state.nextIndex = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setMarqueeMsg: (state, action) => {
      state.marqueeMsg = action.payload;
    },
  },
});

export const { setNextIndex, setIsLoading, setMarqueeMsg } = projectSlice.actions;

export default projectSlice.reducer;
