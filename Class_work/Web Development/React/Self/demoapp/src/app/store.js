import { taskSlice } from "../features/myTasks/taskSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
});
