import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";

export const getFavorisCours = createAsyncThunk(
    "favoris/getFavorisCours",
    async (payload, thunkAPI) => {
        try {
            const response = await client.get(`/favoris/cours`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getFavorisExercices = createAsyncThunk(
    "favoris/getFavorisExercices",
    async (payload, thunkAPI) => {
        try {
            const response = await client.get(`/favoris/exercices`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
