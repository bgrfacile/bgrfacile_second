import { createSlice } from "@reduxjs/toolkit";
import { createExercice } from './functions';

const initialState = {
    data: {
        title: '',
        description: '',
        content: null,
        isSubjectExam: false,
        coverImage: '',
        typeContent: '',
        isActif: null,
        cycle_id: '',
        level_id: '',
        matiere_id: '',
        cours_id: null,
    },
    isLoading: false,
    isError: false,
    errorMessage: "",
    isSuccess: false,
    successMessage: "",
};
const createExerciceSlice = createSlice({
    name: "createExercice",
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
        setExerciceCreate: (state, action) => {
            state.data = action.payload;
        },
        getCourId: (state, action) => {
            state.data.cours_id = action.payload;
        },
        getTitle: (state, action) => {
            state.data.title = action.payload;
        },
        getIsSubjectExam: (state, action) => {
            state.data.isSubjectExam = action.payload;
        },
        getCycle: (state, action) => {
            state.data.cycle_id = action.payload.id;
        },
        getLevel: (state, action) => {
            state.data.level_id = action.payload.id;
        },
        getMatiere: (state, action) => {
            state.data.matiere_id = action.payload.id;
        },
        getIsActif: (state, action) => {
            state.data.isActif = action.payload;
        },
        getDescription: (state, action) => {
            state.data.description = action.payload;
        },
        getCoverImage: (state, action) => {
            state.data.coverImage = action.payload.file;
        },
        getTypeContent: (state, action) => {
            state.data.typeContent = action.payload;
        },
        getContent: (state, action) => {
            state.data.content = action.payload;
        }
    },
    extraReducers: {
        [createExercice.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = "";
            state.isSuccess = false;
            state.successMessage = "";
        },
        [createExercice.fulfilled]: (state, action) => {
            state.data = initialState.data;
            state.isLoading = false;
            state.isError = false;
            state.errorMessage = "";
            state.isSuccess = true;
            state.successMessage = "";
        },
        [createExercice.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload;
            state.isSuccess = false;
            state.successMessage = "";
        },
    },
});

export const {
    setExerciceCreate,
    setInitState,
    getCourId,
    getTitle,
    getIsSubjectExam,
    getCycle,
    getLevel,
    getMatiere,
    getIsActif,
    getDescription,
    getTypeContent,
    getContent,
    getCoverImage,
} = createExerciceSlice.actions;
export default createExerciceSlice.reducer;
