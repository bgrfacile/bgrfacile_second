import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";
import { configFormData } from "../../../utils/Function";

export const createExercice = createAsyncThunk(
    "createExercice/createExercice",
    async (data, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            for (const [key, value] of Object.entries(data)) {
                formData.append(key, value);
            }
            const response = await client.post("/exercices", formData, configFormData);
            return { data: response.data };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
