import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom'
import { axiosWithAuth } from '../../Utils/axiosWithAuth';
import Comments from '../Comments/Comments';
import CreateComment from '../Comments/CreateComment'

export default function SinglePost() {
    const {push} = useHistory();
    const { postid } = useParams();
    const [currentPost, setCurrentPost] = useState({});
    const [commentForm, setCommentForm] = useState(false)

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

    const toggle = () => {
        setCommentForm(true);
    }

    return (
        <>
            {
                currentPost.imgurl != null ?
                <div className='single-post-container-with-img'>
                    <nav>
                        <Link to='/dashboard'>Home</Link>
                        <Link to='/profile'>My Profile</Link>
                        <Link to='/createpost'>Create a Post</Link>
                        <Link to="/logout" onClick={() => push("/logout")}>Log Out</Link>
                    </nav>
                    <h2>{currentPost.title}</h2>
                    <img src={currentPost.imgurl}></img>
                    <div>
                        <p>{currentPost.city} {currentPost.state}, {currentPost.location}</p>
                    </div>
                    <p>{currentPost.postbody}</p>
                    {
                        !commentForm ?
                        <button onClick={() => toggle()}>Comment</button>
                        :
                        <CreateComment postid={currentPost.postid}/>
                    }
                    <div className="comment-container">
                        {
                            currentPost.comments != null ? <Comments comments={currentPost.comments} /> : null
                        }
                    </div>
                </div> 
                :
                <div className='single-post-container-without-img'>
                    <nav>
                        <Link to='/dashboard'>Home</Link>
                        <Link to='/profile'>My Profile</Link>
                        <Link to='/createpost'>Create Post</Link>
                        <Link to="/logout" onClick={() => push("/logout")}>Log Out</Link>
                    </nav>
                    <h2>{currentPost.title}</h2>
                    <div>
                        <p>{currentPost.city} {currentPost.state}, {currentPost.location}</p>
                    </div>
                    <p>{currentPost.postbody}</p>
                    <button onClick={() => push('/addcomment')}>Comment</button>
                    <div className="comment-container">
                        {
                            currentPost.comments != null ? <Comments comments={currentPost.comments} postid={postid} /> : null
                        }
                    </div>
                </div>
            }
        </>
    )
}