import axiosInstance from "./config"

export const login = async (data) => {
    return await (await axiosInstance.post('/users/login', data)).data
}

export const registerApi = async (data) => {
    return await (await axiosInstance.post('users/', data)).data
}