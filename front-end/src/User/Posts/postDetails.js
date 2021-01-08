import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../Utils/axiosWithAuth';
import Comments from '../Comments/Comments';
import axios from 'axios';

export default function PostDetails(props) {
    const { postId, close } = props;
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axiosWithAuth()
            .get(`/posts/${postId}`)
            .then(res => {
                setDetails(res.data)
            })
            .catch(err => {
                debugger
            })
    }, [postId])

    return (
        <div className='container'>
            {
                console.log("THIS IS YOUR DETAILS IN POSTDETAILS ===> ", details)
            } 
            {
                details &&
                <>
                    <h2>Details for {details.title}:</h2>
                    <div>
                        <p>{details.city} {details.state}, {details.location}</p>
                    </div>
                    <p>{details.postbody}</p>
                    <button onClick={close}>Close</button>
                    <div className="comment-container">
                        {
                            details.comments.map(comment => {
                                {console.log(comment)}
                                return <p>{comment.commentbody}</p>
                            })
                        }
                    </div>
                </>
            }
            
           
        </div>
    )
}