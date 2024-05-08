import { createSlice } from "@reduxjs/toolkit";
import Category from "../../Category";
export const LoansCategorySlice = createSlice({
    name: "loansCategory",
    initialState: {
        loansCategory: {
         
        }
    },

    reducers: {
        setLoansCategory: (state, action) => {
            state.loansCategory = action.payload
        }
    },
})

export const { setLoansCategory } = LoansCategorySlice.actions;
export default LoansCategorySlice.reducer