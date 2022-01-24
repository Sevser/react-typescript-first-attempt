import React from 'react';
import './Comment.css';

function Comments({ count, url } : { count: number, url: string }) {
    return (
        <div className="comments-container">
            <div className="comments-title">
                {count} comments
            </div>
            {
                count ? null : null
            }
        </div>
    );
}

export default Comments;
