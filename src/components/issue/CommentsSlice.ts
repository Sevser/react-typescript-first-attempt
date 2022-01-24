import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { AppThunkComments } from "../../redux/app";


type comment = {
    [key: string]: Array<any>
}

type loading = {
    [key: string]: Boolean
}
type errors = {
    [key: string]: Boolean
}

export interface CommentsState {
    comments: comment,
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
        dispatch(setLoading([params.number, true]));
        try {
            const baseURL: string = "https://api.github.com/repos/"
            const res = await axios.get(`${params.url}`)
            dispatch(setIssues(res.data))
        } catch (error) {
            let errorMessage = "Failed to do something exceptional";
            if (error instanceof Error) {
                dispatch(setErrors(['' + params.number, error.message]));
                errorMessage = error.message;
            }
            console.log(errorMessage);
        } finally {
            dispatch(setLoading([params.number, false]));
        }
    };
}

const commentsSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<Array<any>>) => {
            state.loading[payload[0]] = payload[1];
        },
        setErrors: (state, { payload }: PayloadAction<Array<any>>) => {
            state.errors[payload[0]] = payload[1];
        },
        setIssues: (state, { payload }: PayloadAction<Array<any>>) => {
            state.comments[payload[0]] = payload[1];
        },
    },
})

export const { setLoading, setErrors, setIssues } = commentsSlice.actions

export default commentsSlice.reducer

export const commentsSelector = (state: { commentsState: CommentsState }) => state.commentsState
