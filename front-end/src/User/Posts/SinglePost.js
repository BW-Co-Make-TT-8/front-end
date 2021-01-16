import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { axiosWithAuth } from '../../Utils/axiosWithAuth';
import Comments from '../Comments/Comments';
import CreateComment from '../Comments/CreateComment';
import EditPost from './EditPost';
import Navbar from '../Navbar';

export default function SinglePost() {
    const {push} = useHistory();
    const { postid } = useParams();
    const userid = localStorage.getItem('userid');
    const username = localStorage.getItem('username');
    const [currentPost, setCurrentPost] = useState({});
    const [commentForm, setCommentForm] = useState(false)
    const [toggleEditing, setToggleEditing] = useState(false);
    const [editPost, setEditPost] = useState(false);
    const toggleEditPost = () => {
        setToggleEditing(!toggleEditing)
    }

    useEffect(() => {
        currentPostSetter()
        matchingPostId()
    }, [])

    const toggle = () => {
        setCommentForm(true);
    }

    const currentPostSetter = () => {
        axiosWithAuth()
            .get(`/posts/${postid}`)
            .then(res => {
                setCurrentPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const matchingPostId = () => {
        axiosWithAuth()
        .get(`/users/${userid}/posts`)
        .then(res => {
            console.log('/users/userid/posts ===>', res.data)
            res.data.map(post => {
                console.log('post ===>', post)
                if (post.postid == postid){
                    setEditPost(true)
                }
            })
        })
        .catch(err => {
            console.log(err)
        })
    }   

return (
        <>
            {
                currentPost.imgurl != null ?
                <div className='single-post-container-with-img'>
                    <Navbar/>
                    <h2>{currentPost.title}</h2>
                    <img src={currentPost.imgurl}></img>
                    <div>
                        <p>{currentPost.city} {currentPost.state}, {currentPost.location}</p>
                    </div>
                    <p>{currentPost.postbody}</p>
                    {
                        editPost === true ?
                        <button onClick={() => toggleEditPost()}>Edit Post</button>
                        :
                        null
                    }
                    <>
                    </>
                    {
                        toggleEditing ?
                        <div className="edit-post-form">
                            <EditPost post={currentPost} toggleEditPost={toggleEditPost} />
                        </div>
                        :
                        <>
                        </>
                    }
                    <>
                    </>
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
                    <Navbar/>
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