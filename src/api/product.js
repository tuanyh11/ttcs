import axiosInstance from "./config"

export const getProducts = async () => {
    return (await axiosInstance.get('/products/')).data
}

export const getProduct = async (id) => {
    return (await axiosInstance.get(`/products/${id}`)).data
}

export const getCategories = async () => {
  return await (
    await axiosInstance.get("/categories")
  ).data;
};