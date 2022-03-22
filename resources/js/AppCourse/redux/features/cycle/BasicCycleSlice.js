import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";

export const getBasicCycle = createAsyncThunk(
    "basicCycle/getBasicCycle",
    async () => {
        const res = await client.get(`cycles/simple`);
        return { cycle: res.data };
    });

const basicCycleSlice = createSlice({
    name: "basicCycle",
    initialState: {
        cycles: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getBasicCycle.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getBasicCycle.fulfilled]: (state, action) => {
            state.cycles = action.payload.cycle;
            state.isLoading = false;
        },
        [getBasicCycle.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    },
});

export default basicCycleSlice.reducer;
