import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import {axiosWithAuth} from '../../Utils/axiosWithAuth';

const initialForm = {
    commentbody: ""
}

export default function EditComment(props) {
    const {comment} = props;
    const {commentid} = useParams();
    const {push} = useHistory();
    const [currentComment, setCurrentComment] = useState(initialForm);
    console.log("in editcommentS")
    useEffect(() => {
        axiosWithAuth()
            .get(`https://tt-8-bw-comake.herokuapp.com/comments/${comment.commentid}`)
            .then(res => {
                setCurrentComment(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            console.log("useeffect is running!")
    }, [])

    const changeHandler = (evt) => {
        const {name, value} = evt.target;
        setCurrentComment({...currentComment,
        [name]: value})
    }

    const saveEditedComment = (newComment) => {
        axiosWithAuth()
            .put(`https://tt-8-bw-comake.herokuapp.com/comments/${commentid}`, newComment)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        // push(hist)    
    }

    const deleteComment = () => {
        axiosWithAuth()
            .delete(`https://tt-8-bw-comake.herokuapp.com/comments/${commentid}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="editing-comment-container">
            <form onSubmit={() => saveEditedComment(currentComment)}>
                <input name="commentbody" value={currentComment.commentbody} onChange={changeHandler}/>
                <button>Save</button>
                <button onClick={() => deleteComment()}>Delete</button>
            </form>
        </div>
    )
}
