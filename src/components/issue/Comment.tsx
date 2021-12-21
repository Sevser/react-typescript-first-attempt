import React from 'react';
import './Comment.css';

function Comment() {
    return (
        <div className="comment-container">
            <div className="comment-title">
                By userhandlegoeshere • 15 minutes ago
            </div>
            <div className="comment-text">
                Comment text goes here. And it goes on and on. Ut vel nunc libero. Phasellus condimentum tellus ac nunc vestibulum elementum. Etiam massa lorem, vulputate vitae tincidunt ac, aliquet et enim.
            </div>
        </div>
    );
}

export default Comment;
