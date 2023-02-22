import { blogData } from "../assets/data/Blog";
import blogDetail from "../assets/data/blogdetail";
import footerData from "../assets/data/footer";
import headerData from "../assets/data/header";

export const getSibarBlogdata = async () => {
  return blogData;
};

export const getHeaderData = async () => {
  return headerData;
};

export const getFooterData = async () => {
  return footerData;
};

export const getBlogDetail = async (id) => {
  return blogDetail
}
