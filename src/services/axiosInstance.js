// axiosConfig.js
import axios from 'axios';
const back_en_point = import.meta.env.VITE_API_URL;

const instance = axios.create({
    baseURL: back_en_point,
    withCredentials: true, 
});

    instance.interceptors.request.use((config) => {
        const stringToken = localStorage.getItem('webcup_token')
        const token = JSON.parse(stringToken).token
        
        config.headers = config.headers || {};
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['Content-Type'] = `multipart/form-data`;
        return config;
    });
export default instance;