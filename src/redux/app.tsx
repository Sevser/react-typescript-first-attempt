import { configureStore, Action } from '@reduxjs/toolkit';
import issuesSliceReducer, { IssuesState } from '../components/issue/IssuesSlice';
import { ThunkAction } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    issuesStore: issuesSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, IssuesState, unknown, Action<string>>;

export default store;
