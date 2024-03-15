// store.js
import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";

import lawyerReducer from "./lawyerSlice.js";


const store = configureStore({
  reducer: {
    auth: authReducer,
    lawyer: lawyerReducer,
  },
});

export default store;
