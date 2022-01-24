import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { AppThunkComments } from "../../redux/app";


type comments = {
    [key: string]: Array<any>
}

type loading = {
    [key: string]: Boolean
}
type errors = {
    [key: string]: Boolean
}

export interface CommentsState {
    comments: comments,
    loading: loading,
    errors: errors,
}

const initialState: CommentsState = {
    comments: {},
    loading: {},
    errors: {},
}

export interface getCommentParams {
    url: string,
    number: number,
}

export const getComments = (params: getCommentParams) : AppThunkComments => {
    return async (dispatch) => {
        dispatch(commentsSlice.actions['comments/setLoading']([params.number, true]));
        try {
            const baseURL: string = "https://api.github.com/repos/"
            const res = await axios.get(`${params.url}`)
            dispatch(commentsSlice.actions['comments/setComments'](['' + params.number, res.data]))
        } catch (error) {
            let errorMessage = "Failed to do something exceptional";
            if (error instanceof Error) {
                dispatch(commentsSlice.actions['comments/setErrors'](['' + params.number, error.message]));
                errorMessage = error.message;
            }
            console.log(errorMessage);
        } finally {
            dispatch(commentsSlice.actions['comments/setLoading']([params.number, false]));
        }
    };
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        ['comments/setLoading']: (state, { payload }: PayloadAction<Array<any>>) => {
            state.loading[payload[0]] = payload[1];
        },
        ['comments/setErrors']: (state, { payload }: PayloadAction<Array<any>>) => {
            state.errors[payload[0]] = payload[1];
        },
        ['comments/setComments']: (state, { payload }: PayloadAction<Array<any>>) => {
            state.comments[payload[0]] = payload[1];
        },
    },
})

export const actions = {
    setLoading: commentsSlice.actions['comments/setLoading'],
    setErrors: commentsSlice.actions['comments/setErrors'],
    setComments: commentsSlice.actions['comments/setComments'],
};

export default commentsSlice.reducer

export const commentsSelector = (state: { commentsStore: CommentsState }) => state.commentsStore
