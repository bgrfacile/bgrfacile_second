// import { v4 as uuidv4 } from 'uuid';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const quizSlices = createSlice({
    name: "qui",
    initialState: {
        title: '',
        questions: []
    },
    reducers: {
        changeTitleQuiz: (state, action) => {
            state.title = action.payload
        },
        addQuestion: (state, action) => {
            state.questions = [{
                id: uuidv4(),
                title: '',
                responses: []
            },
            ...state.questions]

        },
        changeTitleQuizItem: (state, action) => {
            state.questions.find(el => el.id === action.payload.questionId).title = action.payload.value
        },
        removeQuestion: (state, action) => {
            state.questions = state.questions.filter(el => el.id !== action.payload.questionId)
        },
        addResponse: (state, action) => {
            state.questions.find(el => el.id === action.payload.questionId).responses = [
                {
                    id: uuidv4(),
                    title: '',
                    isCorrect: false
                },
                ...state.questions.find(el => el.id === action.payload.questionId).responses
            ]
        },
        changeTitleQuestionItem: (state, action) => {
            state.questions
                .find(el => el.id === action.payload.questionId)
                .responses
                .find(el => el.id === action.payload.responseId)
                .title = action.payload.value
        },
        removeResponse: (state, action) => {
            state.questions
                .find(el => el.id === action.payload.questionId)
                .responses = state.questions
                    .find(el => el.id === action.payload.questionId)
                    .responses
                    .filter(el => el.id !== action.payload.responseId)
        },
        changeCheckResponse: (state, action) => {
            state.questions
                .find(el => el.id === action.payload.questionId)
                .responses
                .find(el => el.id === action.payload.responseId)
                .isCorrect = action.payload.value
        },
    },

    extraReducers: {

    },
})
export const {
    changeCheckResponse,
    removeResponse,
    changeTitleQuestionItem,
    addResponse,
    removeQuestion,
    changeTitleQuizItem,
    changeTitleQuiz,
    addQuestion,
} = quizSlices.actions;
export default quizSlices.reducer;
