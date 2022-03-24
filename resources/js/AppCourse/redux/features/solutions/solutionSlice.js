import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import client from "../../../../api/client"


export const getLastSolution = createAsyncThunk(
    'solutions/getLastSolution',
    async (payload, thunkAPI) => {
        const res = await client.get('/solutions')
        return { solutions: res.data }
    }
)
export const getMySolution = createAsyncThunk(
    'solutions/getMySolution',
    async (payload, thunkAPI) => {
        const res = await client.get('/my-solutions')
        return { solutions: res.data }
    }
)

const SolutionSlice = createSlice({
    name: "solutions",
    initialState: {
        solutions: [],
        mySolutions: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setSolution: (state, action) => {
            state.solutions = action.payload.solutions
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload.isLoading
        },
        setError: (state, action) => {
            state.error = action.payload.error
        },
    },
    extraReducers: {
        [getLastSolution.pending]: (state, action) => {
            state.isLoading = true
        },
        [getLastSolution.fulfilled]: (state, action) => {
            state.solutions = action.payload.solutions
        },
        [getLastSolution.rejected]: (state, action) => {
            state.error = action.error.message
        },

        [getMySolution.pending]: (state, action) => {
            state.isLoading = true
        },
        [getMySolution.fulfilled]: (state, action) => {
            state.mySolutions = action.payload.solutions
        },
        [getMySolution.rejected]: (state, action) => {
            state.error = action.error.message
        },
    },
})

export default SolutionSlice.reducer;
