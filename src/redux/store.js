import { configureStore } from "@reduxjs/toolkit";
import register from "./auth/register";

const store = configureStore({
  reducer: {
    register,
  },
});

export default store;
