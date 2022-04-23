import { createSlice } from "@reduxjs/toolkit";
import { getMySolutionsCreate } from './functions';


const mySolutionSlice = createSlice({
    name: "mySolution",
    initialState: {
        solutions: [],
        isLoading: true,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getMySolutionsCreate.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getMySolutionsCreate.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.solutions = action.payload.data;
        },
        [getMySolutionsCreate.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.data.message;
        },
    },
});

export default mySolutionSlice.reducer;
