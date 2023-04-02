import instanceAxios from "../config/axios.config"
import { UserInterface } from "../interfaces/user.interface"

export const getUsers = async () => {
    return  (await instanceAxios.get<UserInterface[]>('/users/')).data
} 