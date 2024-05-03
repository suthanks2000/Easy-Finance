import { configureStore } from "@reduxjs/toolkit";
import RegLogSlice from "./slices/RegLogCounter";
import PersonalDetailSlice from "./slices/PersonalDetailCounter"
import PersonalLoanDetailSlice from "./slices/PersonalLoanDetailCounter"


export default configureStore({
  reducer: {
    regisLogin: RegLogSlice,
    personalDetail: PersonalDetailSlice,
    personelLoanDetail:PersonalLoanDetailSlice
  },
});
