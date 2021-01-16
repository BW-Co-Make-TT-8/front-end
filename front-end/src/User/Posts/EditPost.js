// be able to edit or delete a post
import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { axiosWithAuth } from '../../Utils/axiosWithAuth';

const initialFormValues = {
    imgurl: '',
    title: '',
    postbody: '',
    streetaddress: '',
    addressnotes: '',
    location: '',
    city: '',
    state: '',
    comments: []
}

const EditPost = (props) => {
    const { post, toggleEditPost } = props
    const { postid } = useParams()
    const { push } = useHistory()
    const userid = localStorage.getItem('userid')
    const [editing, setEditing] = useState({
        imgurl: post.imgurl,
        title: post.title,
        postbody: post.postbody,
        streetaddress: post.streetaddress,
        addressnotes: post.addressnotes,
        location: post.location,
        city: post.city,
        state: post.state,
        comments: post.comments
    })

    useEffect(() => {
        getPost()
    }, [])

    const getPost = () => { 
        axiosWithAuth()
        .get(`/posts/${postid}`)
        .then(res => {
            console.log('.get /posts/id ===> ', res.data)
            setEditing({
                imgurl: res.data.imgurl,
                title: res.data.title,
                postbody: res.data.postbody,
                streetaddress: res.data.streetaddress,
                addressnotes: res.data.addressnotes,
                location: res.data.location,
                city: res.data.city,
                state: res.data.state,
                comments: res.data.comments
            })
        })
        .catch(err => {
            console.log('ERROR: .get /posts/id ===> ', err)
        })
    }

    const onChange = e => {
        setEditing({
            ...editing,
            [e.target.name]: e.target.value,
        })
        console.log('editing post-onChange', editing)
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .put(`/users/${userid}/posts/${postid}`, editing)
            .then(res => {
                setEditing(initialFormValues)
                push(`/post/${postid}`)
            })
            .catch(err => {
                console.log(err)
            })
        toggleEditPost()
    }

    const deletePost = () => {
        axiosWithAuth()
        .delete(`/posts/${postid}`)
        .then(res => {
            console.log(res.data)
            push('/dashboard')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h2>Editing Post</h2>
            <form className='form-post-creation' onSubmit={onSubmit}>
                <input
                    value={editing.title}
                    onChange={onChange}
                    name='title'
                    type='text'
                    placeholder='Title'
                />
                <input
                    value={editing.streetaddress}
                    onChange={onChange}
                    name='streetaddress'
                    type='text'
                    placeholder='Address'
                />
                <input
                    value={editing.city}
                    onChange={onChange}
                    name='city'
                    type='text'
                    placeholder='City'
                />
                <input
                    value={editing.state}
                    onChange={onChange}
                    name='state'
                    type='text'
                    placeholder='State'
                />
                <input
                    value={editing.location}
                    onChange={onChange}
                    name='location'
                    type='text'
                    placeholder='Zip'
                />
                <input
                    value={editing.addressnotes}
                    onChange={onChange}
                    name='addressnotes'
                    type='text'
                    placeholder='Notes'
                />
                <input
                    value={editing.postbody}
                    onChange={onChange}
                    name='postbody'
                    type='text'
                    placeholder='Voice your concern here!'
                />
                <button>Save Changes</button>
                <button onClick={() => deletePost()}>Delete Post</button>
            </form>
        </div>
    )
}

export default EditPost;