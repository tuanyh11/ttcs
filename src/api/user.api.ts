import instanceAxios from "../config/axios.config"
import { UserInterface } from "../interfaces/user.interface"

export const getUsers = async () => {
    return  (await instanceAxios.get<UserInterface[]>('/users/')).data
} 

export const getUser = async (id: string) => {
    return  (await instanceAxios.get<UserInterface>(`/users/${id}`)).data
}

export const createUser = async (data: UserInterface) => {
    return  (await instanceAxios.post<UserInterface[]>('/users/', data)).data
}

export const updateUser = async ({data, id} : {id: string, data: UserInterface}) => {
    return  (await instanceAxios.patch<UserInterface[]>(`/users/${id}`, data)).data
}

export const deleteUser = async (id: string) => {
    return  (await instanceAxios.delete<UserInterface[]>('/users/' + id)).data
}

export const login = async (data: UserInterface) => {
    return (await instanceAxios.post<UserInterface>('users/login', data)).data
}
