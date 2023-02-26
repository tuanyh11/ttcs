import blogData from "../assets/data/blog";
import footerData from "../assets/data/footer";
import headerData from "../assets/data/header";
import homeData from "../assets/data/homeData";
import product from "../assets/data/product";
import categories from "../assets/data/ListCategory";



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
 
// start product

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
  await new Promise(resolve => setTimeout(resolve, 2000));
  const length = product.data.products.edges.length
  return {
    data: product.data.products.edges.slice(start, end),
    totalLength: length
  }
}

export const getProductCate = async (limit) => {
  return categories.data.productCategories.edges.slice(0, limit)
}


export const getProductByCategory = async (filter, start = 0, end = 12) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const products = product.data.products.edges;

  let newProducts = products
  if(filter?.category?.length > 0) {
    newProducts = products.filter(({node: product}) => 
      product.productCategories.edges.some(({node}) => filter?.category?.some(cate => cate?.databaseId == node.databaseId)) 
    );
  }

  if(filter?.price?.length > 0) {
    newProducts =  newProducts.filter(({node: product}) => {
      const priceOne = filter?.price?.[0]
      const priceTwo = filter?.price?.[1]
      const price = Number(product.regularPrice?.substring(1))
      return price >= priceOne && price <= priceTwo
    })
  }


  return {
    data: newProducts.slice(start, end),
    totalLength: newProducts.length
  };
}



export const getRangePriceProduct =  () => {
  const products = product.data.products.edges;
  let max = 0
  let currency = ''
  products.map(item => {
    currency =item.node.regularPrice.charAt(0)
    max = Math.max(max, Number(item.node.regularPrice.substring(1)))
  })

  return {
    max,
    currency
  }
}
// end product


