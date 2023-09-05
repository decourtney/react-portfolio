import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    // state: value
    nextIndex: 0,
    isLoading: false,
    marqueeMsg: '',
    prevState: '',
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
    setPrevState: (state, action)=>{
      state.prevState = action.payload;
    }
  },
});

export const { setNextIndex, setIsLoading, setMarqueeMsg, setPrevState } = projectSlice.actions;

export default projectSlice.reducer;
