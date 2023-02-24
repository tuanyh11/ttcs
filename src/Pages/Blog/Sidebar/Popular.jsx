import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext, useDate } from "../../../hooks";

const Popular = () => {

  const {state} = useBlogContext()

  const getData = useDate()

  const posts = state?.posts?.edges

  return (
    <div>
      <div className="p-10  border-[2px] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Popular Posts
        </h4>
        <ul>
          {posts?.map((post) => {
            return (
              <li
                key={post?.node?.id}
                className="pb-[15px] last:pb-0 flex items-center justify-between mb-5"
              >
                <Link to={`/blog/${post?.node?.slug}`} className="block mr-[13px] h-full" state={{popularId: post?.node?.id}}>
                  <img
                    src="https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-3-80x65.jpg"
                    alt=""
                    className="min-w-[75px] h-[70px] max-w-full"
                    loading="lazy"
                  />
                </Link>
                <div className="leading-[1.5] flex-1">
                  <div>
                    <Link to={`/blog/${post?.node?.slug}`} state={{popularId: post?.node?.id}}>
                      <i className="fa-solid fa-calendar-days text-main-color mr-2"></i>
                      <span className="transition-all duration-300 ease-out hover:text-main-color">
                        {getData(post?.node?.data)}
                      </span>
                    </Link>
                    <Link
                      to={`/blog/${post?.node?.slug}`}
                      state={{postId: post?.node?.id}}
                      className=" text-dark-color font-medium  font-poppins block line-clamp-2 transition-all duration-300 ease-out hover:text-main-color"
                    >
                      {post?.node?.title}
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Popular;
