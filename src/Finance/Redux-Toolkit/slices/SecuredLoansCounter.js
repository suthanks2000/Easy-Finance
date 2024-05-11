import { createSlice } from "@reduxjs/toolkit";
export const SecuredLoansSlice = createSlice({
  name: "securedLoans",
  initialState: {
    inputInfo:[
      {
        inputLabel: "Vehicle Type",
        inputName: "vehicleType",
        inputType: "dropdown",
        vehicleType: [
          "car","bike"
        ],
        dropValue: [
          "select","car","bike"
        ],
        loanType:["vehicleloan"]
      },
      {
        inputLabel: "Make & Model",
        inputName: "makeAndModel",
        inputType: "text",
        inputPlaceholder: "Enter make and model",
        vehicleType: [
          "car",
          "bike"
        ],
        inputValue: "",
        loanType:["vehicleloan"]
      },
      {
        inputLabel: "Variant",
        inputName: "variant",
        inputType: "text",
        inputPlaceholder: "Enter variant",
        vehicleType: [
          "car","bike"
        ],
        inputValue: "",
        loanType:["vehicleloan"]
      },
      {
        inputLabel: "Registered Month",
        inputName: "registeredMonth",
        inputType: "number",
        inputPlaceholder: "Enter registered month",
        vehicleType: [
          "car","bike"
        ],
        inputValue: "",
        loanType:["vehicleloan"]
      },
      {
        inputLabel: "Registered Year",
        inputName: "registeredYear",
        inputType: "number",
        inputPlaceholder: "Enter registered year",
        vehicleType: [
          "car","bike"
        ],
        inputValue: "",
        loanType:["vehicleloan"]
      },
      {
        inputLabel: "Second car condition",
        inputName: "secondCarCondition",
        inputType: "dropdown",
        vehicleType: [
          "car"
        ],
        dropValue: [
          "good",
          "average",
          "poor"
        ],
        loanType:["vehicleloan"]
      },
      {
        inputLabel: "Full price of Vehicle",
        inputName: "fullPriceOfVehicle",
        inputType: "number",
        inputPlaceholder: "Enter full price of vehicle",
        vehicleType: [
          "car","bike"
        ],
        inputValue: "",
        loanType:["vehicleloan"]
      },
      {
        inputLabel: "Property Status",
        inputName: "propertyStatus",
        inputType: "dropdown",
        inputPlaceholder: "Enter propert status",
        vehicleType: [
          "car","bike"
        ],
        loanType: [
          "personalloan",
          "homeloan",
          "businessloan",
          "vehicleloan"
          
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
        vehicleType: [
          "car","bike"
        ],
        loanType: [
          "personalloan",
          "homeloan",
          "businessloan",
          "vehicleloan"
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
          "businessloan",
          "vehicleloan"
        ],
        vehicleType: [
          "car","bike"
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
        "businessloan",
        "vehicleloan"
      ],
      vehicleType: [
        "car","bike"
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
        "businessloan",
        "vehicleloan"
      ],
      vehicleType: [
        "car","bike"
      ],
      inputPlaceholder:"Your Job Title"
    },
    {
      inputLabel: "Duration of Stay Current Address Year",
      inputName: "durationOfStayCurrentAddressYear",
      inputType: "number",
      inputPlaceholder: "Enter in years",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue: null
    },
    {
      inputLabel: "Employment Type",
      inputName: "employmentType",
      inputType: "radio",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue:"Salaried"
    },
    {
      inputName: "employmentType",
      inputType: "radio",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue:"SelfEmployed"
    },
    {
      inputLabel: "Duration of Stay Current Address Month",
      inputName: "durationOfStayCurrentAddressMonth",
      inputType: "number",
      inputPlaceholder: "Enter in month",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue: null
    },
    {
      inputLabel: "Years Employed",
      inputName: "yearsEmployed",
      inputType: "number",
      inputPlaceholder: "Enter in years employed",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue: null
    },
    {
      inputLabel: "Monthly Net Income",
      inputName: "monthlyNetIncome",
      inputType: "number",
      inputPlaceholder: "Enter monthly net income",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue: null
    },
    {
      inputLabel: "Monthly Expense",
      inputName: "monthlyExpenses",
      inputType: "number",
      inputPlaceholder: "Enter monthly expenses",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue: null
    },
    {
      inputLabel: "Cibil Issue",
      inputName: "Cibil Issue",
      inputType: "radio",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue:"yes"
    },
    {
      inputName: "Cibil Issue",
      inputType: "radio",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue:"no"
    },
    {
      inputLabel: "Loan Amount",
      inputName: "loanAmount",
      inputType: "number",
      inputPlaceholder: "Enter loan amount",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue: null
    },{
      inputLabel:"Interest",
      inputName: "interest",
      inputType: "text",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      vehicleType: [
        "car","bike"
      ],
      inputValue:'',
      inputPlaceholder:"Your Place Of Interset"
    },
    {
      inputLabel: "Tenure Year",
      inputName: "tenureYear",
      inputType: "number",
      inputPlaceholder: "Enter in tenure year",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue: null
    },
    {
      inputLabel: "Tenure Month",
      inputName: "tenureMonth",
      inputType: "number",
      inputPlaceholder: "Enter in tenure month",
      vehicleType: [
        "car","bike"
      ],
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      value: null
    },
    // {
    //   inputLabel: "EMI",
    //   inputName: "emi",
    //   inputType: "number",
    //   inputPlaceholder: "EMI Amount",
    //   vehicleType: [
    //     "car","bike"
    //   ],  
    //   loanType: [
    //     "personalloan",
    //     "homeloan",
    //     "businessloan",
    //     "vehicleloan"
    //   ],
    //   inputValue: null
    // }
    
  ],
    securedLoansInfo:{},
  
    personalLoanView: false,
  },
  reducers: {
    
    setInputInfo: (state, action) => {
      state.inputInfo = action.payload;
    },
    setSecuredLoansInfo: (state, action) => {
      state.securedLoansInfo = action.payload;
    },
    setPersonalLoanView: (state, action) => {
      state.personalLoanView = action.payload;
    },
    setPurposeOfPersonalLoan: (state, action) => {
      state.purposeOfPersonalLoan = action.payload;
    },
  },
});

export const {
  setSecuredLoansInfo,
  setPersonalLoanView,
  setPurposeOfPersonalLoan,
  setInputInfo
} = SecuredLoansSlice.actions;
export default SecuredLoansSlice.reducer;
