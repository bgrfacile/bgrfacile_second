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
import createCoursSlice from './features/createCour/createCoursSlice'
import myExerciceSlice from './features/myExercices/myExerciceSlice';
import mySolutionsSlice from './features/mySolution/mySolutionsSlice'
import createExerciceSlice from './features/createExercice/createExerciceSlice'
import createProfileProfSlice from './features/createProfileProf/createProfileProfSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        cours: coursSlice,
        mycours: myCoursSlice,
        createCours: createCoursSlice,
        exercices: ExerciceSlice,
        myExercices: myExerciceSlice,
        favoris: favorisSlice,
        createExercice: createExerciceSlice,
        search: searchSlice,
        solutions: solutionSlice,
        mySolution: mySolutionsSlice,
        cycles: cyclesSlice,
        basicCycle: BasicCycleSlice,
        levels: levelsSlice,
        matieres: matieresSlice,
        userProfile: userProfileSlice,
        createProfileProf: createProfileProfSlice,
    },
    devTools: true,
    // devTools: process.env.NODE_ENV !== 'production',
})
