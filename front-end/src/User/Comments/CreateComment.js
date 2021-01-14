import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import {axiosWithAuth} from '../../Utils/axiosWithAuth';

export default function CreateComment(props) {
    const {postid} = props
    const [userid, setUserid] = useState(null);
    const [currentComment, setCurrentComment] = useState({
        commentbody: "",
        user: {
            userid: userid
        },
        post: {
            postid: postid
        }
    });

    useEffect(() => {
        axiosWithAuth()
            .get('https://tt-8-bw-comake.herokuapp.com/userinfo')
            .then(res => {
                setUserid(res.data.userid)
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

    const saveNewComment = (newComment) => {
        newComment.user.userid = userid;
        axiosWithAuth()
            .post(`https://tt-8-bw-comake.herokuapp.com/comments`, newComment)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        // push(`/post/${postid}`)
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
