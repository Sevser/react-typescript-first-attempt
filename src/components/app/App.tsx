import React, {useEffect} from 'react';
import './App.css';
import Issue from "../issue/Issue";
import {useDispatch, useSelector} from "react-redux";
import {getIssues, issuesSelector} from "../issue/IssuesSlice";

function App() {
    const dispatch = useDispatch();
    const { issues } = useSelector(issuesSelector);
    useEffect(() => {
        dispatch(getIssues())
    }, [dispatch])
  return (
    <div className="app">
        <div className="application-title">
            GitHub Issues and Comments
        </div>
        <div className="filter-container">
            <input
                placeholder="user"
                className="input mr-2" />
            <div className="mr-2">
                /
            </div>
            <input
                placeholder="repo"
                className="input mr-2" />
            <button>
                Go fetch
            </button>
        </div>
        <div className="issues-container">
            {issues.map(issue => <Issue issue={issue} />)}
        </div>
    </div>
  );
}

export default App;
