// create a post, decide whether this is a local or state post. Post can be text only but can also link to images like reddit, has to include edit button to make changes.
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import {axiosWithAuth} from '../../Utils/axiosWithAuth'


const schema = yup.object().shape({
    title: yup
    .string()
    .min(5, 'Must have a valid title of 5 characters or more')
    .required('Must included title'),

    postbody: yup
    .string()
    .min(10, 'Must be 10 characters or more')
    .required('Issue must be described efficiently'),

    location: yup
    .number()
    .min(5, 'Must contain at least 5 numbers')
    .required('Must be a valid zip code'),
});

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

export default function CreatePost() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);
    const [user, setUser] = useState(null);
    const [initialDisabled, setInitialDisabled] = useState(true);
    const [initialFormErrors, setInitialFormErrors] = useState(initialFormValues);

    useEffect(() => {
        axiosWithAuth()
            .get('/userinfo')
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log('post form is working', formValues);
        axiosWithAuth()
            .post(`/users/${user.userid}/posts`, formValues)
            .then(res => {
                console.log(res.data)
                setFormValues(initialFormValues)
                push('/profile')
            })
            .catch(err => {
                console.log(err);
            });
    };

    const onChange = evt => {
        const { name, value } = evt.target;
        setFormValues({...formValues, [evt.target.name]: evt.target.value})
    };

    const inputChange = (name, value) => {
        yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
            setInitialFormErrors({
                ...initialFormErrors,
                [name]: '',
            })
        })
        .catch((err) => {
            setInitialFormErrors({
                ...initialFormErrors,
                [name]: err.errors[0],
            })
        })
    };

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setInitialDisabled(!valid);
        })
    }, [formValues])

    return (
        <div>
        <form className='form-post-creation' onSubmit={onSubmit}>
            <div className='post-title'>
                <h1>Create Post</h1>
                <div>
                    <input
                        value={formValues.title}
                        onChange={onChange}
                        name='title'
                        type='text'
                        placeholder='Title'
                    />
                    <input
                        value={formValues.streetaddress}
                        onChange={onChange}
                        name='streetaddress'
                        type='text'
                        placeholder='Address'
                    />
                    <input
                        value={formValues.city}
                        onChange={onChange}
                        name='city'
                        type='text'
                        placeholder='City'
                    />
                    <input
                        value={formValues.state}
                        onChange={onChange}
                        name='state'
                        type='text'
                        placeholder='State'
                    />
                    <input
                        value={formValues.location}
                        onChange={onChange}
                        name='location'
                        type='text'
                        placeholder='Zip'
                    />
                    <input
                        value={formValues.addressnotes}
                        onChange={onChange}
                        name='addressnotes'
                        type='text'
                        placeholder='Notes'
                    />
                    <input
                        value={formValues.postbody}
                        onChange={onChange}
                        name='postbody'
                        type='text'
                        placeholder='Voice your concern here!'
                    />
                </div>
                <button disabled={initialDisabled}>Submit</button>
            </div>
        </form>
        </div>
    )
}