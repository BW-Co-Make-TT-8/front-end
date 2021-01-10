import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { axiosWithAuth } from '../../Utils/axiosWithAuth';
import Comments from '../Comments/Comments';

export default function SinglePost() {
    const { postid } = useParams()
    const [currentPost, setCurrentPost] = useState({});

    useEffect(() => {
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
                currentPost.imgurl != null ?
                <div className='single-post-container-with-img'>
                    <h2>{currentPost.title}</h2>
                    <img src={currentPost.imgurl}></img>
                    <div>
                        <p>{currentPost.city} {currentPost.state}, {currentPost.location}</p>
                    </div>
                    <p>{currentPost.postbody}</p>
                    <div className="comment-container">
                        {
                            currentPost.comments != null ? <Comments comments={currentPost.comments} /> : null
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
                            currentPost.comments != null ? <Comments comments={currentPost.comments} /> : null
                        }
                    </div>
                </div>
            }
        </>
    )
}