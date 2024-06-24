import axios from 'axios'
const back_en_point = import.meta.env.VITE_API_URL;

export const listProject = async () => {
    return axios.get(`${back_en_point}/projects`)
}

export const listProjectByUserId = async (id) => {
    return axios.get(`${back_en_point}/projects/user/${id}`)
}

export const createProject = async (project) => {
    return axios.post(`${back_en_point}/projects`, project)
}

export const updateProject = async (project) => {
    return axios.put(`${back_en_point}/projects/${project.id}`, project)
}

export const deleteProject = async (id) => {
    return axios.delete(`${back_en_point}/projects/${id}`)
}

