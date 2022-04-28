import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";
import { configFormData } from "../../../utils/Function";

export const postInfosUser = createAsyncThunk(
    "createProfileProf/postInfosUser",
    async (data, thunkAPI) => {
        try {
            const response = await client.post("/createProfileProf", data);
            return { data: response.data };
        } catch (error) {
            return error.response.data;
        }
    }
);
