import { configureStore } from "@reduxjs/toolkit";
import RegLogSlice from "./slices/RegLogCounter";
export default configureStore({
  reducer: {
    counter: RegLogSlice,
  },
});
