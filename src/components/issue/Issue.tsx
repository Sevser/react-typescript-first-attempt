import React from 'react';
import './Issue.css';
import Comment from "./Comment";

function Issue() {
    return (
        <div className="issue-container">
            <div className="issue-header">
                <div className="issue-title">
                    This is an expanded issue
                </div>
                <div className="issue-subtitle">
                    By <b>userhandlegoeshere</b> • 2 hours ago
                </div>
            </div>
            <div className="comments-container">
                <div className="comments-title">
                    3 comments
                </div>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
}

export default Issue;
