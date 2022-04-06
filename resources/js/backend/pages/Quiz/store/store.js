import { configureStore } from '@reduxjs/toolkit'
import quizSlices from './quizSlices'

export const store = configureStore({
    reducer: {
        quiz: quizSlices
    }
})

