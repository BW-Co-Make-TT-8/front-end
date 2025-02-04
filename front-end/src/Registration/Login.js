import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Profile from '../User/Dashboard';
import { Link, Route } from 'react-router-dom';
import { axiosWithAuth } from '../Utils/axiosWithAuth';
import axios from 'axios'
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup
    .string()
    .min(5, 'Username must be 5 or more characters long')
    .required('Must include username'),

    password: yup
    .string()
    .min(3, 'Password must be 3 or more characters long')
    .required('Must include password')
});


const initialFormValues = {
    username: '',
    password: '',
}

export default function Login() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialFormValues);
    const [initialDisabled, setInitialDisabled] = useState(true);
    const [initialFormErrors, setInitialFormErrors] = useState(initialFormValues);

    <Route path='/profile' component={Profile} />

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log('this is working', formValues);
        axiosWithAuth()
            .post('/login', formValues)
            .then(res => {
                localStorage.setItem('token', res.data.access_token)
                localStorage.setItem('token_type', res.data.token_type)
                setFormValues(initialFormValues)
                push('/dashboard')
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
            <nav>
                <Link to='/'> Home </Link>
                <Link to='/login'> Log In </Link>
                <Link to='/signup'> Sign Up</Link>
                <Link to='/about'> About Us </Link>
                <Link to='/team'> Meet the Team </Link>
            </nav>
            <form className='form-container-login' onSubmit={onSubmit}>
                <div>
                    <h1>Log In</h1>
                    <div>
                        <input 
                            value={formValues.username}
                            onChange={onChange}
                            name='username'
                            type='text'
                            placeholder='Username'
                        />
                        <input 
                            value={formValues.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                            placeholder='Password'
                        />
                    </div>
                    <button disabled={initialDisabled}>Login</button>
                    <p>Don't Have an Account? Create One Now!</p>
                    <button onClick={() => push('/signup')}>Sign Up</button>
                </div>
            </form>
        </div>
    )
};
