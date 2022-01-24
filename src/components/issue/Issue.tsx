import React from 'react';
import './Issue.css';
import Comment from "./Comment";

function Issue({ issue }: { issue: any }) {
    return (
        <div className="issue-container">
            <div className="issue-header">
                <div className="issue-title">
                    {issue.title}
                </div>
                <div className="issue-subtitle">
                    By <b>userhandlegoeshere</b> • {issue.updated_at}2 hours ago
                </div>
                <div className="issue-body">
                    {issue.body}
                </div>
            </div>
            <div className="comments-container">
                <div className="comments-title">
                    {issue.comments} comments
                </div>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
}

export default Issue;
