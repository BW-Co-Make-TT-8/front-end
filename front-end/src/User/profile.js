// Main home page for user profile, renders the defdult local or state posts, has nav bar that includes a link to post, link to profile settings, and button to switch feed from local to state or vice versa.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostDetails from './Posts/postDetails';

export default function Profile() {
    const [posts, setPosts] = useState([])
    const [currentPostId, setCurrentPostId] = useState(null)

    useEffect(() => {
        const fetchPosts = () => {
            axios
                .get('http://tt-8-bw-comake.herokuapp.com/posts')
                .then(res => {
                    setPosts(res.data)
                })
                .catch(err => {
                    debugger
                })
        }
        fetchPosts()
    }, [])

    const openDetails = id => {
        setCurrentPostId(id)
    }

    const closeDetails = () => {
        setCurrentPostId(null)
    }

    const Post = props => (
        <div className='post'>
            {props.info.name}
            <button onClick={() => openDetails(props.info.id)}>
                See Details
            </button>
        </div>
    )

    return (
        <div className='container'>
            <nav>
                <a>My Profile</a>
                <a>Create Post</a>
                <a>My Posts</a>
            </nav>
            <h1>Your Local Feed</h1>
            {
                posts.map(pst => {
                    return <Post key={pst.id} info={pst} />
                })
            }
            {
                currentPostId && <PostDetails postId={currentPostId} close={closeDetails} />
            }
        </div>
    )
}