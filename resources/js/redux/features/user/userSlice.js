import { createSlice } from '@reduxjs/toolkit'

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
console.log("user in redux", user);

const initialValue = {
    user_id: user ? user.id : null,
    firstName: user ? user.name : '',
    lastName: '',
    telephone: '',
    age: 28,
    email: user ? user.email : '',
    country: '',
    address: 'Home',
    profileImage: user ? user.profileImage : 'https://picsum.photos/seed/picsum/200',
    subscribenewsletter: false,
    roles: [
        {
            id: 1,
            name: 'etudiant',
        }
    ],
};


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: initialValue,
    },
    reducers: {
        // login: (state, action) => {
        //     state.profile = action.payload
        // },
        // logout: (state, action) => {
        //     state.profile = action.payload
        // },
        updateProfileImage: (state, action) => {
            state.profile.profileImage = action.payload
        },
        logout: (state) => {
            state.profile = initialValue
        }
    },
})

export const { updateProfileImage, logout } = userSlice.actions

export default userSlice.reducer
