import axios from 'axios'
const back_en_point = import.meta.env.VITE_API_URL;

export const listForums = async () => {
    return axios.get(`${back_en_point}/forums`)
}

export const listForumsByUserId = async (id) => {
    return axios.get(`${back_en_point}/forums/user/${id}`)
}

export const createForums = async (forums) => {
    return axios.post(`${back_en_point}/forums`, forums)
}

export const updateForums = async (forums) => {
    return axios.put(`${back_en_point}/forums/${forums.id}`, forums)
}

export const deleteForums = async (id) => {
    return axios.delete(`${back_en_point}/forums/${id}`)
}
