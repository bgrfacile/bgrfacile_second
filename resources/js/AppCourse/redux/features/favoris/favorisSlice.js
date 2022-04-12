import { createSlice } from "@reduxjs/toolkit";
import { getFavorisCours, getFavorisExercices } from "./functions";


const initialState = {
    favoris: [],
    favorisCours: [],
    favorisExercices: [],
    loading: false,
    error: null,
};

const favorisSlice = createSlice({
    name: "favoris",
    initialState,
    reducers: {
        addFavoris: (state, action) => {
            state.favoris.push(action.payload);
        },
        removeFavoris: (state, action) => {
            state.favoris = state.favoris.filter(favoris => favoris.id !== action.payload);
        },
    },
    extraReducers: {
        [getFavorisCours.pending]: (state, action) => {
            state.loading = true;
        },
        [getFavorisCours.fulfilled]: (state, action) => {
            state.loading = false;
            state.favorisCours = action.payload;
        },
        [getFavorisCours.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [getFavorisExercices.pending]: (state, action) => {
            state.loading = true;
        },
        [getFavorisExercices.fulfilled]: (state, action) => {
            state.loading = false;
            state.favorisExercices = action.payload;
        },
        [getFavorisExercices.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { addFavoris, removeFavoris } = favorisSlice.actions;
export default favorisSlice.reducer;
