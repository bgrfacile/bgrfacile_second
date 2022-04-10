import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";

export const getSearchData = createAsyncThunk(
    "search/getSearchData",
    async (payload, { rejectWithValue }) => {
        try {
            const { q, type } = payload;
            const res = await client.get(`/search/${q}?type=${type}`);
            return { data: res.data };
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
