import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, InputSearchV1 } from "../../../Components";
import Banner from "./Banner";
import Category from "./Category";
import ProductStatus from "./ProducStatus";
import Brand from "./Brand";
import Filter from "./Filter";
import { useQuery } from "react-query";
import { getProductCate } from "../../../api";
import { useShopContext } from "../../../hooks";

const MobileSidebar = ({ categories }) => {
  const { data } = useQuery({
    queryKey: ["shop"],
    queryFn: () =>
      Promise.all([getProductCate()]).then(([categories]) => ({ categories })),
  });

  const categoriesData = data?.categories;

  const loc = useLocation();

  const { state } = useShopContext();

  const [text, setText] = useState("");

  const handleOnSearch = state?.handleOnSearch;

  const isHasProducts = loc.state ? loc.state?.products?.length > 0 : true;

  return (
    <div>
      <ul>
        <li>
          <div className="relative mb-[30px]">
            <InputSearchV1 onClick={() => handleOnSearch(text)}/>
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

export default MobileSidebar;
