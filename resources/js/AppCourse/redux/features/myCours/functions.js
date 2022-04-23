import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";


export const getShowCours = createAsyncThunk(
    "myCours/getShowCours",
    async (data, { rejectWithValue }) => {
        try {
            const response = await client.get(`/cours/${data.courId}`);
            return { data: response.data };
        } catch (error) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);

export const getMyCours = createAsyncThunk(
    "myCours/getMyCours",
    async (data, { rejectWithValue }) => {
        try {
            const res = await client.get(`/cours/me/${data.user_id}`);
            return { data: res.data };
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);

export const changeStatusActif = createAsyncThunk(
    "myCours/changeStatusActif",
    async (data, { rejectWithValue }) => {
        try {
            const res = await client.put(`/cours/${data.cour_id}/isactif`, {
                isActif: data.isActif,
                userId: data.userId,
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

export const deleteMyCours = createAsyncThunk(
    "myCours/deleteCours",
    async (data, { rejectWithValue }) => {
        try {
            const res = await client.delete(`/cours/${data.cour_id}`);
            return { data: res.data };
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);
