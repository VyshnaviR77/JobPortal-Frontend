import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice'
import jobsReducer from './slice/jobSlice'
import applyReducer from './slice/applySlice'
const store = configureStore({
    reducer: {
        authsation: authReducer,
        jobs: jobsReducer,
        applys:applyReducer



    }

})
export default store