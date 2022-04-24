import { createSlice } from "@reduxjs/toolkit";
import { createCours, updateCours } from './functions';
const initialState = {
    data: {
        courId: null,
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
        setInitState: (state) => {
            state.data = initialState.data;
            state.isLoading = initialState.isLoading;
            state.isError = initialState.isError;
            state.errorMessage = initialState.errorMessage;
            state.isSuccess = initialState.isSuccess;
            state.successMessage = initialState.successMessage;
        },
        setCourCreate: (state, action) => {
            state.data = action.payload;
        },
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
            state.errorMessage = action.payload.data.message;
        },
        [updateCours.pending]: (state, action) => {
            state.isLoading = true;
        },
        [updateCours.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.successMessage = action.payload.data.message;
            state.data = initialState.data;
        },
        [updateCours.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload.data.message;
        }
    }
});

export const {
    setInitState,
    setCourCreate,
    getTitle,
    getIsActif,
    getDescription,
    getCoverImage,
    getTypeContent,
    getContent,
    getCycle,
    getLevel,
    getMatiere,
    setContent,
} = createCoursSlice.actions;
export default createCoursSlice.reducer;
