import { createSlice } from "@reduxjs/toolkit";
export const PersonalLoanDetailSlice = createSlice({
  name: "personelLoanDetail",
  initialState: {
    plLoanInfo: {
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
      purposeOfPersonalLoan: "",
      loanAmount: null,
      interest: "",
      tenure: {
        years: null,
        months: null,
      },
      emi: null,
    },
    personalLoanView:false,
  },
  reducers: {
    setPlLoanInfo: (state, action) => {
      state.plLoanInfo = action.payload;
    },
    setPersonalLoanView: (state, action) => {
      state.personalLoanView = action.payload
    }
  },
});

export const { setPlLoanInfo,setPersonalLoanView } = PersonalLoanDetailSlice.actions;
export default PersonalLoanDetailSlice.reducer;
