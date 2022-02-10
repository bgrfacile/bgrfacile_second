import { createSlice } from '@reduxjs/toolkit'

// const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
// const initialValue = {
//     user_id: user ? user.user_id : null,
//     user_name: user ? user.user_name : '',
//     firstName: user ? user.firstName : '',
//     lastName: user ? user.firstName : '',
//     birthday: user ? user.birthday : '',
//     telephone: user ? user.telephone : '',
//     age: user ? user.age : '',
//     gender: user ? user.gender : '',
//     email: user ? user.email : '',
//     country: user ? user.country : '',
//     url_image: user ? user.url_image : 'https://picsum.photos/seed/picsum/200',
//     roles: user ? user.roles : [],
// };
const initialValue = {
    user_id: null,
    user_name: '',
    firstName: '',
    lastName: '',
    birthday: '',
    telephone: '',
    age: '',
    gender: '',
    email: '',
    country: '',
    url_image: '',
    roles: [],
};


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: initialValue,
        isLoading: false,
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
            state.isLoading = false;
            state.profile = initialValue
        }
    },
})

export const { updateProfileImage, logout, login } = userSlice.actions

export default userSlice.reducer
