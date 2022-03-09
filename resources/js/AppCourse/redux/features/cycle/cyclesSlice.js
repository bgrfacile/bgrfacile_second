import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";


export const getAllcycles = createAsyncThunk(
    "cycles/getAllcycles",
    async () => {
        const res = await client.get("/cycles");
        return { cycles: res.data };
    });

const cyclesSlices = createSlice({
    name: "cycles",
    initialState: {
        cycles: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        allcycles: (state, action) => {
            state.cycles = action.payload.cycles;
        },
    },
    extraReducers: {
        [getAllcycles.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getAllcycles.fulfilled]: (state, action) => {
            state.cycles = action.payload.cycles;
            state.isLoading = false;
        },
        [getAllcycles.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    },
});

export const { allcycles } = cyclesSlices.actions;
export default cyclesSlices.reducer;
