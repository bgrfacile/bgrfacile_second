import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";

export const showCours = createAsyncThunk(
    "cours/showCours",
    async (payload, { rejectWithValue }) => {
        try {
            const datas = payload;
            const res = await client.get(`/cours/${datas.id}`);
            return { data: res.data };
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);

export const addLike = createAsyncThunk(
    "cours/addLike",
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
    "cours/removeLike",
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
