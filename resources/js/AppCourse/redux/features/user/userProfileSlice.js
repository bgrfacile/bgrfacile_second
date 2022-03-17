import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";

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
        is_following: false,
        errors: null,
    },
    reducers: {
    },
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

// export const {  } = cyclesSlices.actions;
export default userProfileSlice.reducer;
