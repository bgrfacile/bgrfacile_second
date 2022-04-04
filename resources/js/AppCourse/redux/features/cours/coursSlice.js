import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../api/client";
import { addLike, removeLike, showCours, addRatingCourse } from "./functions";

export const getLastCours = createAsyncThunk(
    'cours/getLastCours',
    async () => {
        const res = await client.get("/cours");
        return { cours: res.data };
    });
export const getCoursByCycle = createAsyncThunk(
    'cours/getCoursByCycle',
    async ({ idCycle }) => {
        const res = await client.get(`/cours/getCours/${idCycle}`);
        return { cours: res.data };
    });
export const getCoursByLevel = createAsyncThunk(
    'cours/getCoursByLevel',
    async ({ idCycle, idLevel }) => {
        const res = await client.get(`/cours/getCours/${idCycle}/${idLevel}`);
        return { cours: res.data };
    });
export const getCoursByMatiere = createAsyncThunk(
    'cours/getCoursByLevel',
    async ({ idCycle, idLevel, idMatiere }) => {
        const res = await client.get(`/cours/getCours/${idCycle}/${idLevel}/${idMatiere}`);
        return { cours: res.data };
    });

export const getMyCours = createAsyncThunk(
    'cours/getMyCours',
    async () => {
        let userId = JSON.parse(user).user_id;
        const res = await client.get(`/cours/user/${userId}`);
        return { cours: res.data };
    });

const coursSlices = createSlice({
    name: "cours",
    initialState: {
        cours: [],
        isLoading: false,
        isLoadingShow: true,
        isLoadingAddRating: false,
        error: null,
    },
    reducers: {
        incrementLike: (state, action) => {
            const { id } = action.payload;
            const cours = state.cours.map((cours) => {
                if (cours.id === id) {
                    cours.likes++;
                    cours.isLike = true;
                }
                return cours;
            });
            state.cours = cours;
        },
        decrementLike: (state, action) => {
            const { id } = action.payload;
            const cours = state.cours.map((cours) => {
                if (cours.id === id) {
                    cours.likes--;
                    cours.isLike = false;
                }
                return cours;
            });
            state.cours = cours;
        },
        allCours: (state, action) => {
            state = action.payload.cours;
            console.log("state", state);
            return state;
        },
        addCours: (state, action) => {
            return [...state, action.payload];
        },
        deleteCours: (state, action) => {
            return state.filter(cours => cours.id !== action.payload);
        },
        updateCours: (state, action) => {
            return state.map(cours => {
                if (cours.id === action.payload.id) {
                    return action.payload;
                }
                return cours;
            });
        },
        myCours: (state, action) => {
            return state.filter(cours => cours.user.id === action.payload);
        },
        myCoursOnligne: (state, action) => {
            return state.filter(cours => cours.user.id === action.payload);
        },
        myCoursOffLigne: (state, action) => {
            return state.filter(cours => cours.user.id === action.payload);
        },
        changeVisibilitie: (state, action) => {
            console.log('action', action.payload);
            console.log('state', state.cours);
            // const newState = state.find((cour) => {
            //     if (cour.id === action.payload.id) {
            //         cour.isActif = action.payload.isActif;
            //     }
            // });


            // return state.find(cours => cours.id === action.payload.id).isActif = action.payload.isActif;
        }
    },
    extraReducers: {
        [getLastCours.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCoursByCycle.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCoursByLevel.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCoursByMatiere.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCoursByLevel.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cours = [];
            state.cours = action.payload.cours;
        },
        [getCoursByMatiere.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cours = [];
            state.cours = action.payload.cours;
        },
        [getLastCours.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cours = [];
            state.cours = action.payload.cours;
        },
        [getCoursByCycle.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cours = [];
            state.cours = action.payload.cours;
        },
        [getLastCours.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [getMyCours.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getMyCours.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cours = action.payload.cours;
        },
        [getMyCours.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [getCoursByCycle.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [addLike.pending]: (state, action) => { },
        [addLike.fulfilled]: (state, action) => { },
        [addLike.rejected]: (state, action) => { },
        [removeLike.rejected]: (state, action) => { },


        [showCours.pending]: (state, action) => {
            state.isLoadingShow = true;
        },
        [showCours.fulfilled]: (state, action) => {
            state.isLoadingShow = false;
            state.cours = [
                ...state.cours,
                action.payload.data
            ];
        },
        [showCours.rejected]: (state, action) => {
            state.error = action.error.message;
        },
        [addRatingCourse.pending]: (state, action) => {
            state.isLoadingAddRating = true;
        },
        [addRatingCourse.fulfilled]: (state, action) => {
            state.isLoadingAddRating = false;
            const cours = state.cours.map((cours) => {
                if (cours.id === action.payload.data.cours_id) {
                    cours.rating = action.payload.data.rating;
                }
                return cours;
            });
            state.cours = cours;
        },
        [addRatingCourse.rejected]: (state, action) => {
            state.isLoadingAddRating = false;
        }
    },
});

export const {
    incrementLike,
    decrementLike,
    allCours,
    changeVisibilitie,
    addCours,
    deleteCours,
    updateCours,
    myCours,
    myCoursOnligne
} = coursSlices.actions;

export default coursSlices.reducer;

