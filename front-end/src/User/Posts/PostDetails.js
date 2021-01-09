import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../../Utils/axiosWithAuth';
import Comments from '../Comments/Comments';
import axios from 'axios';

export default function PostDetails() {
    const { postid } = useParams()
    const [currentPost, setCurrentPost] = useState(null);

    useEffect(() => {
        console.log("USE EFFECT IS WORKING")
        axiosWithAuth()
            .get(`/posts/${postid}`)
            .then(res => {
                setCurrentPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
        {
            <h2>YOU ARE HERE MOTHER FUCKER</h2>
        }
            {
                currentPost.imgurl != null ?
                <div className='single-post-container-with-img'>
                    <h2>{currentPost.title}</h2>
                    {
                    console.log("YOU ARE HERE AND TERNARY WORKS RIGHT===> ", currentPost)
                    }
                    <img src={currentPost.imgurl}></img>
                    <div>
                        <p>{currentPost.city} {currentPost.state}, {currentPost.location}</p>
                    </div>
                    <p>{currentPost.postbody}</p>
                    <div className="comment-container">
                        {
                            currentPost.comments != null ? <Comments postId={currentPost.postid} /> : null
                        }
                    </div>
                </div> 
                :
                <div className='single-post-container-without-img'>
                    <h2>{currentPost.title}</h2>
                    
                    <div>
                        <p>{currentPost.city} {currentPost.state}, {currentPost.location}</p>
                    </div>
                    <p>{currentPost.postbody}</p>
                    <div className="comment-container">
                        {
                            currentPost.comments != null ? <Comments postId={currentPost.postid} /> : null
                        }
                    </div>
                </div>
            }
        </>
    )
}