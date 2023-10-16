import AbstractAPI from ".";
import API from "../config";

class ProductEndpoint extends AbstractAPI {
  constructor(name) {
    super(API, name ? `/product/${name}` : `/product`);
  }
}

const productApi = new ProductEndpoint();

export const newProduct = productApi.new.bind(productApi);
export const getProducts = productApi.getAll.bind(productApi);
export const updateProduct = productApi.update.bind(productApi);
export const getProductById = productApi.getById.bind(productApi);
export const delProductById = productApi.deleteById.bind(productApi);
export const orderProducts = async (data) => {
  const res = await API.post("/product/order", data);
  return res.data;
};
export default productApi;