import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../../Utils/axiosWithAuth';
import Comment from '../Comments/Comment'

export default function Comments(props) {
    const {postId} = props;
    const {post, setPost} = useState(null);

    useEffect(() => {
        axiosWithAuth()
            .get(`http://tt-8-bw-comake.herokuapp.com/posts/${postId}`)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => {
                console.log(`Issue finding post ${postId}: `, err);
            })
    }, [])

    return (
        <div className="commentsContainer">
            {
                post == !null && "comments" in post ?
                post.comments.map(comment => {
                    return <Comment comment={comment}/>
                }) :
                null
            }
        </div>
    )
}
