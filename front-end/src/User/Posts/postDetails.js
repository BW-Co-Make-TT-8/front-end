import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../../Utils/axiosWithAuth';

export default function PostDetails(props) {
    const { postId, close } = props;
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axiosWithAuth()
            .get(`/posts/${postId}`)
            .then(res => {
                setDetails(res.data)
            })
            .catch(err => {
                debugger
            })
    }, [postId])

    return (
        <div className='container'>
            <h2>Details for {details.title}:</h2>
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