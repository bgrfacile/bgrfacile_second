import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import client from "../../../../api/client";

const user = localStorage.getItem('user');
export const getCoursAsync = createAsyncThunk(
    'cours/getCours',
    async () => {
        const res = await client.get("/cours");
        return { cours: res.data };
    });

export const getMyCoursAsync = createAsyncThunk(
    'cours/getMyCours',
    async () => {
        let userId = JSON.parse(user).user_id;
        const res = await client.get(`/cours/user/${userId}`);
        return { cours: res.data };
    });

const coursSlices = createSlice({
    name: "cours",
    initialState: [],
    reducers: {
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
        [getCoursAsync.fulfilled]: (state, action) => {
            state = action.payload.cours;
            return state;
        },
        [getMyCoursAsync.fulfilled]: (state, action) => {
            state = action.payload.cours;
            return state;
        },
        [getCoursAsync.pending]: (state, action) => {
            console.log('pending ...');
        },
        [getCoursAsync.fulfilled]: (state, action) => {
            return action.payload.cours;
        },
        [getMyCoursAsync.pending]: (state, action) => {
            console.log('pending ...');
        },
        [getMyCoursAsync.fulfilled]: (state, action) => {
            return action.payload.cours;
        }

    },
});

export const { allCours, changeVisibilitie, addCours, deleteCours, updateCours, myCours, myCoursOnligne } = coursSlices.actions;

export default coursSlices.reducer;

