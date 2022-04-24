import { createSlice } from "@reduxjs/toolkit";
import { getMyExercicesCreate, changeStatus, deleteExercice, getShowExercice } from './functions';

const myExerciceSlice = createSlice({
    name: "myExercice",
    initialState: {
        exercices: [],
        isLoading: true,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getMyExercicesCreate.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getMyExercicesCreate.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.exercices = action.payload.data;
        },
        [getMyExercicesCreate.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.data.message;
        },
        [changeStatus.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.exercices = state.exercices.map((exercice) => {
                if (exercice.id === action.payload.data.exercice.id) {
                    exercice.isActif = action.payload.data.exercice.isActif;
                }
                return exercice;
            });
        },
        [deleteExercice.fulfilled]: (state, action) => {
            state.exercices = state.exercices.filter((exercice) => exercice.id !== action.payload.data.exercice.id);
        },
        [getShowExercice.fulfilled]: (state, action) => {
            state.exercices = [...state.exercices, action.payload.data];
        }

    },
});

export default myExerciceSlice.reducer;
