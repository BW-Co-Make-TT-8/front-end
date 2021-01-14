import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../../Utils/axiosWithAuth';

const initialForm = {
    commentbody: ""
}

export default function EditComment(props) {
    const {comment, toggle} = props;
    const hist = useHistory();
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
            .put(`https://tt-8-bw-comake.herokuapp.com/comments/${comment.commentid}`, newComment)
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
            .delete(`https://tt-8-bw-comake.herokuapp.com/comments/${comment.commentid}`)
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
