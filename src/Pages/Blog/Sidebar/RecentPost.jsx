import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../../../hooks";

const RecentPost = () => {
  const { state } = useBlogContext();

  const recentPosts = state?.recentPosts;

  return (
    <div>
      <div className="p-10  border-[2px] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Recent Posts
        </h4>
        <ul>
          {recentPosts?.map((post) => {
            return (
              <li
                key={post?.node?.id}
                className="pb-[15px] last:pb-0 flex items-center justify-between"
              >
                <Link
                  className="hover:text-main-color transition-main"
                  to={`/blog/${post?.node?.id}?categoryTitle=${post?.node?.title}&id=${post?.node?.id}`}
                  state={{ id: post?.node?.id }}
                >
                  <i className="fa-solid fa-angle-right mr-[10px] text-xs"></i>
                  {post?.node?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecentPost;
