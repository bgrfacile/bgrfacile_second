import { createSlice } from '@reduxjs/toolkit'
import {
    checkRegister,
    checkLogin,
    checkConnect,
    updateInfoUser,
    updateMotDePasse,
    updateProfileImage
} from './functions';

const initialValue = {
    profile: {
        user_id: null,
        pseudo: '',
        lastName: '',
        birthday: '',
        slug: '',
        url_image: '',
        email_verified_at: null,
        has_password: false,
        bio: null,
        gender: '',
        firstName: '',
        telephone: '',
        age: '',
        email: '',
        country: '',
        roles: [
            {
                id: null,
                name: ''
            }
        ],
        user_followers: [],
        user_following: [],
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
        logout: (state) => {
            state = initialValue
        }
    },
    extraReducers: {
        [checkConnect.pending]: (state, action) => {
            state.isLoading = true;
        },
        [checkConnect.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isconnect = true;
            state.profile = action.payload.data.user;
        },
        [checkConnect.rejected]: (state, action) => {
            state.isLoading = false;
            state.isconnect = false;
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
            state.isLoading = false;
            state.isconnect = false;
            state.error = true;
            state.errorMessage = action.payload.message;
            state.errors = action.payload.errors;
        },

        [updateProfileImage.pending]: (state, action) => { },
        [updateProfileImage.fulfilled]: (state, action) => {
            state.profile.url_image = action.payload.data.user.url_image;
        },
        [updateProfileImage.rejected]: (state, action) => { },

        [updateInfoUser.pending]: (state, action) => { },
        [updateInfoUser.fulfilled]: (state, action) => {
            state.profile = action.payload.data.user;
        },
        [updateInfoUser.rejected]: (state, action) => { },


        [updateMotDePasse.pending]: (state, action) => { },
        [updateMotDePasse.fulfilled]: (state, action) => {
            state.profile = action.payload.data.user;
        },
        [updateMotDePasse.rejected]: (state, action) => { }
    }
})

export const { logout } = userSlice.actions

export default userSlice.reducer
