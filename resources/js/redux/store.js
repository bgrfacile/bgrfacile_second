import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import coursSlice from './features/cours/coursSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        cours: coursSlice,
    },
})
