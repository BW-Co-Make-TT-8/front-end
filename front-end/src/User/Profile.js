import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import Navbar from './Navbar';

const Profile = () => {
    const { push } = useHistory();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        getUserInfo();
        console.log('USE EFFECT HERE')
    },[])
    
    const getUserInfo = () => {
        axiosWithAuth()
            .get('/userinfo')
            .then(res => {
                setUserInfo(res.data)
            })
            .catch(err => {
                console.log('getUserId error ==> ', err)
            })
    }

    return (
        <>
        {
            userInfo != null ?
        <div className='User-Profile'>
            <div className='navbar'>
            <Navbar/>
            </div>
            <div className='User-Info'>
                <h3>User: {userInfo.username}</h3>
                <h3>Total Upvotes: HERE</h3>
            </div>
            {
            userInfo.userPosts.length > 0 
            ?
            <div className='User-Posts'>
                <h3>{userInfo.username}'s Posts</h3>
                {userInfo.userPosts.map(post => (
                    <Link key={post.post.postid} to={`/post/${post.post.postid}`}>
                    <h4>{post.post.title}</h4>
                    </Link>
                ))}
            </div>
            :
            null 
            } 
            {
            userInfo.comments.length > 0
            ?
            <div className='User-Comments'>
                <h3>{userInfo.username}'s Comments</h3>
                {userInfo.comments.map(comment => (
                    <p>{comment.commentbody}</p>
                ))}
            </div>
            :
            null
            }
        </div>
        :
        <p>Loading...</p>
        }
        </>
    )
}

export default Profile;
