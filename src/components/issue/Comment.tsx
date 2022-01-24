import React from 'react';
import './Comment.css';
import {calcTimeAgo} from "../../utills";

function Comment({ comment }: {comment: any}) {
    return (
        <div className="comment-container">
            <div className="comment-title">
                By <a
                    href={comment.user.html_url}
                    target={'_blank'}><b>{comment.user.login}</b></a> • {calcTimeAgo(new Date(comment.updated_at))}
            </div>
            <div className="comment-text">
                {comment.body}
            </div>
        </div>
    );
}

export default Comment;
