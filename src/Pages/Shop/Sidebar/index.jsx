import React from "react";
import { Link } from "react-router-dom";
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

  const categoriesData = data?.categories


  return (
    <div>
      <ul>
        <li
          className="mb-[30px]"
          style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
        >
          <Filter />
        </li>
        {
          categories == true ? (
            null
          ) : (
            <li
              className="mb-[30px]"
              style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
            >
              <Category data={categoriesData} />
            </li>
          )
        }

        <li
          className="mb-[30px]"
          style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
        >
          <ProductStatus />
        </li>

        <li
          className="mb-[30px]"
          style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
        >
          <Brand />
        </li>

        <li
          className="mb-[30px]"
          style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
        >
          <Banner />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
