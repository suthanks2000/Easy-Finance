import { createSlice } from "@reduxjs/toolkit";

export const RegLogSlice = createSlice({
  name: "counter",
  initialState: {
    registerData: {
      Name: "",
      Email: "",
      Password: "",
    },
    loginData: {
      Email: "",
      Password: "",
    },
    userdata: {},
  },
  reducers: {
    setRegisterData: (state, action) => {
      state.registerData = action.payload;
    },
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
    setuserdata: (state, action) => {
      state.userdata = action.payload;
    },
  },
});

export const { setRegisterData, setLoginData, setuserdata } =
  RegLogSlice.actions;

export default RegLogSlice.reducer;
