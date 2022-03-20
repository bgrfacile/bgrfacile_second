import { configureStore } from '@reduxjs/toolkit'
import coursSlice from './features/cours/coursSlice'
import userSlice from './features/user/userSlice'
import toggleAsideSlice from './features/toggleAside/toggleAsideSlice'
import cyclesSlice from './features/cycle/cyclesSlice'
import userProfileSlice from './features/user/userProfileSlice'
import levelsSlice from './features/level/levelsSlice'
import matieresSlice from './features/matiere/matieresSlice'
import ExerciceSlice from './features/Exercices/ExerciceSlice'

export const store = configureStore({
    reducer: {
        cours: coursSlice,
        exercise: ExerciceSlice,
        cycles: cyclesSlice,
        levels: levelsSlice,
        matieres:matieresSlice,
        user: userSlice,
        userProfile: userProfileSlice,
        toggleAside: toggleAsideSlice,
    },
})
