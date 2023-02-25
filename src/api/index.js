import blogData from "../assets/data/blog";
import blogDetail from "../assets/data/blogDetail";
import footerData from "../assets/data/footer";
import headerData from "../assets/data/header";
import productDetail from "../assets/data/productDetail";
import homeData from "../assets/data/homeData";
import product from "../assets/data/product";



export const getHeaderData = async () => {
  return headerData;
};

export const getFooterData = async () => {
  return footerData;
};


// blog 
export const getSideBarBlogData = async () => {
  return blogData;
};

export const getListBlog = async (limit = 2) => {
  return {
    data: blogData.data.posts.edges.slice(0, limit),
    totalLength: blogData.data.posts.edges.length
  };
};

export const getListBlogByCategory= (id) => {
  const data =  blogData.data.posts.edges.filter(blog => blog.node.categories.nodes.some(cate => cate.categoryId === id))
  return {
    data,
    totalLength: data.length
  };
}

export const getListBlogByTag= (id) => {
  const data =  blogData.data.posts.edges.filter(blog => blog.node.tags.edges.some(tag => tag.node.databaseId === id))
  return {
    data,
    totalLength: data.length
  };
}

export const getBlogDetail = async (id) => {
  return  blogData?.data.posts?.edges.find(post => post.node.id === id)
  
}

export const getLatestBlog = async (limit = 3) => {
  const blog = blogData.data.posts.edges.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)).slice(0, limit)
  return blog
}

// blog end 
 
export const getProductDetail = async (id) => {
  return product.data.products.edges.find(product => product.node.id === id)
}

export const getHomepageData = async () => {
  return homeData
}

export const getExclusiveProducts = async () => {
  return product
}

export const getBestSellingProducts = async () => {
  return product
}


export const getProducts = async (start = 0, end = 12)  => {
  const length = product.data.products.edges.length
  return {
    data: product.data.products.edges.slice(start, end),
    totalLength: length
  }
}
//  


