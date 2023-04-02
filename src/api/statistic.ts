import { ProductTotalStatisticInterface } from './../interfaces/product.interface';
import axios from "axios"
import instanceAxios from "../config/axios.config"
import { UserTotalStatisticInterface } from '../interfaces/user.interface';

export const productTotalStatistics = async () => {
    return  (await instanceAxios.get<ProductTotalStatisticInterface>("/products/statistics/total")).data
}

export const userTotalStatistics = async () => {
    return  (await instanceAxios.get<UserTotalStatisticInterface>("/users/statistics/compare")).data
}