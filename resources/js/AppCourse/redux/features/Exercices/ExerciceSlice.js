import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../../../api/client";


const getLastExercice = createAsyncThunk(
    'exercices/getLastExercice',
    async () => {
        const res = await client.get("/exercices");
        return { exercices: res.data };
    });

const ExerciceSlice = createSlice({
    name: "exercices",
    initialState: {
        exercices: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getLastExercice.fulfilled]: (state, action) => {
            state.exercices = action.payload.exercices;
        },
        [getLastExercice.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getLastExercice.rejected]: (state, action) => {
            state.error = action.error.message;
        },
    },
});

export default ExerciceSlice.reducer;
