import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../Components";
import Banner from "./Banner";
import Category from "./Category";
import ProductStatus from "./ProducStatus";
import Brand from "./Brand";
import Filter from "./Filter";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li
          className="mb-[30px]"
          style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
        >
          <Filter />
        </li>
        <li
          className="mb-[30px]"
          style={{ boxShadow: `0 5px 0 rgb(200 200 200 / 20%)` }}
        >
          <Category />
        </li>
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
