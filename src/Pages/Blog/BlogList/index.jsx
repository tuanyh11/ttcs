import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import {
  getListBlog,
  getListBlogByCategory,
  getListBlogByTag,
} from "../../../api";
import { BlogCard, Button, Pagination } from "../../../Components";

const Content = () => {
  const loc = useLocation();

  const { data } = useQuery({
    queryKey: ["blogs", loc.state?.categoryId, loc.state?.tag],
    queryFn: () => {
      if (loc.state?.categoryId)
        return getListBlogByCategory(loc.state?.categoryId);
      if (loc.state?.tag) return getListBlogByTag(loc.state?.tag);

      return getListBlog().then((res) => res);
    },
  });

  return (
    <div>
      <div>
        {data?.data?.map((item, index) => {
          const blog = item.node;
          return (
            <div className="mb-10" key={index}>
              <BlogCard {...blog} />
            </div>
          );
        })}
      </div>

      <div className="">
        { data?.totalLength && <ul className="flex">
          <Pagination items={data?.totalLength} />
        </ul>}
      </div>
    </div>
  );
};

export default Content;
