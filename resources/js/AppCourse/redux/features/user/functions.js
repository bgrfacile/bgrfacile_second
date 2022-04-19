import { createAsyncThunk } from '@reduxjs/toolkit'
import client from '../../../../api/client';

export const updateMotDePasse = createAsyncThunk(
    "user/updateMotDePasse",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await client.post(`/updateMotDePasse`, payload)
            return { data: res.data };
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);

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

export const checkConnect = createAsyncThunk(
    "user/checkConnect",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await client.get(`/auth/me`)
            return { data: res.data };
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);

export const checkLogin = createAsyncThunk(
    "user/checkLogin",
    async (user, { rejectWithValue }) => {
        try {
            const res = await client.post(`/signin`, user)
            localStorage.setItem('user', JSON.stringify(res.data.user));
            return { data: res.data };
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);


export const checkRegister = createAsyncThunk(
    "user/checkRegister",
    async (user, { rejectWithValue }) => {
        try {
            const res = await client.post(`/signup`, user)
            localStorage.setItem('user', JSON.stringify(res.data.user));
            return { data: res.data };
        } catch (err) {
            if (!err.response) {
                throw err
            }
            return rejectWithValue(err.response.data)
        }
    }
);

export const getInfoUser = createAsyncThunk(
    "userProfile/getInfoUser",
    async (user_id) => {
        const resultat = await client.get(`/users/${user_id}`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                return err.data;
            });
        return resultat;
    }
);

export const followUser = createAsyncThunk(
    "userProfile/followUser",
    async (user_id) => {
        const res = await client.post(`/users/${user_id}/follow`, { user_id });
        return { user: res.data };
    }
);

export const unfollowUser = createAsyncThunk(
    "userProfile/unfollowUser",
    async (user_id) => {
        const res = await client.post(`/users/${user_id}/unfollow`, { user_id });
        return { user: res.data };
    }
);
