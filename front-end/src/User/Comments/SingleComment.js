import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../../Utils/axiosWithAuth'

import EditComment from '../Comments/EditComment';

export default function SingleComment(props) {
    const {comment} = props
    const userid = localStorage.getItem('userid');
    const [commentUser, setCommentUser] = useState(null)
    const [editing, setEditing] = useState(false);
    const toggle = () => {
        setEditing(!editing)
    }

    useEffect(() => {
        axiosWithAuth()
            .get(`/comments/${comment.commentid}`)
            .then(res => {
                setCommentUser(res.data.user);
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    console.log("Here is commentUserid ===>", commentUser )

    return (
        <>
        {
            commentUser != null ?
        <div className="single-comment-container" key={comment.commentbody}>
            <a className="username-comment-link" href={`https://tt-8-bw-comake.herokuapp.com/users/id/${commentUser.userid}`}>{commentUser.username}</a>
            <p key={comment.commentid}>{comment.commentbody}</p>
            {
                userid == commentUser.userid ?
                <button onClick={() => toggle() }>Edit</button>
                :
                null
            }
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
        :
        <p>Loading...</p>
        }
        </>
    )
}
