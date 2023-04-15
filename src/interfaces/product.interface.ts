import { ImageListType } from "react-images-uploading";

export interface ProductInterface {
  _id?: string;
  name: string;
  description: string;
  price: {
    raw: number;
    formatted: string;
  };
  images: ImageListType | any;
  sku: string;
  quantityInStock: number;
  rating?: number;
  category: string;
  isActive: boolean;
  previews?: [];
  deletedImages?: any[];
  oldImagesUpload?: string[];
}

export interface CategoryInterface {
    _id?: string;
    name: string;
    description: string;
    slug?: string;
    isActive?: boolean;
    preview?: string,
    image: string | File | FileList
}

export interface ProductTotalStatisticInterface {
    _id?: string;
    currentMonthProducts?: number;
    previousMonthProducts?: number;
    totalProducts?: number;
    percentChange?: number;
}