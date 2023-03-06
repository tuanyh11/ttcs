import blogData from "../assets/data/blog";
import footerData from "../assets/data/footer";
import headerData from "../assets/data/header";
import homeData from "../assets/data/homeData";
import product from "../assets/data/product";
import categories from "../assets/data/ListCategory";
import cars from '../assets/data/cars'
import carModel from '../assets/data/carModel'
import {revert} from 'url-slug'
import axios from "axios";
import axiosInstance from "./config";
const products = product.data.products.edges;

export const getHeaderData = async () => {
  return headerData;
};

export const getFooterData = async () => {
  return footerData;
};

// blog
export const getSideBarBlogData = async () => {
  const { categories, tags, posts } = blogData.data;
  const topNewComments = products.map((product) => {
    const newestComment = product.node.comments.nodes.reduce(
      (prevComment, currComment) => {
        const prevDate = new Date(prevComment.date);
        const currDate = new Date(currComment.date);
        return currDate > prevDate ? currComment : prevComment;
      },
      product.node.comments.nodes[0]
    ); // initialize with the first comment

    return {
      productId: product.node.id,
      productName: product.node.name,
      newestComment: newestComment,
    };
  });
  return {
    data: {
      categories,
      tags,
      posts,
      recentPosts: posts.edges.map(({ node }) => ({
        node: {
          id: node.id,
          title: node.title,
        },
      })),
      recentComments: topNewComments,
    },
  };
};

export const getListBlog = async (limit = 2) => {
  return {
    data: blogData.data.posts.edges.slice(0, limit),
    totalLength: blogData.data.posts.edges.length,
  };
};

export const getListBlogByCategory = (id) => {
  const data = blogData.data.posts.edges.filter((blog) =>
   {
    return  blog.node.categories.nodes.some((cate) => cate.categoryId.toString() === id)
   }
  );
  return {
    data,
    totalLength: data.length,
  };
};

export const getListBlogByTag = (id) => {
  const data = blogData.data.posts.edges.filter((blog) =>
    blog.node.tags.edges.some((tag) => tag.node.databaseId.toString() === id)
  );
  return {
    data,
    totalLength: data.length,
  };
};

export const getBlogDetail = async (id) => {
  return blogData?.data.posts?.edges.find((post) => post.node.id === id || post.node.title.toLowerCase() === revert(id)?.toLowerCase());
};

export const getLatestBlog = async (limit = 3) => {
  const blog = blogData.data.posts.edges
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit);
  return blog;
};

// blog end

// start product

export const getProductDetail = async (id) => {
  return products.find((product) => product.node.id === id || product.node.name === id);
};



export const getHomepageData = async () => {
  return homeData;
};

export const getExclusiveProducts = async () => {
  return product;
};

export const getBestSellingProducts = async () => {
  return product;
};

export const getProducts = async (start = 0, end = 12) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const length = products.length;
  return {
    data: product.data.products.edges.slice(start, end),
    totalLength: length,
  };
};

export const getProductCate = async (limit) => {
  return categories.data.productCategories.edges.slice(0, limit);
};

export const getProductByCategory = async (filter, start = 0, end = 12) => {
  let newProducts = products;
};

export const getRangePriceProduct = () => {
  let max = 0;
  let currency = "";
  products.map((item) => {
    currency = item.node.regularPrice.charAt(0);
    max = Math.max(max, Number(item.node.regularPrice.substring(1)));
  });

  return {
    max,
    currency,
  };
};
// end product

// start header search
export const searchProducts = async (text) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return products.filter(
    ({ node: product }) =>
      product.name.toLocaleLowerCase().indexOf(text?.toLocaleLowerCase()) >= 0
  );
};

export const searchBlogs = async (text) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    data: blogData.data.posts.edges.filter(
      ({ node: blog }) =>
        blog.title.toLocaleLowerCase().indexOf(text?.toLocaleLowerCase()) >= 0
    )
  }
};

// end header search
 

// home page 

export const getCars = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return cars.data
}

export const searchCarModel = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return carModel.data.parts.edges.filter(({ node: car }) => car.cartId === id)
}

// login

export const loginAsync = async (user) => {
  try {
    const response = await axiosInstance.get(`/users`);
    const user =  response.data.find((user) => user.email === user.email && user.password === user.password)
    if(user) return user
    throw new Error({
      status: 404,
      message: `User ${user.username} does not exist`
    })
  } catch (error) {
    const { response } = error;
    const message = response?.data?.message || error.message;
    throw new Error(message);
  }
  return user
}