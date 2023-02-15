import React from "react";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div>
      <div className="p-10  border-[2px] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Popular Posts
        </h4>
        <ul>
          {[...new Array(5).keys()].map((index) => {
            return (
              <li
                key={index}
                className="pb-[15px] last:pb-0 flex items-center justify-between mb-5"
              >
                <Link to={"/"} className="block mr-[13px] h-full">
                  <img
                    src="https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-3-80x65.jpg"
                    alt=""
                    className="min-w-[75px] h-[70px] max-w-full"
                    loading="lazy"
                  />
                </Link>
                <div className="leading-[1.5]">
                  <div>
                    <Link to={"/"}>
                      <i className="fa-solid fa-calendar-days text-main-color mr-2"></i>
                      <span className="transition-all duration-300 ease-out hover:text-main-color">
                        {new Date().toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </Link>
                    <Link
                      to={"/"}
                      className=" text-dark-color font-medium  font-poppins block line-clamp-2 transition-all duration-300 ease-out hover:text-main-color"
                    >
                      But I must explain to you how all this mistaken idea
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
