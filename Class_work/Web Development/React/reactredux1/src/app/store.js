import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/mytask/taskSlice";

export const store=configureStore({
    reducer: {
        task:taskSlice,
    },
})