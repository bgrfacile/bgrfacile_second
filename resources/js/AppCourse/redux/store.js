import { configureStore } from '@reduxjs/toolkit'
import coursSlice from './features/cours/coursSlice'
import userSlice from './features/user/userSlice'
import toggleAsideSlice from './features/toggleAside/toggleAsideSlice'
import cyclesSlice from './features/cycle/cyclesSlice'

export const store = configureStore({
    reducer: {
        cours: coursSlice,
        cycles: cyclesSlice,
        user: userSlice,
        toggleAside: toggleAsideSlice,
    },
})
