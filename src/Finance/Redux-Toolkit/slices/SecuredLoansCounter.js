import { createSlice } from "@reduxjs/toolkit";
export const SecuredLoansSlice = createSlice({
  name: "securedLoans",
  initialState: {
    securedLoansInfo: {
      loanType:"",
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
      // purposeOfPersonalLoan: "",
      loanAmount: null,
      interest: "",
      tenure: {
        years: null,
        months: null,
      },
      emi: null,
    },
    purposeOfPersonalLoan: "",
    personalLoanView:false,
  },
  reducers: {
    setSecuredLoansInfo: (state, action) => {
      state.securedLoansInfo = action.payload;
    },
    setPersonalLoanView: (state, action) => {
      state.personalLoanView = action.payload
    },
    setPurposeOfPersonalLoan: (state, action) => {
      state.purposeOfPersonalLoan = action.payload
    }
  },
});

export const { setSecuredLoansInfo,setPersonalLoanView, setPurposeOfPersonalLoan } = SecuredLoansSlice.actions;
export default SecuredLoansSlice.reducer;
