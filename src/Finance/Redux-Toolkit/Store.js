import { configureStore } from "@reduxjs/toolkit";
import RegLogSlice from "./slices/RegLogCounter";
import PersonalDetailSlice from "./slices/PersonalDetailCounter"
import  SecuredLoansSlice  from "./slices/SecuredLoansCounter";


export default configureStore({
  reducer: {
    regisLogin: RegLogSlice,
    personalDetail: PersonalDetailSlice,
    securedLoans: SecuredLoansSlice 
  },
});
