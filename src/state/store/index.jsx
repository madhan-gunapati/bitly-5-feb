import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../userSlice";
import LoginSliceReducer from "../LoginSlice";

const store = configureStore({
    reducer:{
        HomeSlice:userSliceReducer, 
        LoginSlice:LoginSliceReducer
    }
})

export default store