import React from "react";
import base from "../../api/base";

// const loginAsync = createAsyncThunk(
//     "auth/login",
//     async (data) => {
//         const res = await base.post("/auth/login", data)
//         return {
//             user: res.data.user,
//             token: res.data.token
//         }
//     }
// );

const login = (data) => {
    return base.post('/signin', data)
};
