import { createSlice } from "@reduxjs/toolkit";
export const PersonalLoanDetailSlice = createSlice({
  name: "personelLoanDetail",
  initialState: {
    plLoanInfo: {
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
  },
  reducers: {
    setPlLoanInfo: (state, action) => {
      state.plLoanInfo = action.payload;
    },
  },
});

export const { setPlLoanInfo } = PersonalLoanDetailSlice.actions;
export default PersonalLoanDetailSlice.reducer;
