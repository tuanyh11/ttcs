import { UseQueryOptions } from 'react-query';
import AbstractAPI from '.';
import API from '../config';

class ProductEndpoint extends AbstractAPI {
  constructor(name: string) {
    super(API, name ? `/product/${name}` : `/product`);
  }
}

const CategoryEndpoint = new ProductEndpoint('category');

export const newCategory = CategoryEndpoint.new.bind(CategoryEndpoint);
export const getCategories = CategoryEndpoint.getAll.bind(CategoryEndpoint);
export const updateCategory = CategoryEndpoint.update.bind(CategoryEndpoint);
export const getCategoryById = CategoryEndpoint.getById.bind(CategoryEndpoint);
export const delCategoryById =
  CategoryEndpoint.deleteById.bind(CategoryEndpoint);

export default ProductEndpoint;
