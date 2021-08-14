import { createSlice } from "@reduxjs/toolkit";

export const valueSlice = createSlice({
  name: "value",
  initialState: {
    value: 0,
    entry: 0,
  },
  reducers: {
    add: (state) => {
      state.value = state.value + state.entry;
    },
    subtract: (state) => {
      state.value = state.value + state.entry;
    },
    divide: (state, action) => {
      state.value = state.value + state.entry;
    },
    multiply: (state, action) => {
      state.value = state.value + state.entry;
    },
    root: (state) => {
      state.value = Math.sqrt(state.value);
    },
    clear: (state) => {
      state.value = 0;
      state.entry = 0;
    },
    one: (state) => {
      state.entry = 1;
    },
    two: (state) => {
      state.entry = 2;
    },
    three: (state) => {
      state.entry = 3;
    },
    four: (state) => {
      state.entry = 4;
    },
    five: (state) => {
      state.entry = 5;
    },
    six: (state) => {
      state.entry = 6;
    },
    seven: (state) => {
      state.entry = 7;
    },
    eight: (state) => {
      state.entry = 8;
    },
    nine: (state) => {
      state.entry = 9;
    },
    zero: (state) => {
      state.entry = 0;
    },
    resolve: (state) => {
      state.entry = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  add,
  subtract,
  multiply,
  divide,
  root,
  clear,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  zero,
  resolve,
} = valueSlice.actions;

export default valueSlice.reducer;
