// Main home page for user profile, renders the defdult local or state posts, has nav bar that includes a link to post, link to profile settings, and button to switch feed from local to state or vice versa.

import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import PostDetails from './Posts/postDetails';
import { Link } from 'react-router-dom';

export default function Profile() {
    const [posts, setPosts] = useState([])
    const [currentPostId, setCurrentPostId] = useState(null)

    useEffect(() => {
        const fetchPosts = () => {
            axiosWithAuth()
                .get('/posts')
                .then(res => {
                    setPosts(res.data)
                })
                .catch(err => {
                    console.log(err)
                    debugger
                })
        }
        fetchPosts()
    }, [])

    const openDetails = id => {
        console.log("THIS IS THE CURRENT ID ===> ", id)
        setCurrentPostId(id)
    }

    const closeDetails = () => {
        setCurrentPostId(null)
    }

    const Post = props => (
        <div className='post'>
            {props.info.title}
            {console.log("HERE IS YOUR PROPS.INFO ===> ", props.info)}
            <button onClick={() => openDetails(props.info.postid)}>
                See Details
            </button>
        </div>
    )

    return (
        <div className='container'>
            <nav>
                <a>My Profile</a>
                <a><Link to='/post'>Create Post</Link></a>
                <a>My Posts</a>
            </nav>
            <h1>Your Local Feed</h1>
            {
                posts.map(pst => {
                    return <Post key={pst.postId} info={pst} />
                })
            }
            {
                currentPostId && <PostDetails postId={currentPostId} close={closeDetails} />
            }
        </div>
    )
}