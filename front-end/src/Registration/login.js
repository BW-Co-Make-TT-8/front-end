import react, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Profile from '../User/profile';
import { Route } from 'react-router-dom';
import axiosWithAuth from '../Utils/axiosWithAuth';
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup
    .string()
    .min(8, 'Username must be 8 or more characters long')
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
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user_id', res.data.user_id)
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
        <form className='form-container-login' onSubmit={onSubmit}>
            <div>
                <h1>Log In</h1>
                <div>
                    <label>
                        Username
                        <input 
                            value={formValues.username}
                            onChange={onChange}
                            name='username'
                            type='text'
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            value={formValues.password}
                            onChange={onChange}
                            name='password'
                            type='text'
                        />
                    </label>
                </div>
                <button disabled={initialDisabled}>Login</button>
            </div>
        </form>
    )
};