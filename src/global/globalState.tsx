import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  contact: {} || null,
};

const globalState = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
    onContactState: (state, { payload }) => {
      state.contact = payload;
    },
  },
});

export const { onToggleState, onContactState } = globalState.actions;

export default globalState.reducer;
