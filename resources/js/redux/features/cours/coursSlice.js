import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base from "../../../api/base";
import React, { useEffect, useState } from "react";

export const getCoursAsync = createAsyncThunk(
    'cours/getCours',
    async () => {
        const res = await base.get("/cours");
        return {cours: res.data};
    });
const initState = [
    {
        id: 1,
        name: "Cours 1",
        description: "Description du cours 1",
        image: "https://picsum.photos/200/300",
        typeCours: "Scolaire",
    },
    {
        id: 2,
        name: "Cours 2",
        description: "Description du cours 2",
        image: "https://picsum.photos/200/300",
        typeCours: "Scolaire",
    },
    {
        id: 3,
        name: "Cours 3",
        description: "Description du cours 3",
        image: "https://picsum.photos/200/300",
        typeCours: "Scolaire",
    },
];
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

