import { createSlice } from "@reduxjs/toolkit";
export const PersonalDetailSlice = createSlice({
    name: "personalDetail",
    initialState: {
        personalInfo: {
            firstName:"",
            lastName:"",
            uid:"",
            fatherName:"",
            Age:null,
            maritalStatus:"",
            Gender:"",
            Email:"",
            Address:{
                District:"",
                City:"",
                pinCode:null,
            },
            Contact:""
            }
        },
        reducers: {
            setPersonalInfo: (state, action) => {
                state.personalInfo = action.payload
            }
        }
    })

    export const { setPersonalInfo }= PersonalDetailSlice.actions
    export default PersonalDetailSlice.reducer