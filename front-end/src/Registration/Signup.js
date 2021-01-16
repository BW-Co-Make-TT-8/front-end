import { axiosWithAuth } from '../Utils/axiosWithAuth';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom';

const schema = yup.object().shape({
    username: yup
      .string()
      .required("Userame is required")
      .min(6, "Username must be at least 6 characters long"),
  
    email: yup
      .string()
      .email('Must be valid email address')
      .required('Must include email address'),
    
    password: yup
      .string()
      .min(8, 'Must must be at least 8 characters long')
      .required('Must be valid password'),
  });

const initialFormValues = {
    username: '',
    password: '',
    email: '',
    location: ''
}

const initialFormErrors = {
    username: '',
    password: '',
    email: '',
}

export default function Signup() {
    const { push } = useHistory();

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [intitialDisabled, setInitialDisabled] = useState(true);

    const onSubmit = evt => {
        evt.preventDefault();
        axios
            .post('https://tt-8-bw-comake.herokuapp.com/signup', formValues)
            .then(res => {
                setFormValues(initialFormValues)
                // localStorage.setItem('token', res.data.access_token)
                // localStorage.setItem('token_type', res.data.token_type)
                push('/profile')
            })
            .catch(err => {
                console.log(err);
                debugger
            })
    };

    const onChange = evt => {
        const { name, value } = evt.target;
        setFormErrors(name,value);
        setFormValues({...formValues, [evt.target.name]: evt.target.value})
    };

    const inputChange = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then (() => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
    }

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
          setInitialDisabled(!valid);
        });
      }, [formValues]);

    return (
        <div>
            <nav>
                <a><Link to='/'>Home</Link></a>
                <a><Link to='/about'>About Us</Link></a>
                <a><Link to='/team'>Meet the Team</Link></a>
            </nav>
            <form className='form-container' onSubmit={onSubmit}>
                <div>
                    <h1>Sign Up</h1>
                    <div className='form-group-inputs'>
                        <input 
                            value={formValues.username}
                            onChange={onChange}
                            name='username'
                            type='text'
                            placeholder='Username'
                        />
                        <input 
                            value={formValues.email}
                            onChange={onChange}
                            name='email'
                            type='email'
                            placeholder='Email'
                        />
                        <input
                            value={formValues.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                            placeholder='Password'
                        />
                        <input 
                            value={formValues.location}
                            onChange={onChange}
                            name='location'
                            type='number'
                            placeholder='Zip Code'
                        />
                    </div>
                    <button disabled={intitialDisabled}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}
