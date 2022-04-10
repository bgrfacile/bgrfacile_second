import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchData } from "./functions";


const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
        items: [],
        coursCount: 0,
        exercicesCount: 0,
        solutionsCount: 0,
        // ecolesEnLigneCount: 0,
        typeSearch: "cours",
        loading: false,
        isError: false,
        error: null,
        isEmpty: false,
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    },
    extraReducers: {
        [getSearchData.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [getSearchData.fulfilled]: (state, action) => {
            const { cours, exercices, solutions } = action.payload.data;
            const etatLocal = {};
            etatLocal.items = cours.concat(exercices, solutions);
            etatLocal.coursCount = cours.length;
            etatLocal.exercicesCount = exercices.length;
            etatLocal.solutionsCount = solutions.length;
            etatLocal.loading = false;
            state = Object.assign(state, etatLocal);
        },
        [getSearchData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});


export default searchSlice.reducer;
