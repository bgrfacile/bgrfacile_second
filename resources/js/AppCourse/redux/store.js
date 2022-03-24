import { configureStore } from '@reduxjs/toolkit'
import coursSlice from './features/cours/coursSlice'
import userSlice from './features/user/userSlice'
import toggleAsideSlice from './features/toggleAside/toggleAsideSlice'
import cyclesSlice from './features/cycle/cyclesSlice'
import userProfileSlice from './features/user/userProfileSlice'
import levelsSlice from './features/level/levelsSlice'
import matieresSlice from './features/matiere/matieresSlice'
import ExerciceSlice from './features/Exercices/ExerciceSlice'
import BasicCycleSlice from './features/cycle/BasicCycleSlice'
import solutionSlice from './features/solutions/solutionSlice'

export const store = configureStore({
    reducer: {
        cours: coursSlice,
        exercises: ExerciceSlice,
        solutions: solutionSlice,
        cycles: cyclesSlice,
        basicCycle: BasicCycleSlice,
        levels: levelsSlice,
        matieres: matieresSlice,
        user: userSlice,
        userProfile: userProfileSlice,
        toggleAside: toggleAsideSlice,
    },
})
