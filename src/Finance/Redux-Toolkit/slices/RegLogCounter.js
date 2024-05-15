import { createSlice } from "@reduxjs/toolkit";

export const RegLogSlice = createSlice({
  name: "regisLogin",
  initialState: {
    registerData: {
      Name: "",
      Email: "",
      Password: "",
      UserType:"",
      SecretKey:""
    },
    loginData: {
      Email: "",
      Password: "",
    },
    userdata: {},
    isLogin: false,
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
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setRegisterData, setLoginData, setuserdata, setIsLogin } =
  RegLogSlice.actions;

export default RegLogSlice.reducer;
