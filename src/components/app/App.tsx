import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Issue from "../issue/Issue";
import {useDispatch, useSelector} from "react-redux";
import {getIssueParams, getIssues, issuesSelector} from "../issue/IssuesSlice";

function App() {
    const dispatch = useDispatch();
    const { issues } = useSelector(issuesSelector);
    let [user, setUser] = useState('');
    let [repo, setRepo] = useState('');
    let [buttonDisabled, setDisabled] = useState(true);
    const scrollBlock = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (user.length && repo.length) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [user, repo]);

    const createParams = (): getIssueParams => {
        const params: getIssueParams = {
            user: user,
            repo: repo,
        }
        return params;
    };

  return (
    <div className="app">
        <div className="application-title">
            GitHub Issues and Comments
        </div>
        <div className="filter-container">
            <input
                onInput={(event: React.FormEvent<HTMLInputElement>) => setUser(event.currentTarget.value)}
                placeholder="user"
                name="user"
                className="input mr-2" />
            <div className="mr-2">
                /
            </div>
            <input
                onInput={(event: React.FormEvent<HTMLInputElement>) => setRepo(event.currentTarget.value)}
                placeholder="repo"
                name="repo"
                className="input mr-2" />
            <button
                onClick={() => dispatch(getIssues(createParams()))}
                disabled={buttonDisabled}>
                Go fetch
            </button>
        </div>
        <div
            ref={scrollBlock}
            className="issues-container">
            {issues.length ? issues.map((issue: any) => <Issue key={issue.id} issue={issue} />) : 'нет записей'}
        </div>
    </div>
  );
}

export default App;
