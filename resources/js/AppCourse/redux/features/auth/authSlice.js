import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: {},
    token: "",
    error: "",
    loading: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        },
        logout: (state, action) => {
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                token: "",
            };
        },
    },
    extraReducers: {
        [loginAsync.pending]: (state, action) => {
            console.log("pending ...");
        },
        [loginAsync.fulfilled]: (state, action) => {
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        },
        [loginAsync.rejected]: (state, action) => {
            return {
                ...state,
                error: action.error.message,
            };
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
