import React from 'react';
import './Issue.css';
import Comment from "./Comment";
import {calcTimeAgo} from "../../utills";
import ReactMarkdown from 'react-markdown'

function Issue({ issue }: { issue: any }) {
    return (
        <div className="issue-container">
            <div className="issue-header">
                <a
                    onClick={() => window.open(issue.html_url, 'blank')}
                    className="issue-title">
                    {issue.title}
                </a>
                <div className="issue-subtitle">
                    By <b>{issue.user.login}</b> • {calcTimeAgo(new Date(issue.updated_at))}
                </div>
                <div className="issue-body">
                    <ReactMarkdown children={issue.body} />
                </div>
            </div>
            <div className="comments-container">
                <div className="comments-title">
                    {issue.comments} comments
                </div>
                {
                    issue.comments ? <Comment /> : null
                }
            </div>
        </div>
    );
}

export default Issue;
