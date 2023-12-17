import { createSlice } from "@reduxjs/toolkit";

const userSecuritySlice = createSlice({
  name: "userSecurity",
  initialState: {
    userSecurityInformations: {
      nationalIMageAddress: "",
      verifyNationalImage: "",
      twoStepAuth: "",
      recoveryEmail: "",
      baseUrl: "",
    },
  },
  reducers: {
    onSetUserSecurity: (state, action) => {
      state.userSecurityInformations = {
        ...state.userSecurityInformations,
        ...action.payload,
      };
    },
  },
});

export const { onSetUserSecurity } = userSecuritySlice.actions;

export default userSecuritySlice.reducer;
