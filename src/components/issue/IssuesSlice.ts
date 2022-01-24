import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { AppThunk } from "../../redux/app";

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

export const getIssues = () : AppThunk => {
    return async dispatch => {
      dispatch(setLoading(true));
      try {
          const baseURL: string = "https://api.github.com/repos/"
          const user = 'bootstrap-vue';
          const repo = 'bootstrap-vue';
          const res = await axios.get(
              `${baseURL}${user}/${repo}/issues`
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
