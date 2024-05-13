import { createSlice } from "@reduxjs/toolkit";
export const PersonalDetailSlice = createSlice({
  name: "personalDetail",
  initialState: {
    // personalInfo: {
    //   firstName: "",
    //   lastName: "",
    //   uid: "",
    //   fatherName: "",
    //   Age: null,
    //   maritalStatus: "",
    //   Gender: "",
    //   Email: "",
    //   Address: {
    //     District: "",
    //     City: "",
    //     pinCode: null,
    //   },
    //   Contact: "",
    // },

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
          inputName: "age",
          inputType: "number",
          inputPlaceholder: "Enter your age",
          inputValue: null
        },
     
        {
          inputLabel: "Gender",
          inputName: "gender",
          inputType: "radio",
          inputValue: "male"
        },
        {
          inputName: "gender",
          inputType: "radio",
          inputValue: "female"
        },
        {
          inputLabel: "Email",
          inputName: "email",
          inputType: "email",
          inputPlaceholder: "Enter email address",
          inputValue: ""
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
          inputName: "district",
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
          inputName: "city",
          inputType: "text",
          inputPlaceholder: "Enter your city",
          inputValue: ""
        },
        {
          inputLabel: "Pin code",
          inputName: "pincode",
          inputType: "text",
          inputPlaceholder: "Enter your pincode",
          inputValue: ""
        },
        {
          inputLabel: "Contact",
          inputName: "contact",
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
