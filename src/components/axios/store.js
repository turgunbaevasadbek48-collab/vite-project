import { configureStore } from "@reduxjs/toolkit";
import trackerMap5 from "./axios"; 

export const store = configureStore({
  reducer: {
    todo: trackerMap5
  }
});