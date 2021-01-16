import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../Utils/axiosWithAuth';
// import SinglePost from './Posts/SinglePost';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Dashboard() {
    const { push } = useHistory();
    const [posts, setPosts] = useState([]);
    let [currentUpVote, setCurrentUpVote] = useState(0);
    let upVote = 0;

    useEffect(() => {
        fetchPosts()
        fetchUser()
    }, [])

    const fetchUser = () => {
        axiosWithAuth()
            .get('/userinfo')
            .then(res => {
                localStorage.setItem('userid', res.data.userid);
                localStorage.setItem('username', res.data.username)
            })
            .catch(err => {
                console.log('fetch user info ===> ', err)
            })
    }

    const username = localStorage.getItem('username')

    const fetchPosts = () => {
        axiosWithAuth()
            .get('/posts')
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log('fetch posts ===> ', err)
            })
    }

    const upVoteClicked = evt => {
        setCurrentUpVote(currentUpVote++);
    }
    


    return (
        <>
            {username != null ?
            <div className='container'>
                <Navbar/>
                <h1>Your Local Feed</h1>
                    {
                        posts.map(pst => {
                            return (
                                <div className='dashboard-posts-card' onClick={() => push(`/post/${pst.postid}`)}>
                                    <div onClick={() => upVoteClicked()}>
                                        <p>^</p>
                                        <p>{currentUpVote}</p>
                                    </div>
                                    <h3>{pst.title}</h3>
                                    <p>{pst.postbody}</p>
                                </div>
                            )
                        })
                    }
            </div>
            : 
            <h2>Is Loading...</h2>
            }
        </>
    )
}