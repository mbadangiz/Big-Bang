import { configureStore } from "@reduxjs/toolkit";
import login from "./auth/login";
import register from "./auth/register";
import forgetpass from "./auth/forgetpass";
import user from "./user";
import userSecurity from "./userSecurity";

const store = configureStore({
  reducer: {
    user,
    userSecurity,
    login,
    register,
    forgetpass,
  },
});

export default store;
