import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import client from "../../../../api/client";
import { getExerciceById } from "./functions";

export const getMyExercice = createAsyncThunk(
    'exercices/getMyExercice',
    async () => {
        const res = await client.get("/my-exercices");
        return { exercices: res.data };
    });

export const getLastExercice = createAsyncThunk(
    'exercices/getLastExercice',
    async () => {
        const res = await client.get("/exercices");
        return { exercices: res.data };
    });

export const getExosByCycle = createAsyncThunk(
    'exercices/getExosByCycle',
    async ({ idCycle }) => {
        const res = await client.get(`/exercices/getExos/${idCycle}`);
        return { exercices: res.data };
    });
export const getExosByLevel = createAsyncThunk(
    'exercices/getExosByLevel',
    async ({ idCycle, idLevel }) => {
        console.log('idCycle', idCycle);
        console.log('idLevel', idLevel);
        const res = await client.get(`/exercices/getExos/${idCycle}/${idLevel}`);
        return { exercices: res.data };
    });
export const getExosByMatiere = createAsyncThunk(
    'exercices/getExosByMatiere',
    async ({ idCycle, idLevel, idMatiere }) => {
        const res = await client.get(`/exercices/getExos/${idCycle}/${idLevel}/${idMatiere}`);
        return { exercices: res.data };
    });

const ExerciceSlice = createSlice({
    name: "exercices",
    initialState: {
        exercices: [],
        exerciceShow: {},
        exercicesUse: [],
        myExercicesCreate: [],
        isLoading: false,
        isLoadingShow: true,
        error: null,
        levelSelected: "valeur par défaut",
        matiereSelected: "valeur par défaut",
    },
    reducers: {
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
            state.exercices = action.payload.exercices;
            state.exercicesUse = action.payload.exercices;
        },
        [getLastExercice.rejected]: (state, action) => {
            state.error = action.error.message;
        },

        [getExosByCycle.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getExosByCycle.fulfilled]: (state, action) => {
            state.exercices = action.payload.exercices;
            state.exercicesUse = action.payload.exercices;
        },
        [getExosByCycle.rejected]: (state, action) => {
            state.error = action.error.message;
        },

        [getExosByLevel.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getExosByLevel.fulfilled]: (state, action) => {
            state.exercices = action.payload.exercices;
            state.exercicesUse = action.payload.exercices;
        },
        [getExosByLevel.rejected]: (state, action) => {
            state.error = action.error.message;
        },

        [getExosByMatiere.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getExosByMatiere.fulfilled]: (state, action) => {
            state.exercices = action.payload.exercices;
            state.exercicesUse = action.payload.exercices;
        },
        [getExosByMatiere.rejected]: (state, action) => {
            state.error = action.error.message;
        },

        [getMyExercice.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getMyExercice.fulfilled]: (state, action) => {
            state.myExercicesCreate = action.payload.exercices;
        },
        [getMyExercice.rejected]: (state, action) => {
            state.error = action.error.message;
        },

        [getExerciceById.pending]: (state, action) => {
            state.isLoadingShow = true;
        },
        [getExerciceById.fulfilled]: (state, action) => {
            // state.exerciceShow = action.payload.data;
            state.isLoadingShow = false;
            state.exercices = [
                ...state.exercices,
                action.payload.data
            ];

        },
        [getExerciceById.rejected]: (state, action) => {
            state.isLoadingShow = false;
            state.error = action.error.message;
        },
    },
});
export const {
    setExerciceShow,
    setLevelSelected,
    setMatiereSelected,
    showIsHandout,
    hiddenIsHandout,
} = ExerciceSlice.actions;

export default ExerciceSlice.reducer;
