import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../../Utils/axiosWithAuth';
import { Link, useHistory } from 'react-router-dom';
import EditComment from '../Comments/EditComment'
import SingleComment from '../Comments/SingleComment'

export default function Comments(props) {
    const {comments, postid} = props;
    const {push} = useHistory();
    const [boolean, setBoolean] = useState(false);

    return (
        <div className="commentsContainer">
            {
                comments.map(comment => {
                    return (
                        <SingleComment comment={comment}/>
                    )
                })
            }
        </div>
    )
}
