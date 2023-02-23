import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../Components";
import Banner from "./Banner";
import Categories from "./Categories";
import Popular from "./Popular";
import Search from "./Search";
import Tags from "./Tags";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          <Search/>
        </li>
        <li className="mb-[30px]">
          <Categories />
        </li>
        <li className="mb-[30px]">
          <Popular />
        </li>

        <li className="mb-[30px]">
          <Tags />
        </li>

        <li className="mb-[30px]">
          <Banner />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
