import { UseQueryOptions } from 'react-query';
import AbstractAPI from '.';
import API from '../config';

class ProductEndpoint extends AbstractAPI {
  constructor(name: string) {
    super(API, name ? `/product/${name}` : `/product`);
  }
}

const BrandEndpoint = new ProductEndpoint('brand');

export const newBrand = BrandEndpoint.new.bind(BrandEndpoint);
export const getBrands = BrandEndpoint.getAll.bind(BrandEndpoint);
export const updateBrand = BrandEndpoint.update.bind(BrandEndpoint);
export const getBrandById = BrandEndpoint.getById.bind(BrandEndpoint);
export const delBrandById = BrandEndpoint.deleteById.bind(BrandEndpoint);

export default ProductEndpoint;
