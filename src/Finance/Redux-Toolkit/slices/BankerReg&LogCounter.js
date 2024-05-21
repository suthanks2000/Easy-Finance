import { createSlice } from "@reduxjs/toolkit";

export const BankerRegLogSlice = createSlice({
name:"bankerRegLog",
initialState: {
    bankRegister: {},
    bankLogin: {},
    BankData: {},
},
reducers:{
    setBankRegister : (state, action) => {
        state.bankRegister  = action.payload
    },
    setBankLogin : (state , action ) => {
        state.bankLogin = action.payload
    },
    setBankData : (state , action) => {
        state.BankData = action.payload
    }

}
})

export const {setBankRegister,setBankLogin,setBankData} = BankerRegLogSlice.actions

export default BankerRegLogSlice.reducer