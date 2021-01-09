import React from 'react'

export default function comment(props) {
    const {comment} = props;
    
    return (
        <div>
            {
                console.log("YOURE IN THE COMMENT COMPONENT====> ", comment)
            }
            <p>"HERE"</p>
        </div>
    )
}
