import React from "react";
import { Link } from "react-router-dom";

const Tags = () => {
  return (
    <div>
      {" "}
      <div className="p-10  border-[2px] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Tags
        </h4>
        <ul>
          {[...new Array(5).keys()].map((index) => {
            return (
              <li key={index} className=" last:pb-0   inline-block">
                <Link
                  to={"/"}
                  className="py-2 px-[11px] leading-[1] block bg-[#f5f7fa] text-[#646a7c] mr-[14px] mb-[10px]"
                >
                  ecommerce
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tags;
