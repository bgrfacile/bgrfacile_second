import { configureStore } from '@reduxjs/toolkit'
import coursSlice from './features/cours/coursSlice'
import userSlice from './features/user/userSlice'
import toggleAsideSlice from './features/toggleAside/toggleAsideSlice'

export const store = configureStore({
    reducer: {
        cours: coursSlice,
        user: userSlice,
        toggleAside: toggleAsideSlice,
    },
})
