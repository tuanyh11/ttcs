import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../../Components";
import Banner from "./Banner";
import Category from "./Category";
import ProductStatus from "./ProducStatus";
import Brand from "./Brand";
import Filter from "./Filter";
import { useQuery } from "react-query";
import { getProductCate } from "../../../api";

const Sidebar = ({ categories }) => {
  const { data } = useQuery({
    queryKey: ["shop"],
    queryFn: () =>
      Promise.all([getProductCate()]).then(([categories]) => ({ categories })),
  });

  const categoriesData = data?.categories;

  const loc = useLocation();

  const isHasProducts = loc.state ? loc.state?.products?.length > 0 : true;

  return (
    <div>
      <ul>
        <li>
          <div className="relative mb-[30px]">
            <input
              type="text"
              className=" h-[50px] border-[1px] pl-5 text-black  w-full pr-[84px]  outline-none "
              placeholder="Search..."
              // onChange={handleOnSearch}
            />
            <button className="absolute top-1/2 text-[#333] text-sm right-0 -translate-y-1/2 px-4  ">
              <i className="far fa-search"></i>
            </button>
          </div>
        </li>
        {isHasProducts && (
          <li
            className="mb-[30px]"
            style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
          >
            <Filter />
          </li>
        )}
        {categories == true ? null : (
          <li
            className="mb-[30px]"
            style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
          >
            <Category data={categoriesData} />
          </li>
        )}

        <li
          className="mb-[30px]"
          style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
        >
          <ProductStatus />
        </li>
        {isHasProducts && (
          <li
            className="mb-[30px]"
            style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
          >
            <Brand />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
