import React from 'react';
import './Issue.css';
import {calcTimeAgo} from "../../utills";
import ReactMarkdown from 'react-markdown'
import Comments from "./Comments";

function Issue({ issue }: { issue: any }) {
    return (
        <div className="issue-container">
            <div className="issue-header">
                <a
                    href={issue.html_url}
                    target={'_blank'}
                    className="issue-title">
                    {issue.title}
                </a>
                <div className="issue-subtitle">
                    By <a
                        href={issue.user.html_url}
                        target={'_blank'}><b>{issue.user.login}</b></a> • {calcTimeAgo(new Date(issue.updated_at))}
                </div>
                <div className="issue-body">
                    <ReactMarkdown children={issue.body} />
                </div>
            </div>
            <Comments number={issue.number} count={issue.comments} url={issue.comments_url}/>
        </div>
    );
}

export default Issue;
