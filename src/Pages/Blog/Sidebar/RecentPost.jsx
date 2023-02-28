import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../../../hooks";

const Categories = () => {


  const {state} = useBlogContext()

  const categories = state?.categories?.edges


  
  return (
    <div>
      <div className="p-10  border-[2px] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Categories
        </h4>
        <ul>
          {categories?.map((category) => {
            return (
              <li
                key={category?.node?.categoryId}
                className="pb-[15px] last:pb-0 flex items-center justify-between"
              >
                <Link className="hover:text-main-color transition-main" to={`/blog?category=${category?.node?.slug}`} state={{categoryId: category?.node?.categoryId}}>
                  <i className="fa-solid fa-angle-right mr-[10px] text-xs"></i>
                  {category?.node?.name}
                </Link>
                <span className="">({category?.node?.count})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
