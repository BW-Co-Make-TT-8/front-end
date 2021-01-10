import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import {axiosWithAuth} from '../../Utils/axiosWithAuth';

const initialForm = {
    commentbody: ""
}

export default function CreateComment() {
    const {commentid} = useParams();
    const {push} = useHistory();
    const [currentComment, setCurrentComment] = useState(initialForm);

    const changeHandler = (evt) => {
        const {name, value} = evt.target;
        setCurrentComment({...currentComment,
        [name]: value})
    }

    const saveNewComment = (newComment) => {
        axiosWithAuth()
            .post(`https://tt-8-bw-comake.herokuapp.com/comments`, newComment)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        // push('/profile')    
    }

    return (
        <div className="editing-comment-container">
            <form onSubmit={() => saveNewComment(currentComment)}>
                <input name="commentbody" value={currentComment.commentbody} onChange={changeHandler}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
