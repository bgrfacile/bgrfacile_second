import { createSlice } from "@reduxjs/toolkit";
import {
    getCoursByMatiere,
    getCoursByLevel,
    getCoursByCycle,
    getLastCours,
    addLike,
    removeLike,
    showCours,
    addRatingCourse,
    fetchComments,
    postComment,
    deleteComment
} from "./functions";



const coursSlices = createSlice({
    name: "cours",
    initialState: {
        cours: [],
        isLoading: false,
        isLoadingShow: true,
        isLoadingAddRating: false,
        isLoadingComments: false,
        isLoadingDeleteComment: false,
        error: null,
        coursShow: {},
    },
    reducers: {
        deleteCommentCours: (state, action) => {
            state.cours.find(cours => cours.id === action.payload.id).comments = state.cours.find(cours => cours.id === action.payload.id).comments.filter(comment => comment.id !== action.payload.comment_id);
        },
        addComment: (state, action) => {
            state.cours.forEach(cours => {
                if (cours.id === action.payload.id) {
                    cours.comments.unshift({
                        comment_user_id: action.payload.datas.user_id,
                        content: action.payload.datas.content,
                        comment_user_name: action.payload.datas.user_name,
                        comment_user_url_image: action.payload.datas.user_url_image,
                        createdAt: action.payload.datas.createdAt,
                    });
                }
            });
        },
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
                if (cours.id === action.payload.data.ratingable_id) {
                    cours.rating = action.payload.data.rating;
                }
                return cours;
            });
            state.cours = cours;
        },
        [addRatingCourse.rejected]: (state, action) => {
            state.isLoadingAddRating = false;
        },
        [fetchComments.pending]: (state, action) => {
            state.isLoadingComments = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoadingComments = false;
            const cours = state.cours.map((cours) => {
                if (cours.id === action.payload.data.cours_id) {
                    cours.comments = action.payload.data.comments;
                }
                return cours;
            });
            state.cours = cours;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoadingComments = false;
        },

        [postComment.pending]: (state, action) => {
            state.isLoadingPostComment = true;
        },
        [postComment.fulfilled]: (state, action) => {
            state.isLoadingComments = false;
            const cours = state.cours.map((cours) => {
                if (cours.id === action.payload.data.cours_id) {
                    cours.comments.find(comment => comment.id === undefined).id = action.payload.data.comment.id;
                }
                return cours;

            });
            state.cours = cours;
        },
        [postComment.rejected]: (state, action) => {
            state.isLoadingPostComment = false;
        },
        [deleteComment.pending]: (state, action) => {
            state.isLoadingDeleteComment = true;
        },
        [deleteComment.fulfilled]: (state, action) => {
            state.isLoadingDeleteComment = false;
            const cours = state.cours.map((cours) => {
                if (cours.id === action.payload.data.cours_id) {
                    cours.comments = cours.comments.filter(comment => comment.id !== action.payload.data.comment_id);
                }
                return cours;
            });
            state.cours = cours;
        },
        [deleteComment.rejected]: (state, action) => {
            state.isLoadingDeleteComment = false;
        }
    },
});

export const {
    deleteCommentCours,
    addComment,
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

