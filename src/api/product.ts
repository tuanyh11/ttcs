import { AxiosRequestConfig } from "axios";
import instanceAxios from "../config/axios.config";
import { CategoryInterface, ProductInterface } from "../interfaces/product.interface";

export const createProduct = async (data: ProductInterface | FormData) => {
  return await instanceAxios.post("/products", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

export const getProducts = async (): Promise<ProductInterface[]> => {
  return await (
    await instanceAxios.get("/products")
  ).data;
};

export const updateProduct = async ({id, data, config={
  headers: {
    "Content-Type": "multipart/form-data"
  }
}}: {id: string, data: ProductInterface | FormData, config?: AxiosRequestConfig}) => {
   return await instanceAxios.patch(`/products/${id}`, data,  {
    ...config
   });
}

export const getProduct = async (id: string) => {
  return await (
    await instanceAxios.get(`/products/${id}`)
  ).data;
}

export const deleteProduct = async (id: string) => {
  return await instanceAxios.delete(`/products/${id}`);
};

export const duplicateProduct = async (id: string) => {
  return await (await instanceAxios.post(`/products/${id}/duplicate`)).data;
}

// category


export const createCategory = async (data: CategoryInterface | FormData) => {
  return await instanceAxios.post("/categories", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};

export const getCategories = async (): Promise<CategoryInterface[]> => {
  return await (
    await instanceAxios.get("/categories")
  ).data;
};

export const updateCategory = async ({id, data}: {id: string, data: CategoryInterface | FormData}) => {
   return await instanceAxios.patch(`/categories/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
   });
}

export const getCategory = async (id: string) => {
  return await (
    await instanceAxios.get(`/categories/${id}`)
  ).data;
}

export const deleteCategory = async (id: string) => {
  return await instanceAxios.delete(`/categories/${id}`);
};

export const duplicateCategory = async (id: string) => {
  return await (
    await instanceAxios.post(`/categories/${id}/duplicate`)
  ).data;
};

