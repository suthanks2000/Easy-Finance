import { createSlice } from "@reduxjs/toolkit";

export const SecuredLoansSlice = createSlice({
  name: "securedLoans",
  initialState: {
 
  securedLoansInfo:{},
  renderloaninfo:{}
  },
  reducers: {
    
    setSecuredLoansInfo: (state, action) => {
      state.securedLoansInfo = action.payload;
    },
    setRenderloaninfo: (state, action) => {
      state.renderloaninfo = action.payload;
    }
  }

 
});

export const {
  setSecuredLoansInfo,
  setRenderloaninfo

} = SecuredLoansSlice.actions;
export default SecuredLoansSlice.reducer;
