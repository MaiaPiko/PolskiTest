import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./features/score/scoreSlice";

const store = configureStore({
  reducer: {
    point: scoreReducer,
  },
});

export default store;