import React, {useState, useEffect} from 'react';
import EditComment from '../Comments/EditComment';

export default function SingleComment(props) {
    const {comment, setBool} = props
    const [editing, setEditing] = useState(false);
    const toggle = () => {
        setEditing(!editing)
        setBool(true)
    }

    return (
        <div className="single-comment-container" key={comment.commentbody}>
            {/* this is where the link to the comment user goes */}
            <p key={comment.commentid}>{comment.commentbody}</p>
            {/* this is where logic to filter if current user is user who made comment goes */}
            <button onClick={() => toggle() }>Edit</button>
            <>
            {
                editing ?
                <div className="edit-comment-form">
                    <EditComment comment={comment} toggle={toggle} />
                </div>
                :
                <>
                </>
            }
            </>
        </div>
    )
}
