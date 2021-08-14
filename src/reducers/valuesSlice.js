import { createSlice } from "@reduxjs/toolkit";

export const valueSlice = createSlice({
  name: "value",
  initialState: {
    value: 0,
    entry: 0,
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    subtract: (state) => {
      state.value -= 1;
    },
    divide: (state, action) => {
      state.value = state.value / action.payload;
    },
    multiply: (state, action) => {
      state.value = state.value * action.payload;
    },
    root: (state) => {
      state.value = Math.sqrt(state.value);
    },
    clear: (state) => {
      state.value = 0;
    },
    one: (state) => {
      state.entry = 0;
    },
    two: (state) => {
      state.entry = 0;
    },
    three: (state) => {
      state.entry = 0;
    },
    four: (state) => {
      state.entry = 0;
    },
    five: (state) => {
      state.entry = 0;
    },
    six: (state) => {
      state.entry = 0;
    },
    seven: (state) => {
      state.entry = 0;
    },
    eight: (state) => {
      state.entry = 0;
    },
    nine: (state) => {
      state.entry = 0;
    },
    zero: (state) => {
      state.entry = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, subtract, multiply, divide, root, clear } =
  valueSlice.actions;

export default valueSlice.reducer;
