import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import PostDetails from './Posts/PostDetails';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const { push } = useHistory();
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
                <Link to='/profile'>My Profile</Link>
                <Link to='/post'>Create Post</Link>
                <Link to="/logout" onClick={() => push("/logout")}>Log Out</Link>
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