import { configureStore } from "@reduxjs/toolkit";
import register from "./auth/register";
import forgetpass from "./auth/forgetpass";

const store = configureStore({
  reducer: {
    register,
    forgetpass,
  },
});

export default store;
