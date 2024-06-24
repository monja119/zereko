import axios from 'axios';
const back_en_point = import.meta.env.VITE_API_URL;

export const authentification = (data) => {
    return axios.post(`${back_en_point}/auth/login/`, data);
}


export const register = (data) => {
    return axios.post(`${back_en_point}/auth/register/`, data);
}

export const isAuthentified = () => {
    const token =  localStorage.getItem('cenhosoa_token')
    return axios.get(`${back_en_point}/token/get/${token}`)
}

export const getUser = () => {
    const token =  localStorage.getItem('cenhosoa_token')
    return axios.get(`${back_en_point}/token/get/${token}`)
}

