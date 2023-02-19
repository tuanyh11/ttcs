import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../Components";
import Banner from "./Banner";
import Category from "./Category";
import Popular from "./Popular";
import Tags from "./Tags";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li className="mb-[30px]">
          <Category />
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