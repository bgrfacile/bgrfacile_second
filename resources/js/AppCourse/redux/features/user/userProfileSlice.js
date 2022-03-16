import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";

export const getInfoUser = createAsyncThunk(
    "user/getInfoUser",
    async (user_id) => {
        const res = await client.get(`/users/${user_id}`);
        return { user: res.data };
    }
);

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        profile: {
            user_id: null,
            user_name: '',
            firstName: '',
            lastName: '',
            birthday: '',
            telephone: '',
            age: '',
            gender: '',
            email: '',
            url_image: '',
        },
        isLoading: false,
        cours: [],
        errors: null,
    },
    reducers: {
    },
    extraReducers: {
        [getInfoUser.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getInfoUser.fulfilled]: (state, action) => {
            state.profile = action.payload.user.profile;
            state.cours = action.payload.user.cours;
            console.log('action', action);
            state.isLoading = false;
        },
        [getInfoUser.rejected]: (state, action) => {
            state.errors = action.errors.message;
            state.isLoading = false;
        },
    },
});

// export const {  } = cyclesSlices.actions;
export default userProfileSlice.reducer;
