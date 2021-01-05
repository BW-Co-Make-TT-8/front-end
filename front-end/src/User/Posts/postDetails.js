import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostDetails(props) {
    const { postId, close } = props;
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios
            .get(`/posts/post/${id}`)
            .then(res => {
                setDetails(res.data)
            })
            .catch(err => {
                debugger
            })
    }, [postId])

    return (
        <div className='container'>
            <h2>{details.title}</h2>
            {
                details &&
                <>
                    <p></p>
                </>
            }
        </div>
    )
}