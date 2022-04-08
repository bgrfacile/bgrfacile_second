import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";


export const addRatingExercice = createAsyncThunk(
    "exercices/addRatingExercice",
    async (data, { rejectWithValue }) => {
        const response = await client.post("/raiting", data);
        if (response.status === 201 || response.status === 200) {
            return { data: response.data };
        } else {
            return rejectWithValue(response.data);
        }
    }
);

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

export const addLike = createAsyncThunk(
    "exercices/addLike",
    async (payload, { rejectWithValue }) => {
        try {
            const datas = payload;
            const res = await client.post(`/like`, {
                likeable_type: datas.likeable_type,
                likeable_id: datas.likeable_id,
            });
            return { data: res.data };
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);

export const removeLike = createAsyncThunk(
    "exercices/removeLike",
    async (payload, { rejectWithValue }) => {
        try {
            const datas = payload;
            const res = await client.delete(`/like/cours/${datas.courId}`);
            return { data: res.data };
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);
