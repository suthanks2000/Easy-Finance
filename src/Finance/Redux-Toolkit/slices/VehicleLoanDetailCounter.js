import { createSlice } from "@reduxjs/toolkit";

export const VehicleLoanDetailSlice = createSlice({
  name: "vehicleLoan",
  initialState: {
    
    vehicleLoanDetail: {
      vehicleType:"",
      carType:"",
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
      makeAndModel:"",
      variant:"",
      registeredMonth:"",
      registeredYear:"",
      secondCarCondition:"",
      fullPriceOfVehicle:"",
      loanAmount: null,
      interest: "",
      tenure: {
        years: null,
        months: null,
      },
      emi: null,
    },

    carLoanView:false,

    bikeLoanView:false,

    carTypeView:false

},
    reducers: {
        setVehicleLoanDetail: (state, action) => {
            state.vehicleLoanDetail = action.payload
        },
        setCarLoanView: (state, action) => {
            state.carLoanView = action.payload
        },
        setBikeLoanView: (state, action) => {
          state.bikeLoanView = action.payload
        },
        setCarTypeView: (state, action) => {
          state.carTypeView = action.payload
        }
    }
  })

  export const { setVehicleLoanDetail, setCarLoanView, setBikeLoanView, setCarTypeView } = VehicleLoanDetailSlice.actions;
  export default VehicleLoanDetailSlice.reducer