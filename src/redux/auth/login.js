import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    userLoginInfo: {
      phoneOrGmail: "",
      password: "",
      rememberMe: "",
    },
  },
  reducers: {
    onSetLoginInfo: (state, action) => {
      state.userLoginInfo = { ...state.userLoginInfo, ...action.payload };
    },
  },
});

export const { onSetLoginInfo } = loginSlice.actions;

export default loginSlice.reducer;
