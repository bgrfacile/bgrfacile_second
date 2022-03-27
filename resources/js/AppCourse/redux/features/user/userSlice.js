import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import client from '../../../../api/client';


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

const initialValue = {
    profile: {
        user_id: null,
        user_name: '',
        firstName: '',
        lastName: '',
        birthday: '',
        telephone: '',
        age: '',
        gender: {},
        email: '',
        country: '',
        url_image: '',
        roles: [],
    },
    isLoading: false,
    isconnect: false,
    success: false,
    successMessage: '',
    errors: null,
    error: false,
    errorMessage: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialValue,
    reducers: {
        updateProfileImage: (state, action) => {
            console.log('action.payload', action.payload)
            state.profile.url_image = action.payload
        },
        logout: (state) => {
            state = initialValue
        }
    },
    extraReducers: {
        [checkConnect.pending]: (state, action) => {
            state.isLoading = true;
        },
        [checkConnect.fulfilled]: (state, action) => {
            console.log('checkConnect.fulfilled', action.payload)
            state.isLoading = false;
            state.isconnect = true;
            state.profile = action.payload.data.user;
        },
        [checkConnect.rejected]: (state, action) => {
            state.isLoading = false;
            state.isconnect = false;
            // state.errors = action.payload.errors;
            // state.error = true;
            // state.errorMessage = action.payload.message;
        },


        [checkLogin.pending]: (state, action) => {
            state.isLoading = true;
        },
        [checkLogin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.success = true;
            state.successMessage = action.payload.data.message;
            state.profile = action.payload.data.user;
            state.isconnect = true;
        },
        [checkLogin.rejected]: (state, action) => {
            console.log('action', action)
            state.isLoading = false;
            state.isconnect = false;
            state.error = true;
            state.errorMessage = action.payload.message;
            state.errors = action.payload.errors;
        },

        [checkRegister.pending]: (state, action) => {
            state.isLoading = true;
        },
        [checkRegister.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.success = true;
            state.successMessage = action.payload.data.message;
            state.profile = action.payload.data.user;
            state.isconnect = true;
        },
        [checkRegister.rejected]: (state, action) => {
            console.log('action', action)
            state.isLoading = false;
            state.isconnect = false;
            state.error = true;
            state.errorMessage = action.payload.message;
            state.errors = action.payload.errors;
        }
    }
})

export const { updateProfileImage, logout } = userSlice.actions

export default userSlice.reducer
