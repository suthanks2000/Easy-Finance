import { configureStore } from "@reduxjs/toolkit";
import RegLogSlice from "./slices/RegLogCounter";
import PersonalDetailSlice from "./slices/PersonalDetailCounter"
import  SecuredLoansSlice  from "./slices/SecuredLoansCounter";
import  BankerRegLogSlice  from "./slices/BankerReg&LogCounter";


export default configureStore({
  reducer: {
    regisLogin: RegLogSlice,
    personalDetail: PersonalDetailSlice,
    securedLoans: SecuredLoansSlice,
    bankerRegLog:BankerRegLogSlice 
  },
});
