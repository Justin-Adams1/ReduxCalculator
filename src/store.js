import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "./reducers/valuesSlice";

export default configureStore({
  reducer: {
    value: valueReducer,
  },
});
