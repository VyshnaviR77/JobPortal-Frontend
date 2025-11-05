import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
    try {
        const result = await axios.post("https://jobportal-bcakend.onrender.com/user", userData)
        return result.data
    }
    catch (err) {
        console.error("Error during registration:", err);
        throw err; //This will trigger rejected status
    }

})
export const loginUser = createAsyncThunk('auth/loginUser',async(loginData)=>{
    try{
        const result = await axios.get("https://jobportal-bcakend.onrender.com/user")
        const user = result.data.find((u)=>u.email===loginData.email && u.password===loginData.password)
        if(!user){
            throw new Error("Invalid Email or Password");
        }
        return user
    }
    catch (err) {
        console.error("Error during login:", err);
        throw err; //This will trigger rejected status
    }

})


const authslice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        user: null,
        error: null,
        isAuthenticated: false

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.isAuthenticated = true  //User successfully registered

        })
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true
            state.user = null
            state.isAuthenticated = false
            state.error = null

        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.user = null
            state.isAuthenticated = false  //User successfully registered
            state.error = "Registion  Failed"
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
            state.isAuthenticated = true  //User successfully registered

        })
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true
            state.user = null
            state.isAuthenticated = false
            state.error = null

        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false
            state.user = null
            state.isAuthenticated = false  //User successfully registered
            state.error = "login  Failed"
        })


    }

})
export default authslice.reducer