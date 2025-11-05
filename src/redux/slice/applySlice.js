import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userapply = createAsyncThunk('apply/userapply', async (data) => {
    try {
        const res = await axios.post('https://jobportal-bcakend.onrender.com/applications', data)
        return res.data
    }
    catch (err) {
        console.error("Error during applying:", err);
        throw err; //This will trigger rejected status
    }

})
export const fetchApplications = createAsyncThunk('apply/fetchApplications',
    async () => {
        const res = await axios.get("https://jobportal-bcakend.onrender.com/applications");
        return res.data;
    }
);
// Delete Application
export const deleteApplication = createAsyncThunk(
    'apply/deleteApplication',
    async (id) => {
        try {
            const result = await axios.delete(`https://jobportal-bcakend.onrender.com/applications/${id}`);
            return id; // Return the ID for removing from Redux
        }
        catch (error) {
            throw error
        }
    }
);

export const editApplication = createAsyncThunk('apply/editApplication',
    async ({ id, updatedData }) => {
        try {
            const response = await axios.put(`http://localhost:3000/applications/${id}`, updatedData);
            return response.data; // Return updated application
        } catch (error) {
            throw error;
        }
    }
);


const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        loading: false,
        applications: [],
        error: ""

    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userapply.fulfilled, (state, action) => {
            state.loading = false
            state.applications.push(action.payload)
        })
        builder.addCase(userapply.pending, (state, action) => {
            state.loading = true

        })
        builder.addCase(userapply.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload || "application failed"
        })

        builder.addCase(fetchApplications.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchApplications.fulfilled, (state, action) => {
            state.loading = false;
            state.applications = action.payload; // ✅ Backend data assigned here
        })
        builder.addCase(fetchApplications.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });


        builder.addCase(deleteApplication.fulfilled, (state, action) => {
            state.loading = false
            state.applications = state.applications.filter(
                (app) => app.id !== action.payload)
        })
        builder.addCase(deleteApplication.pending, (state, action) => {
            state.loading = true

        })
        builder.addCase(deleteApplication.rejected, (state, action) => {
            state.loading = false
            state.error = "failed"
        })

        // edit
        builder.addCase(editApplication.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(editApplication.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.applications.findIndex(app => app.id === action.payload.id);
            if (index !== -1) {
                state.applications[index] = action.payload; // Replace old with new data
            }
        });
        builder.addCase(editApplication.rejected, (state, action) => {
            state.loading = false;
            state.error = "Failed to update application";
        })
    }
})
export default applicationSlice.reducer
