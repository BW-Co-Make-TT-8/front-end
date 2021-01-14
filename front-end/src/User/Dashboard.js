import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../Utils/axiosWithAuth';
// import SinglePost from './Posts/SinglePost';
import { Link } from 'react-router-dom';

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
            })
            .catch(err => {
                debugger
            })
    }

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

    const upVoteClicked = evt => {
        setCurrentUpVote(currentUpVote++);
    }
    


    return (
        <div className='container'>
            <nav>
                <Link to='/profile'>My Profile</Link>
                <Link to='/createpost'>Create Post</Link>
                <Link to="/logout" onClick={() => push("/logout")}>Log Out</Link>
            </nav>
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
    )
}