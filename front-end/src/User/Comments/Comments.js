import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../../Utils/axiosWithAuth';
import { Link, useHistory } from 'react-router-dom';
import EditComment from '../Comments/EditComment'

export default function Comments(props) {
    const {comments} = props;
    const {push} = useHistory();
    // const [editing, setEditing] = useState(false);

    // useEffect(() => {console.log("here")}, [editing])

    // const editComment = (evt) => {

    // }

    return (
        <div className="commentsContainer">
            {console.log("COMMENTS PASSED TO COMMENTS===>", comments)}
            {
                comments.map(comment => {
                    return (
                        <div className="single-comment-container" key={comment.commentbody}>
                            {/* this is where the link to the comment user goes */}
                            <p key={comment.commentid}>{comment.commentbody}</p>
                            <button onClick={() => push('/addcomment')}>Comment</button>
                            {/* this is where logic to filter if current user is user who made comment goes */}
                            <button onClick={() => push(`/editcomment/${comment.commentid}`)}>Edit</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
