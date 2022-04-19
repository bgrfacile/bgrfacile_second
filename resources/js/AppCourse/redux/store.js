import { configureStore } from '@reduxjs/toolkit'
import coursSlice from './features/cours/coursSlice'
import userSlice from './features/user/userSlice'
import cyclesSlice from './features/cycle/cyclesSlice'
import userProfileSlice from './features/user/userProfileSlice'
import levelsSlice from './features/level/levelsSlice'
import matieresSlice from './features/matiere/matieresSlice'
import ExerciceSlice from './features/Exercices/ExerciceSlice'
import BasicCycleSlice from './features/cycle/BasicCycleSlice'
import solutionSlice from './features/solutions/solutionSlice'
import searchSlice from './features/search/searchSlice'
import favorisSlice from './features/favoris/favorisSlice'
import myCoursSlice from './features/myCours/myCoursSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        cours: coursSlice,
        mycours: myCoursSlice,
        favoris: favorisSlice,
        search: searchSlice,
        exercices: ExerciceSlice,
        solutions: solutionSlice,
        cycles: cyclesSlice,
        basicCycle: BasicCycleSlice,
        levels: levelsSlice,
        matieres: matieresSlice,
        userProfile: userProfileSlice,
    },
})
