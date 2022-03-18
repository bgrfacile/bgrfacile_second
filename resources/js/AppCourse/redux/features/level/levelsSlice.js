import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../../../api/client";


export const getListLevels = createAsyncThunk(
    "levels/getListLevels",
    async () => {
        const res = await client.get("levels/simple");
        return { levels: res.data };
    });

const levelsSlice = createSlice({
    name: "levels",
    initialState: {
        levels: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getListLevels.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getListLevels.fulfilled]: (state, action) => {
            state.levels = action.payload.levels;
            state.isLoading = false;
        },
        [getListLevels.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    },
});

export default levelsSlice.reducer;
