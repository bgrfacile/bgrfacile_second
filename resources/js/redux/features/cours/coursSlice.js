import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import base from "../../../api/base";
import React, { useEffect, useState } from "react";

export const getCoursAsync = createAsyncThunk(
    'cours/getCours',
    async () => {
        const res = await base.get("/cours"/* , {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        } */);
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

