import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    data: {
        userId: null,
        cv: {},
        diplomes: [],
        ecolesRef: [],
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
        setProfileProfCreate: (state, action) => {
            state.data = action.payload;
        },
        getUserId: (state, action) => {
            state.data.userId = action.payload;
        },
        getCv: (state, action) => {
            state.data.cv = action.payload;
        },
        getDiplomes: (state, action) => {
            state.data.diplomes = action.payload;
        },
        getEcolesRef: (state, action) => {
            state.data.ecolesRef = action.payload;
        }
    },
    extraReducers: {
        [createAsyncThunk("createProfileProf/createProfileProf", (data) => {
            return client.post("/api/profileProf/create", data);
        }).fulfilled]: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.errorMessage = "";
            state.isSuccess = true;
            state.successMessage = "";
        },
        [createAsyncThunk("createProfileProf/createProfileProf", (data) => {
            return client.post("/api/profileProf/create", data);
        }).rejected]: (state, action) => {
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
    setProfileProfCreate,
    getUserId,
    getCv,
    getDiplomes,
    getEcolesRef,
} = createProfileProfSlice.actions;


