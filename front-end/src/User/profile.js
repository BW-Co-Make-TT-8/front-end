import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

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
            <div className='User-Info'>
                <h3>Username: {userInfo.username}</h3>
                <p>Total Upvotes: HERE</p>
            </div>
            {
            userInfo.userPosts.length > 0 
            ?
            <div className='User-Posts'>
                <h3>{userInfo.username}'s Posts</h3>
                {userInfo.userPosts.map(post => (
                    <h4>{post.post.title}
                    {console.log(post)}</h4>
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
                    <h5>{comment.commentbody}</h5>
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
