import { createSlice } from "@reduxjs/toolkit";
import {
    getInfoUser,
    unfollowUser
} from './functions';

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        profile: {
            user_id: null,
            pseudo: '',
            firstName: '',
            lastName: '',
            telephone: '',
            bio: '',
            gender: '',
            email: '',
            country: '',
            url_image: '',
            birthday: '',
            createdAt: '',
        },
        is_following: false,
        is_followers: false,
        cours: [],
        exercices: [],
        isLoading: false,
        errors: null,
    },
    reducers: {},
    extraReducers: {
        [getInfoUser.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getInfoUser.fulfilled]: (state, action) => {
            state.profile = action.payload.profile;
            state.cours = action.payload.cours;
            state.is_following = action.payload.is_following;
            state.isLoading = false;
        },
        [getInfoUser.rejected]: (state, action) => {
            state.errors = action.errors.message;
            state.isLoading = false;
        },
    },
});

export const { } = userProfileSlice.actions;
export default userProfileSlice.reducer;
