import { createSlice } from '@reduxjs/toolkit'

export const valueSlice = createSlice({
  name: 'value',
  initialState: {
    value: 0
  },
  reducers: {
    add: state => {
      state.value += 1;
    },
    subtract: state => {
      state.value -= 1;
    },
    divide: (state, action) => {
      state.value = (state.value / action.payload);
    },
    multiply: (state, action) => {
        state.value = (state.value * action.payload);
    }
}})

// Action creators are generated for each case reducer function
export const { add, subtract, multiply, divide } = valueSlice.actions

export default valueSlice.reducer