import { createAsyncThunk } from '@reduxjs/toolkit'
import client from '../../../../api/client';

export const updateInfoUser = createAsyncThunk(
    "user/updateInfoUser",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await client.put(`/user/update`, payload)
            return { data: res.data };
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);

export const updateProfileImage = createAsyncThunk(
    'user/updateProfileImage',
    async (payload, { rejectWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('file', payload.file);
            const res = await client.post(`/user/image/update`, formData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
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
