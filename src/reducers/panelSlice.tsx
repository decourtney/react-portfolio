import { createSlice } from "@reduxjs/toolkit";

interface PanelState{

}

const panelSlice = createSlice({
  name: "panel",
  initialState: {
    isOpen: false,
    isOpening: true,
    // isOpen: true,
    // isOpening: false,
    content: null,
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setIsOpening: (state, action) => {
      state.isOpening = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setIsOpen, setIsOpening, setContent} =
  panelSlice.actions;

export default panelSlice.reducer;
