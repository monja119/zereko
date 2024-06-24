import axios from 'axios';
const back_en_point = import.meta.env.VITE_API_URL;

export const listUsers = async () => {
    return axios.get(`${back_en_point}/users`)
}

export const updateUser = async (id, data) => {
    return axios.put(`${back_en_point}/users/${id}`, data)
}

export const activateUser = async (id) => {
    return axios.get(`${back_en_point}/users/${id}/activate`)
}

export const deactivateUser = async (id) => {
    return axios.get(`${back_en_point}/users/${id}/deactivate`)
}

