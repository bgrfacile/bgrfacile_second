import { createSlice } from "@reduxjs/toolkit";
import {
    changeStatusActif,
    deleteMyCours,
    getMyCours,
    getShowCours,
} from './functions';


const myCoursSlice = createSlice({
    name: "myCours",
    initialState: {
        cours: [],
        isLoading: true,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getMyCours.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getMyCours.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cours = action.payload.data;
        },
        [getMyCours.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.data.message;
        },

        [changeStatusActif.fulfilled]: (state, action) => {
            state.cours = state.cours.map((cour) => {
                if (cour.id === action.payload.data.cours.id) {
                    cour.isActif = action.payload.data.cours.isActif;
                }
                return cour;
            });
        },

        [deleteMyCours.fulfilled]: (state, action) => {
            state.cours = state.cours.filter((cour) => cour.id !== action.payload.data.cours.id);
        },
        [getShowCours.fulfilled]: (state, action) => {
            state.cours = [...state.cours, action.payload.data];
        },
    },
});

export const { } = myCoursSlice.actions;

export default myCoursSlice.reducer;
