import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/counter/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
