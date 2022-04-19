import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";

export const deleteComment = createAsyncThunk(
    "cours/deleteComment",
    async (data, { rejectWithValue }) => {
        const res = await client.delete(`/cours/${data.id}/comments/${data.comment_id}`);
        if (res.status === 200) {
            return { data: res.data };
        } else {
            return rejectWithValue({ error: res.data });
        }
    }
);


export const postComment = createAsyncThunk(
    "cours/postComment",
    async (data, { rejectWithValue }) => {
        const response = await client.post(`/cours/${data.id}/comments`, data.datas)
        if (response.status === 201 || response.status === 200) {
            return { data: response.data };
        } else {
            return rejectWithValue(response.data);
        }
    }
);

export const fetchComments = createAsyncThunk(
    "cours/fetchComments",
    async (data, { rejectWithValue }) => {
        const response = await client.get(`/cours/${data.id}/comments`);
        if (response.status === 200) {
            return { data: response.data };
        } else {
            return rejectWithValue(response.data);
        }
    }
);

export const addRatingCourse = createAsyncThunk(
    "ratingCourse/addRatingCourse",
    async (data, { rejectWithValue }) => {
        const response = await client.post("/raiting", data);
        if (response.status === 201 || response.status === 200) {
            return { data: response.data };
        } else {
            return rejectWithValue(response.data);
        }
    }
);

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

export const getLastCours = createAsyncThunk(
    'cours/getLastCours',
    async () => {
        const res = await client.get("/cours");
        return { cours: res.data };
    });
export const getCoursByCycle = createAsyncThunk(
    'cours/getCoursByCycle',
    async ({ idCycle }) => {
        const res = await client.get(`/cours/getCours/${idCycle}`);
        return { cours: res.data };
    });
export const getCoursByLevel = createAsyncThunk(
    'cours/getCoursByLevel',
    async ({ idCycle, idLevel }) => {
        const res = await client.get(`/cours/getCours/${idCycle}/${idLevel}`);
        return { cours: res.data };
    });
export const getCoursByMatiere = createAsyncThunk(
    'cours/getCoursByLevel',
    async ({ idCycle, idLevel, idMatiere }) => {
        const res = await client.get(`/cours/getCours/${idCycle}/${idLevel}/${idMatiere}`);
        return { cours: res.data };
    });

