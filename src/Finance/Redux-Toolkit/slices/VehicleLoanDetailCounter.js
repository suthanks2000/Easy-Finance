import { createSlice } from "@reduxjs/toolkit";

export const VehicleLoanDetailSlice = createSlice({
  name: "vehicleLoan",
  initialState: {
    vehicleLoanDetail: {
        vehicleType:"",
        uId:"",
      employmentType: "",
      placeOfWork: "",
      jobTitle: "",
      propertyStatus: "",
      durationOfStayCurrentAddress: {
        months: null,
        years: null,
      },
      addressProof: "",
      OHPFavorOf: "",
      yearsEmployed: null,
      monthlyNetIncome: null,
      monthlyExpenses: null,
      civilIssue: "",
      purposeOfPersonalLoan: "",
      loanAmount: null,
      interest: "",
      tenure: {
        years: null,
        months: null,
      },
      emi: null,
    },
    carLoanView:false
},
    reducers: {
        setVehicleLoanDetail: (state, action) => {
            state.vehicleLoanDetail = action.payload
        },
        setCarLoanView: (state, action) => {
            state.carLoanView= action.payload
        },
    }
  })

  export const { setVehicleLoanDetail, setCarLoanView } = VehicleLoanDetailSlice.actions;
  export default VehicleLoanDetailSlice.reducer