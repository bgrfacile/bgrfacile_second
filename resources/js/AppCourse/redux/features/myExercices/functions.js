import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";

export const getShowExercice = createAsyncThunk(
    "myExercices/getShowExercice",
    async (data, { rejectWithValue }) => {
        try {
            const response = await client.get(`/exercices/${data.exerciceId}`);
            return { data: response.data };
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);
export const getMyExercicesCreate = createAsyncThunk(
    "exercices/getMyExercicesCreate",
    async (data, { rejectWithValue }) => {
        try {
            const response = await client.get("/my-exercices");
            return { data: response.data };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteExercice = createAsyncThunk(
    "exercices/deleteExercice",
    async (data, { rejectWithValue }) => {
        try {
            const response = await client.delete(`/exercices/${data.exercice_id}`);
            return { data: response.data };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const changeStatus = createAsyncThunk(
    "exercices/changeStatus",
    async (data, { rejectWithValue }) => {
        try {
            const response = await client.put(`/exercices/${data.exercice_id}/isactif`, {
                isActif: data.isActif,
            });
            return { data: response.data };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
