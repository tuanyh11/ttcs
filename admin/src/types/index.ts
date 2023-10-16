export type TBrand = {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
};

export type TImage = {
  url: string;
  public_id: string;
  asset_id: string;
};

export type TProduct = {
  _id: string;
  title: string;
  description: string;
  slug?: string;
  price: number;
  categories: string[];
  bands: string[];
  quantity: number;
  sold?: number;
  images: TImage[];

  ratings?: {
    star: number;
    comment: string;
    postedBy: string;
  };
  totalRating?: string;
};
