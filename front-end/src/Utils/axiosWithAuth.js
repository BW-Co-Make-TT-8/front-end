import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://tt-8-bw-comake.herokuapp.com',
        headers: {
            authorization: token
        }
    })
}