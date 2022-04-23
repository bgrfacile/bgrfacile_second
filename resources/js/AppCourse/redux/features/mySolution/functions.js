import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";


export const getMySolutionsCreate = createAsyncThunk(
    "mySolutions/getMySolutionsCreate",
    async (data, { rejectWithValue }) => {
        try {
            const response = await client.get("/solutions/me");
            return { data: response.data };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteSolution = createAsyncThunk(
    "mySolutions/deleteSolution",
    async (data, { rejectWithValue }) => {
        try {
            const response = await client.delete(`/solutions/${data.solution_id}`);
            return { data: response.data };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const changeStatus = createAsyncThunk(
    "mySolutions/changeStatus",
    async (data, { rejectWithValue }) => {
        try {
            const response = await client.put(`/solutions/${data.solution_id}/isactif`, {
                isActif: data.isActif,
            });
            return { data: response.data };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
