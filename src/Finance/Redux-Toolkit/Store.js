import { configureStore } from "@reduxjs/toolkit";
import RegLogSlice from "./slices/RegLogCounter";
import PersonalDetailSlice from "./slices/PersonalDetailCounter"
import  SecuredLoansSlice  from "./slices/SecuredLoansCounter";
import VehicleLoanDetailSlice from "./slices/VehicleLoanDetailCounter"
import  LoansCategorySlice  from "./slices/LoansCategoryCounter";

export default configureStore({
  reducer: {
    regisLogin: RegLogSlice,
    personalDetail: PersonalDetailSlice,
   
    vehicleLoan: VehicleLoanDetailSlice,
    LoansCategory: LoansCategorySlice,
    securedLoans: SecuredLoansSlice 
  },
});
