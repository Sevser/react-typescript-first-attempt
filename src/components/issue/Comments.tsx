import React, {useEffect, useRef} from 'react';
import './Comment.css';
import {useDispatch, useSelector} from "react-redux";
import {commentsSelector, getComments} from "./CommentsSlice";
import useOnScreen from "../../utills/useOnScreen";
import Comment from "./Comment";

function Comments({ count, url, number } : { count: number, number: number, url: string }) {
    const dispatch = useDispatch();
    const { comments, loading } = useSelector(commentsSelector);
    let commentsRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(commentsRef);
    useEffect(() => {
        if (isVisible && comments[number] === undefined && count) {
            dispatch(getComments({ number, url }));
        }
    }, [isVisible]);

    return (
        <div
            ref={commentsRef}
            className="comments-container">
            <div className="comments-title">
                {count} comments
            </div>
            {
                count && comments[number] !== undefined && comments[number].length
                    ? comments[number].map(comment => <Comment key={comment.id} comment={comment} />)
                    : (count && loading[number] !== undefined ? 'Идёт загрузка' : 'Нет комментариев')
            }
        </div>
    );
}

export default Comments;
