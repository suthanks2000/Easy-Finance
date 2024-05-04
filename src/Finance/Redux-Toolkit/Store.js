import { configureStore } from "@reduxjs/toolkit";
import RegLogSlice from "./slices/RegLogCounter";
import PersonalDetailSlice from "./slices/PersonalDetailCounter"
import PersonalLoanDetailSlice from "./slices/PersonalLoanDetailCounter"
import VehicleLoanDetailSlice from "./slices/VehicleLoanDetailCounter"

export default configureStore({
  reducer: {
    regisLogin: RegLogSlice,
    personalDetail: PersonalDetailSlice,
    personelLoanDetail:PersonalLoanDetailSlice,
    vehicleLoan:VehicleLoanDetailSlice
  },
});
