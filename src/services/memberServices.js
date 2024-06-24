import axios from 'axios'
const back_en_point = import.meta.env.VITE_API_URL;

export const listMember = async (project_id) => {
    return axios.get(`${back_en_point}/members/project/${project_id}`)
}

export const createMember= async (project_id, member_id) => {
    return axios.post(`${back_en_point}/members`, {project_id, member_id})
}

export const deleteMember = async (project_id, member_id) => {
    return axios.delete(`${back_en_point}/members`, {data: {project_id, member_id}})
}


