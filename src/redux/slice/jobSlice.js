import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJob = createAsyncThunk('job/ViewJob', async () => {
    try {
        const result = await axios.get('https://jobportal-bcakend.onrender.com/jobs')
     
            // // store the data to local storage
            // localStorage.setItem("alljobs", JSON.stringify(result.data))
           
        
        return result.data
    }
    catch (err) {
        console.log("error during fetching data", err);
throw err
    }

})
// ✅ Fetch a single job by ID (for job details page)
export const fetchJobById = createAsyncThunk('job/fetchJobById', async (id) => {
    const response = await axios.get(`https://jobportal-bcakend.onrender.com/jobs/${id}`);
    return response.data;
});

const jobSlice = createSlice({
    name: 'job',
    initialState: {
        loading: false,
        alljobs: [],
        selectedJob:null,
        error: ""
    },
    reducers: {
      

    },
    extraReducers: (builder) => {
        builder.addCase(fetchJob.fulfilled, (state, action) => {
            state.loading = false
            state.alljobs = action.payload
            state.error = ""
        })
        builder.addCase(fetchJob.pending, (state, action) => {
            state.loading = true
            
            state.error = ""
        })
        builder.addCase(fetchJob.rejected, (state, action) => {
            state.loading = false
            state.alljobs = action.payload
            state.error = "Fetched the data failed"
        })

        // ✅ For fetching a single job (details)
        builder.addCase(fetchJobById.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchJobById.fulfilled, (state, action) => {
            state.loading = false;
            state.selectedJob = action.payload;
            state.error = "";
        })
        builder.addCase(fetchJobById.rejected, (state) => {
            state.loading = false;
            state.error = "Failed to fetch job details";
        })

    }

})
export default jobSlice.reducer