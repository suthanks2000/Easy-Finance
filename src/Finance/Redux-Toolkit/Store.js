import { configureStore } from "@reduxjs/toolkit";
import RegLogSlice from "./slices/RegLogCounter";
import PersonalDetailSlice from "./slices/PersonalDetailCounter"

export default configureStore({
  reducer: {
    regisLogin: RegLogSlice,
    personalDetail: PersonalDetailSlice
  },
});
