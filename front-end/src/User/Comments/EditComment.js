import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../../Utils/axiosWithAuth';

const initialForm = {
    commentbody: ""
}

export default function EditComment(props) {
    const {comment, toggle} = props;
    const [currentComment, setCurrentComment] = useState(initialForm);

    useEffect(() => {
        axiosWithAuth()
            .get(`/comments/${comment.commentid}`)
            .then(res => {
                setCurrentComment(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const changeHandler = (evt) => {
        const {name, value} = evt.target;
        setCurrentComment({...currentComment,
        [name]: value})
    }

    const saveEditedComment = (newComment) => {
        axiosWithAuth()
            .put(`/comments/${comment.commentid}`, newComment)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        toggle()
    }

    const deleteComment = () => {
        axiosWithAuth()
            .delete(`/comments/${comment.commentid}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="editing-comment-container">
            <form onSubmit={(e) => {
                e.preventDefault()
                saveEditedComment(currentComment)
                }}>
                <input name="commentbody" value={currentComment.commentbody} onChange={changeHandler}/>
                <button>Save</button>
                <button onClick={() => deleteComment()}>Delete</button>
            </form>
        </div>
    )
}