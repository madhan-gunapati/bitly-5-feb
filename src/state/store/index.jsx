import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../userSlice";

const store = configureStore({
    reducer:{
        HomeSlice:userSliceReducer
    }
})

export default store