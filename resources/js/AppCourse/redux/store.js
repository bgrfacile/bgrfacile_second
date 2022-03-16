import { configureStore } from '@reduxjs/toolkit'
import coursSlice from './features/cours/coursSlice'
import userSlice from './features/user/userSlice'
import toggleAsideSlice from './features/toggleAside/toggleAsideSlice'
import cyclesSlice from './features/cycle/cyclesSlice'
import userProfileSlice from './features/user/userProfileSlice'

export const store = configureStore({
    reducer: {
        cours: coursSlice,
        cycles: cyclesSlice,
        user: userSlice,
        userProfile: userProfileSlice,
        toggleAside: toggleAsideSlice,
    },
})
