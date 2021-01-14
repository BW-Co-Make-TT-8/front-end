import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../../Utils/axiosWithAuth';
import { Link, useHistory } from 'react-router-dom';
import EditComment from '../Comments/EditComment'
import SingleComment from '../Comments/SingleComment'

export default function Comments(props) {
    const {comments, postid, setBool} = props;
    const {push} = useHistory();
    const [boolean, setBoolean] = useState(false);
    // const [editing, setEditing] = useState(false);

    // useEffect(() => {console.log("here")}, [editing])

    // const editComment = (evt) => {

    // }
    useEffect(()=>{
        axiosWithAuth()
            .get(`/posts/${postid}/`)
            .then(res => {
                // setCurrentPost(res.data);
            })
            .catch(err => {
                // console.log(err);
            })
    }, [])

    return (
        <div className="commentsContainer">
            {console.log("COMMENTS PASSED TO COMMENTS===>", comments)}
            {
                comments.map(comment => {
                    return (
                        <SingleComment comment={comment} setBool={setBool}/>
                        // <div className="single-comment-container" key={comment.commentbody}>
                        //     {/* this is where the link to the comment user goes */}
                        //     <p key={comment.commentid}>{comment.commentbody}</p>
                        //     {/* this is where logic to filter if current user is user who made comment goes */}
                        //     <button onClick={() => toggle() }>Edit</button>
                        //     <>
                        //         {
                        //         boolean ?
                        //         <div className="edit-comment-form">
                        //             <p>HERE BITCH</p>
                        //         </div>
                        //         :
                        //         <>
                        //         </>
                        //         }
                        //     </>
                        // </div>
                    )
                })
            }
        </div>
    )
}
