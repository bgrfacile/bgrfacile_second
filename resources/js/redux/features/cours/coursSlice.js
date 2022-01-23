import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../api/client";

export const getCoursAsync = createAsyncThunk(
    'cours/getCours',
    async () => {
        const res = await client.get("/cours");
        return { cours: res.data };
    });

const coursSlices = createSlice({
    name: "cours",
    initialState: [],
    reducers: {
        allCours: (state, action) => {
            return state;
        },
    },
    extraReducers: {
        [getCoursAsync.pending]: (state, action) => {
            console.log('pending ...');
        },
        [getCoursAsync.fulfilled]: (state, action) => {
            return action.payload.cours;
        }
    }
});

export const { allCours } = coursSlices.actions;

export default coursSlices.reducer;

