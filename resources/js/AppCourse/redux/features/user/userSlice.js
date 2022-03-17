import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import client from '../../../../api/client';

// const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const initialValue = {
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
};

export const checkConnect = createAsyncThunk(
    "user/checkConnect",
    async () => {
        const resultat = await client.get(`/auth/me`)
            .then(res => {
                if (res.data) {
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    return { data: res.data };
                }
            })
            .catch(err => {
                return { data: err.data };
            });
        return resultat;
    }
);

export const checkLogin = createAsyncThunk(
    "user/checkLogin",
    async (user) => {
        const resultat = await client.post(`/signin`, user)
            .then(res => {
                if (res.data) {
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                    return { data: res.data };
                }
            })
            .catch(err => {
                return { data: err.data };
            });
        console.log("resultat", resultat);
        return resultat;
    }
);


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: initialValue,
        isLoading: false,
        isconnect: false,
        success: false,
        successMessage: '',
        errors: null,
        error: false,
        errorMessage: '',
    },
    reducers: {
        login: (state, action) => {
            state.isLoading = true;
            state.profile = action.payload
        },
        updateProfileImage: (state, action) => {
            state.profile.url_image = action.payload
        },
        logout: (state) => {
            state.profile = initialValue
            state.isLoading = false;
            state.isconnect = false;
            state.success = false;
            state.successMessage = '';
            state.errors = null;
            state.error = false;
            state.errorMessage = '';
        }
    },
    extraReducers: {
        [checkConnect.pending]: (state, action) => {
            state.isLoading = true;
        },
        [checkLogin.pending]: (state, action) => {
            state.isLoading = true;
        },
        [checkConnect.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isconnect = true;
            state.profile = action.payload.data.user;
        },
        [checkLogin.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.success = true;
            state.successMessage = action.payload.data.message;
            state.profile = action.payload.data.user;
            state.isconnect = true;
        },
        [checkConnect.rejected]: (state, action) => {
            state.isLoading = false;
            state.errors = action.errors.message;
        },
        [checkLogin.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errorMessage = action.payload.data.message;
            state.errors = action.payload.data.errors;
        }
    }
})

export const { updateProfileImage, logout, login } = userSlice.actions

export default userSlice.reducer
