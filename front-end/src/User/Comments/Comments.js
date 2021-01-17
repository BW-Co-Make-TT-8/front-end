import React from 'react';
import SingleComment from '../Comments/SingleComment'

export default function Comments(props) {
    const {comments} = props;

    return (
        <div className="commentsContainer">
            {
                comments.map(comment => {
                    return (
                        <SingleComment comment={comment}/>
                    )
                })
            }
        </div>
    )
}
