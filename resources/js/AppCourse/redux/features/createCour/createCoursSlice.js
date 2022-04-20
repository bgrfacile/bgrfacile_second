import { createSlice } from "@reduxjs/toolkit";
import { createCours } from './functions';
const initialState = {
    data: {
        title: '',
        cycle_id: '',
        level_id: '',
        matiere_id: '',
        isActif: null,
        description: '',
        image: '',
        typeContent: '',
        content: null,
    },
    isLoading: false,
    isError: false,
    errorMessage: "",
    isSuccess: false,
    successMessage: "",
};
const createCoursSlice = createSlice({
    name: "createCours",
    initialState,
    reducers: {
        getTitle: (state, action) => {
            state.data.title = action.payload;
        },
        getIsActif: (state, action) => {
            state.data.isActif = action.payload;
        },
        getDescription: (state, action) => {
            state.data.description = action.payload;
        },
        getCoverImage: (state, action) => {
            state.data.image = action.payload.file;
        },
        getTypeContent: (state, action) => {
            state.data.typeContent = action.payload;
        },
        setTypeContent: (state, action) => {
            state.data.typeContent = action.payload;
        },
        getContent: (state, action) => {
            state.data.content = action.payload;
        },
        setContent: (state, action) => {
            state.data.content = action.payload;
        },
        getCycle: (state, action) => {
            state.data.cycle_id = action.payload.id;
        },
        getLevel: (state, action) => {
            state.data.level_id = action.payload.id;
        },
        getMatiere: (state, action) => {
            state.data.matiere_id = action.payload.id;
        }
    },
    extraReducers: {
        [createCours.pending]: (state, action) => {
            state.isLoading = true;
        },
        [createCours.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.successMessage = action.payload.message;
            state.data = initialState.data;
        },
        [createCours.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload.message;
        }
    }
});

export const {
    getTitle,
    getIsActif,
    getDescription,
    getCoverImage,
    getTypeContent,
    setTypeContent,
    getContent,
    getCycle,
    getLevel,
    getMatiere,
    setContent,
} = createCoursSlice.actions;
export default createCoursSlice.reducer;
