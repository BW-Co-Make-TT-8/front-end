import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostDetails(props) {
    const { postId, close } = props;
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios
            .get(`http://tt-8-bw-comake.herokuapp.com/posts/post/${postId}`)
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
                    <div>
                        <p>{details.city} {details.state}, {details.location}</p>
                    </div>
                    <p>{details.postbody}</p>
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}