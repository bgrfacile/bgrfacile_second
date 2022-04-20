import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";


export const getAllcycles = createAsyncThunk(
    "cycles/getAllcycles",
    async () => {
        const res = await client.get("/cycles");
        return { cycles: res.data };
    });

const cyclesSlice = createSlice({
    name: "cycles",
    initialState: {
        cycles: [],
        levelsCycles: [],
        matieresLevels: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        allcycles: (state, action) => {
            state.cycles = action.payload.cycles;
        },
        chargeListLevels: (state, action) => {
            state.levelsCycles = state.cycles.find(cycle => cycle.id === action.payload.id).levels;
        },
        chargeListMatieres: (state, action) => {
            state.matieresLevels = (state.levelsCycles.find(level => level.id === action.payload.id)).matieres;
        }
    },
    extraReducers: {
        [getAllcycles.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getAllcycles.fulfilled]: (state, action) => {
            state.cycles = action.payload.cycles;
            state.isLoading = false;
        },
        [getAllcycles.rejected]: (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        },
    },
});

export const {
    allcycles,
    chargeListLevels,
    chargeListMatieres,
} = cyclesSlice.actions;
export default cyclesSlice.reducer;
