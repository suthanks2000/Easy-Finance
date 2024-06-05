import { createSlice } from "@reduxjs/toolkit";
export const PersonalDetailSlice = createSlice({
  name: "personalDetail",
  initialState: {
  inputInfo: [
        {
          inputLabel: "First Name",
          inputName: "firstName",
          inputType: "text",
          inputPlaceholder: "Enter your Firstname",
          inputValue: ""
        },
        {
          inputLabel: "Last Name",
          inputName: "lastName",
          inputType: "text",
          inputPlaceholder: "Enter your Lastname",
          inputValue: ""
        },
        {
          inputLabel: "Father Name",
          inputName: "fatherName",
          inputType: "text",
          inputPlaceholder: "Enter your father name",
          inputValue: ""
        },
        {
          inputLabel: "Age",
          inputName: "Age",
          inputType: "number",
          inputPlaceholder: "Enter your age",
          inputValue: null
        },
     
        {
          inputLabel: "Gender",
          inputName: "Gender",
          inputType: "radio",
          inputValue: "male"
        },
        {
          inputName: "Gender",
          inputType: "radio",
          inputValue: "female"
        },
        {
          inputLabel: "Marital Status",
          inputName: "maritalStatus",
          inputType: "radio",
          inputValue: "married",
        },
        {
          inputName: "maritalStatus",
          inputType: "radio",
          inputValue: "unmarried"
          
        },
        {
          inputLabel: "District",
          inputName: "District",
          inputType: "dropdown",
          dropValue: [
            "Select District",
            "Ariyalur",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kallakurichi",
            "Kanchipuram",
            "Kanyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Nagapattinam",
            "Namakkal",
            "Nilgiris",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Ranipet",
            "Salem",
            "Sivaganga",
            "Tenkasi",
            "Thanjavur",
            "Theni",
            "Thoothukudi",
            "Tiruchirappalli",
            "Tirunelveli",
            "Tirupathur",
            "Tiruppur",
            "Tiruvallur",
            "Tiruvannamalai",
            "Tiruvarur",
            "Vellore",
            "Viluppuram",
            "Virudhunagar"
          ]
        },
        {
          inputLabel: "City",
          inputName: "City",
          inputType: "text",
          inputPlaceholder: "Enter your city",
          inputValue: ""
        },
        {
          inputLabel: "Pin Code",
          inputName: "pinCode",
          inputType: "number",
          inputPlaceholder: "Enter your pincode",
          inputValue: ""
        },
        {
          inputLabel: "Contact Number",
          inputName: "Contact",
          inputType: "text",
          inputPlaceholder: "Enter your contact number",
          inputValue: ""
        }
      ],

      personalInfo:{}
    

  },
  reducers: {
    setInputInfo: (state, action) => {
      state.inputInfo = action.payload;
    },
    setPersonalInfo: (state, action) => {
      state.personalInfo = action.payload
    }
  },
});

export const { setPersonalInfo,  setInputInfo } = PersonalDetailSlice.actions;
export default PersonalDetailSlice.reducer;
