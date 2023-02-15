import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <div className="p-10  border-[2px] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Categories
        </h4>
        <ul>
          {[...new Array(5).keys()].map((index) => {
            return (
              <li
                key={index}
                className="pb-[15px] last:pb-0 flex items-center justify-between"
              >
                <Link to={"/"}>
                  <i className="fa-solid fa-angle-right mr-[10px] text-xs"></i>
                  Auto Parts
                </Link>
                <span className="">({1})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
