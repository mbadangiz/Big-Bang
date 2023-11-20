import { configureStore } from "@reduxjs/toolkit";
import register from "./auth/register";
import forgetpass from "./auth/forgetpass";
import user from "./user";

const store = configureStore({
  reducer: {
    user,
    register,
    forgetpass,
  },
});

export default store;
