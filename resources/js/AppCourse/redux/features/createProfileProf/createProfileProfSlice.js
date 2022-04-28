import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { postInfosUser } from "./functions";


const initialState = {
    data: {
        userId: null,
        cv: '',
        diplomes: [
            {
                id: uuidv4(),
                title: '',
            }
        ],
        ecolesRef: [
            {
                id: uuidv4(),
                title: '',
            }
        ],
    },
    isLoading: false,
    isError: false,
    errorMessage: "",
    isSuccess: false,
    successMessage: "",
};
const createProfileProfSlice = createSlice({
    name: "createProfileProf",
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
        handleChangeCv: (state, action) => {
            console.log('handleChangeCv',action.payload);
            state.data.cv = action.payload.file;
        },
        addDiplomes: (state, action) => {
            state.data.diplomes = [{
                id: uuidv4(),
                title: '',
            }, ...state.data.diplomes];
        },
        handleChangeTitleDiplome: (state, action) => {
            state.data.diplomes.find(el => el.id === action.payload.diplomeId).title = action.payload.value;
        },
        removeDiplome: (state, action) => {
            state.data.diplomes = state.data.diplomes.filter(el => el.id !== action.payload.diplomeId);
        },
        addEcolesRef: (state, action) => {
            state.data.ecolesRef = [{
                id: uuidv4(),
                title: '',
            }, ...state.data.ecolesRef];
        },
        handleChangeTitleEcoleRef: (state, action) => {
            state.data.ecolesRef.find(el => el.id === action.payload.ecoleRefId).title = action.payload.value;
        },
        removeEcoleRef: (state, action) => {
            state.data.ecolesRef = state.data.ecolesRef.filter(el => el.id !== action.payload.ecoleRefId);
        }
    },
    extraReducers: {
        // [createAsyncThunk("createProfileProf/createProfileProf", (data) => {
        //     return client.post("/api/profileProf/create", data);
        // }).fulfilled]: (state, action) => {
        //     state.data = action.payload;
        //     state.isLoading = false;
        //     state.isError = false;
        //     state.errorMessage = "";
        //     state.isSuccess = true;
        //     state.successMessage = "";
        // },
        // [createAsyncThunk("createProfileProf/createProfileProf", (data) => {
        //     return client.post("/api/profileProf/create", data);
        // }).rejected]: (state, action) => {
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.errorMessage = action.payload.message;
        //     state.isSuccess = false;
        //     state.successMessage = "";
        // }
        [postInfosUser.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = "";
            state.isSuccess = false;
            state.successMessage = "";
        },
        [postInfosUser.fulfilled]: (state, action) => {
            // state.data = action.payload;
            // state.isLoading = false;
            // state.isError = false;
            // state.errorMessage = "";
            // state.isSuccess = true;
            // state.successMessage = "";
        },
        [postInfosUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload.message;
            state.isSuccess = false;
            state.successMessage = "";
        }
    }
});
export default createProfileProfSlice.reducer;
export const {
    setInitState,
    handleChangeCv,
    addDiplomes,
    removeDiplome,
    handleChangeTitleDiplome,
    addEcolesRef,
    removeEcoleRef,
    handleChangeTitleEcoleRef,
} = createProfileProfSlice.actions;


