import { configureStore } from '@reduxjs/toolkit'
import coursSlice from './features/cours/coursSlice'
import userSlice from './features/user/userSlice'
import counterSlice from './features/counter/counterSlice'
import toggleAsideSlice from './features/toggleAside/toggleAsideSlice'

export const store = configureStore({
    reducer: {
        cours: coursSlice,
        user: userSlice,
        counter: counterSlice,
        toggleAside: toggleAsideSlice,
    },
})
