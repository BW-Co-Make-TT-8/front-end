import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    const token_type = localStorage.getItem('token_type')

    return axios.create({
        baseURL: 'https://tt-8-bw-comake.herokuapp.com',
        headers: {
            authorization: `${token_type} ${token}`
            // token_type: token_type
        }
    })
}