import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import {AppThunkIssues} from "../../redux/app";

export interface IssuesState {
    issues: object[],
    loading: boolean,
    errors: string,
}

const initialState: IssuesState = {
    issues: [],
    loading: false,
    errors: '',
}

export interface getIssueParams {
    user: string,
    repo: string,
}

export const getIssues = (params: getIssueParams) : AppThunkIssues => {
    return async (dispatch) => {
      dispatch(setLoading(true));
      try {
          const baseURL: string = "https://api.github.com/repos/"
          const res = await axios.get(
              `${baseURL}${params.user}/${params.repo}/issues`
          )
          dispatch(setIssues(res.data))
      } catch (error) {
          let errorMessage = "Failed to do something exceptional";
          if (error instanceof Error) {
              dispatch(setErrors(error.message));
              errorMessage = error.message;
          }
          console.log(errorMessage);
      } finally {
          dispatch(setLoading(false));
      }
    };
}

const issuesSlice = createSlice({
    name: 'issues',
    initialState,
    reducers: {
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
        },
        setErrors: (state, { payload }: PayloadAction<string>) => {
            state.errors = payload;
        },
        setIssues: (state, { payload }: PayloadAction<object[]>) => {
            state.issues = payload;
        },
    },
})

export const { setLoading, setErrors, setIssues } = issuesSlice.actions

export default issuesSlice.reducer

export const issuesSelector = (state: { issuesStore: IssuesState }) => state.issuesStore
