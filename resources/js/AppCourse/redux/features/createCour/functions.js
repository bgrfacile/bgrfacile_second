import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";
import { configFormData } from "../../../utils/Function";

export const createCours = createAsyncThunk(
    "createCours/createCours",
    async (data, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value);
            }
            const response = await client.post("/cours", formData, configFormData);
            return { data: response.data };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);