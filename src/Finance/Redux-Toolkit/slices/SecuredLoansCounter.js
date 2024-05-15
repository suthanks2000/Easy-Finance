import { createSlice } from "@reduxjs/toolkit";

export const SecuredLoansSlice = createSlice({
  name: "securedLoans",
  initialState: {
    inputInfo:[
      {
        inputLabel: "Employment Type",
        inputName: "employmentType",
        inputType: "radio",
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
        loanType: [
          "personalloan",
          "homeloan",
          "businessloan",
          "vehicleloan"
        ],
        inputValue:"SelfEmployed"
      },
      {
        inputLabel: "Vehicle Type",
        inputName: "vehicleType",
        inputType: "dropdown",
        dropValue: [
          "select","car","bike"
        ],
        loanType:["vehicleloan"]
      },
      {
        inputLabel: "Car Type",
        inputName: "carType",
        inputType: "dropdown",
        hidden:true,
        parent:"car",
        dropValue: [
          "select",
          "usedCar",
          "newCar"
        ],
        loanType:["vehicleloan"]
      },
      {
        inputLabel: "Second car condition",
        inputName: "secondCarCondition",
        inputType: "dropdown",
        hidden:true,
        parent:"usedCar",
        dropValue: [
          "select",
          "good",
          "average",
          "poor"
        ],
        statechange:true,
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
        inputLabel:"Job Title",
        inputName: "jobTitle",
        inputType: "text",
        loanType: [
          "personalloan",
          "homeloan",
          "businessloan",
          "vehicleloan"
        ],
        inputPlaceholder:"Your Job Title"
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
        inputPlaceholder:"Your Place Of Work"
      },
      {
        inputLabel: "Property Status",
        inputName: "propertyStatus",
        inputType: "dropdown",
        inputPlaceholder: "Enter propert status",
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
        loanType: [
          "personalloan",
          "homeloan",
          "businessloan",
          "vehicleloan"
        ],
        dropValue: [
          "select One",
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
        dropValue: [
          "select",
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
          "select",
          "travel",
          "medical",
          "take over existing personal loan",
          "purchase",
          "other"
        ]
      },
    {
      inputLabel: "Duration of Stay Current Address Year",
      inputName: "durationOfStayCurrentAddressYear",
      inputType: "number",
      inputPlaceholder: "Enter in years",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue: null
    },
    {
      inputLabel: "Duration of Stay Current Address Month",
      inputName: "durationOfStayCurrentAddressMonth",
      inputType: "number",
      inputPlaceholder: "Enter in month",
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
      inputName: "CibilIssue",
      inputType: "radio",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue:"yes"
    },
    {
      inputName: "CibilIssue",
      inputType: "radio",
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
      min:"999",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue: null
    },
    {
      inputLabel:"Interest",
      inputName: "interest",
      inputType: "text",
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      inputValue:'',
      inputPlaceholder:"Your Place Of Interset"
    },
    {
      inputLabel: "Tenure Year",
      inputName: "tenureYear",
      inputType: "number",
      inputPlaceholder: "Enter in tenure year",
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
      loanType: [
        "personalloan",
        "homeloan",
        "businessloan",
        "vehicleloan"
      ],
      value: null
    },
    
  ],
    securedLoansInfo:{};
  },
  reducers: {
    
    setInputInfo: (state, action) => {
      state.inputInfo = action.payload;
    },
    setSecuredLoansInfo: (state, action) => {
      state.securedLoansInfo = action.payload;

    }
  }

 
});

export const {
  setSecuredLoansInfo,

  setInputInfo

} = SecuredLoansSlice.actions;
export default SecuredLoansSlice.reducer;
