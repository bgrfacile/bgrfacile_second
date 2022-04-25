import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import client from "../../../../api/client";
import {
    getExerciceById,
    addRatingExercice,
    getLastExercice,
    getExosByCycle,
    getExosByLevel,
    getExosByMatiere,
} from "./functions";


const initialState = {
    exercices: [],
    exerciceShow: {},
    exercicesUse: [],
    isLoading: false,
    isLoadingShow: true,
    isLoadingAddRating: false,
    error: null,
    levelSelected: "valeur par défaut",
    matiereSelected: "valeur par défaut",
}
const ExerciceSlice = createSlice({
    name: "exercices",
    initialState,
    reducers: {
        handleChargeIsSubject: (state, action) => {
            const exos = state.exercices.filter(
                (exo) => {
                    if (action.payload.isChecked) {
                        return exo.is_SubjectExam === true
                    }
                    else {
                        return true //exo.is_SubjectExam === false
                    }
                }
            )
            state.exercicesUse = exos;
        },
        incrementLike: (state, action) => {
            const { id } = action.payload;
            const exercices = state.exercices.map((exercice) => {
                if (exercice.id === id) {
                    exercice.likes++;
                    exercice.isLike = true;
                }
                return exercice;
            });
            state.exercices = exercices;
        },
        decrementLike: (state, action) => {
            const { id } = action.payload;
            const exercices = state.exercices.map((exercice) => {
                if (exercice.id === id) {
                    exercice.likes--;
                    exercice.isLike = false;
                }
                return exercice;
            });
            state.exercices = exercices;
        },
        setExerciceShow: (state, action) => {
            state.exerciceShow = state.exercices.find(exercice => exercice.id === action.payload.id);
        },
        setLevelSelected: (state, action) => {
            state.levelSelected = action.payload.name;
            // state.exercices = state.exercices.filter(exercice => exercice.level.id === action.payload.id);

        },
        setMatiereSelected: (state, action) => {
            state.matiereSelected = action.payload.name;
        },
        showIsHandout: (state, action) => {
            state.exercicesUse = state.exercices.filter(exercice => exercice.isHandout);
        },
        hiddenIsHandout: (state, action) => {
            state.exercicesUse = state.exercices;
        }
    },
    extraReducers: {
        [getLastExercice.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getLastExercice.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.exercices = action.payload.data;
            state.exercicesUse = action.payload.data;
        },
        [getLastExercice.rejected]: (state, action) => {
            state.error = action.payload.data.message;
        },

        [getExosByCycle.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getExosByCycle.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.exercices = action.payload.data;
            state.exercicesUse = action.payload.data;
        },
        [getExosByCycle.rejected]: (state, action) => {
            console.log('rejected cycle', action.payload);
            state.error = action.payload.data.message;
        },

        [getExosByLevel.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getExosByLevel.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.exercices = action.payload.data;
            state.exercicesUse = action.payload.data;
        },
        [getExosByLevel.rejected]: (state, action) => {
            console.log('rejected byLevel', action.payload);
            state.error = action.payload.data.message;
        },

        [getExosByMatiere.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getExosByMatiere.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.exercices = action.payload.data;
            state.exercicesUse = action.payload.data;
        },
        [getExosByMatiere.rejected]: (state, action) => {
            console.log('rejected matiere', action.payload);
            state.error = action.payload.data.message;
        },

        [getExerciceById.pending]: (state, action) => {
            state.isLoadingShow = true;
        },
        [getExerciceById.fulfilled]: (state, action) => {
            state.isLoadingShow = false;
            state.exercices = [
                ...state.exercices,
                action.payload.data
            ];

        },
        [getExerciceById.rejected]: (state, action) => {
            state.isLoadingShow = false;
            state.error = action.payload.data.message;
        },
        [addRatingExercice.pending]: (state, action) => {
            state.isLoadingAddRating = true;
        },
        [addRatingExercice.fulfilled]: (state, action) => {
            state.isLoadingAddRating = false;
            const exercices = state.exercices.map((exercice) => {
                if (exercice.id === action.payload.data.ratingable_id) {
                    exercice.rating = action.payload.data.rating;
                }
                return exercice;
            });
            state.exercices = exercices;
        },
        [addRatingExercice.rejected]: (state, action) => {
            state.isLoadingAddRating = false;
        },
    },
});
export const {
    decrementLike,
    incrementLike,
    setExerciceShow,
    setLevelSelected,
    setMatiereSelected,
    showIsHandout,
    hiddenIsHandout,
    handleChargeIsSubject,
} = ExerciceSlice.actions;

export default ExerciceSlice.reducer;
