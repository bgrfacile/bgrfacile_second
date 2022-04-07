import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";

export const getExerciceById = createAsyncThunk(
    "exercices/getExerciceById",
    async (payload, { rejectWithValue }) => {
        try {
            const datas = payload;
            const res = await client.get(`/exercices/${datas.id}`);
            return { data: res.data };
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
