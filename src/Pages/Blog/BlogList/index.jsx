import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import {
  getListBlog,
  getListBlogByCategory,
  getListBlogByTag,
  searchBlogs,
} from "../../../api";
import { BlogCard, Button, Pagination } from "../../../Components";
import { useBlogContext } from "../../../hooks";

const Content = () => {
  const loc = useLocation();

  const cateId = loc.state?.categoryId;
  const search = loc?.state?.search;
  const tag = loc?.state?.tag;

  const { data } = useQuery({
    queryKey: ["blogs", cateId, search, tag],
    queryFn: () => {
      if (cateId) return getListBlogByCategory(cateId);
      if (tag) return getListBlogByTag(tag);
      if (search) return searchBlogs(search);
      return getListBlog().then((res) => res);
    },
  });

  const [text, setText] = useState("");

  return (
    <div>
      {data?.data?.length === 0 ? (
        <div className="">
          <h1 className="text-[30px] text-black font-poppins font-semibold mb-[15px]">
            No Posts Found
          </h1>
          <div className=" relative">
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              className="px-5 h-[50px] border border-border-color outline-none w-full placeholder-[#757575]"
              placeholder="Search..."
            />
            <Link
              to={`/blog?search=${text}`}
              state={{ search: text }}
              className="far fa-search absolute right-5 top-5  text-[14px] text-main-color"
            ></Link>
          </div>
        </div>
      ) : (
        <>
          <div>
            {data?.data?.map((item, index) => {
              const blog = item.node;
              return (
                <div className="mb-10" key={index}>
                  <BlogCard {...blog} list={true} />
                </div>
              );
            })}
          </div>

          <div className="">
            {data?.totalLength > 1 && (
              <ul className="flex">
                <Pagination items={data?.totalLength} />
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
