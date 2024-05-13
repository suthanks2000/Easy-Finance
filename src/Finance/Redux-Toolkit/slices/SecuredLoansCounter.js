import { createSlice } from "@reduxjs/toolkit";
export const SecuredLoansSlice = createSlice({
  name: "securedLoans",
  initialState: {
    inputInfo:[
      {
        inputLabel: "Property Status",
        inputName: "propertyStatus",
        inputType: "dropdown",
        inputPlaceholder: "Enter propert status",
        loanType: [
          "personalloan",
          "homeloan",
          "businessloan"
        ],
        dropValue: [
          "select the propertyStatus",
          "owned",
          "rented",
          "other"
        ]
      },{
        inputLabel: "Address Proof",
        inputName: "addressProof",
        inputType: "dropdown",
        inputPlaceholder: "Enter address proof",
        loanType: [
          "personalloan",
          "homeloan",
          "businessloan"
        ],
        dropValue: [
          "SelectAddressProof",
          "aadharcard",
          "passport",
          "voterId",
          "driving license",
          "bank statement",
          "electricity bill",
          "gas bill",
          "water bill"
        ]
      },
      {
        inputLabel: "OHP Favor Of",
        inputName: "OHPFavorOf",
        inputType: "dropdown",
        inputPlaceholder: "Enter ohp favor of",
        loanType: [
          "personalloan",
          "homeloan",
          "businessloan"
        ],
        dropValue: [
          "selectOHPFavourOf",
          "self",
          "spouse",
          "father",
          "mother",
          "grandfather",
          "grandmother",
          "son",
          "none"
        ]
      },
      {
        inputLabel: "Purpose of Personal Loan",
        inputName: "purposeOfPersonalLoan",
        inputType: "dropdown",
        inputPlaceholder: "Enter Purpose of personal Loan",
        loanType: [
          "personalloan",
          "homeloan",
          "businessloan"
        ],
        dropValue: [
          "selectPurposeofLoan",
          "travel",
          "medical",
          "take over existing personal loan",
          "purchase",
          "other"
        ]
      },
      {
      inputLabel:"Place Of Work",
      inputName: "placeOfWork",
      inputType: "text",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      inputPlaceholder:"Your Place Of Work"
    },
    {
      inputLabel:"Job Title",
      inputName: "jobTitle",
      inputType: "text",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      inputPlaceholder:"Your Job Title"
    },
    {
      inputLabel:"Interest",
      inputName: "interest",
      inputType: "text",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      inputValue:'',
      inputPlaceholder:"Your Place Of Interset"
    },
    {
      inputLabel: "Duration of Stay Current Address Year",
      inputName: "durationOfStayCurrentAddressYear",
      inputType: "number",
      inputPlaceholder: "Enter in years",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      value: null
    },
    {
      inputLabel: "Employment Type",
      inputName: "employmentType",
      inputType: "radio",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      inputValue:"Salaried"
    },
    {
      inputName: "employmentType",
      inputType: "radio",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      inputValue:"SelfEmployed"
    },
    {
      inputLabel: "Duration of Stay Current Address Month",
      inputName: "durationOfStayCurrentAddressMonth",
      inputType: "number",
      inputPlaceholder: "Enter in month",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      value: null
    },
    {
      inputLabel: "Years Employed",
      inputName: "yearsEmployed",
      inputType: "number",
      inputPlaceholder: "Enter in years employed",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      value: null
    },
    {
      inputLabel: "Monthly Net Income",
      inputName: "monthlyNetIncome",
      inputType: "number",
      inputPlaceholder: "Enter monthly net income",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      value: null
    },
    {
      inputLabel: "Monthly Expense",
      inputName: "monthlyExpenses",
      inputType: "number",
      inputPlaceholder: "Enter monthly expenses",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      value: null
    },
    {
      inputLabel: "Cibil Issue",
      inputName: "Cibil Issue",
      inputType: "radio",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      inputValue:"yes"
    },
    {
      inputName: "Cibil Issue",
      inputType: "radio",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      inputValue:"no"
    },
    {
      inputLabel: "Loan Amount",
      inputName: "loanAmount",
      inputType: "number",
      inputPlaceholder: "Enter loan amount",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      value: null
    },
    {
      inputLabel: "Tenure Year",
      inputName: "tenureYear",
      inputType: "number",
      inputPlaceholder: "Enter in tenure year",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      value: null
    },
    {
      inputLabel: "Tenure Month",
      inputName: "tenureMonth",
      inputType: "number",
      inputPlaceholder: "Enter in tenure month",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      value: null
    },
    {
      inputLabel: "EMI",
      inputName: "emi",
      inputType: "number",
      inputPlaceholder: "EMI Amount",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan"
      ],
      value: null
    }
    
  ],
    securedLoansInfo:{},
    // securedLoansInfo: {
    //   // loanType: "",
    //   // uId: "",
    //   // employmentType: "",
    //   // placeOfWork: "",
    //   // jobTitle: "",
    //   // propertyStatus: "",
    //   // durationOfStayCurrentAddress: {
    //   //   months: null,
    //   //   years: null,
    //   // },
    //   // addressProof: "",
    //   // OHPFavorOf: "",
    //   // yearsEmployed: null,
    //   // monthlyNetIncome: null,
    //   // monthlyExpenses: null,
    //   // civilIssue: "",
    //   // loanAmount: null,
    //   // interest: "",
    //   // tenure: {
    //   //   years: null,
    //   //   months: null,
    //   // },
    //   // emi: null,
    // },
    // purposeOfPersonalLoan: "",
    personalLoanView: false,
  },
  reducers: {
    setSecuredLoansInfo: (state, action) => {
      state.securedLoansInfo = action.payload;
    },
    setPersonalLoanView: (state, action) => {
      state.personalLoanView = action.payload;
    },
    // setPurposeOfPersonalLoan: (state, action) => {
    //   state.purposeOfPersonalLoan = action.payload;
    // },
  },
});

export const {
  setSecuredLoansInfo,
  setPersonalLoanView,
 
  inputInfo
} = SecuredLoansSlice.actions;
export default SecuredLoansSlice.reducer;
