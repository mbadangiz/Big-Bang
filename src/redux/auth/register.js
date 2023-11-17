import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    phoneNumber: "",
  },
  reducers: {},
});

export default registerSlice.reducer;
