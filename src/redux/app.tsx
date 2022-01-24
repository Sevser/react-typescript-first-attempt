import { configureStore, Action } from '@reduxjs/toolkit';
import issuesSliceReducer, {getIssueParams, IssuesState} from '../components/issue/IssuesSlice';
import { ThunkAction } from "@reduxjs/toolkit";
import commentsSliceReducer, {CommentsState} from "../components/issue/CommentsSlice";

const store = configureStore({
  reducer: {
    issuesStore: issuesSliceReducer,
    commentsStore: commentsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunkIssues = ThunkAction<void, IssuesState, unknown, Action<string>>;
export type AppThunkComments = ThunkAction<void, CommentsState, unknown, Action<string>>;

export default store;
