import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../../../api/client";


export const getListMatiere = createAsyncThunk(
    "matiere/getListMatiere",
    async () => {
        const res = await client.get("matieres/simple");
        return { matieres: res.data };
    });

const matieresSlice = createSlice({
    name: "matieres",
    initialState: {
        matieres: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [getListMatiere.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getListMatiere.fulfilled]: (state, action) => {
            state.matieres = action.payload.matieres;
            state.isLoading = false;
        },
        [getListMatiere.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    },
});

export default matieresSlice.reducer;
