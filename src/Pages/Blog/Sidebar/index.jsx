import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../Components";
import { useBlogContext } from "../../../hooks";
import Banner from "./Banner";
import Categories from "./Categories";
import Popular from "./Popular";
import Search from "./Search";
import Tags from "./Tags";
import RecentPost from "./RecentPost";
import RecentComment from "./RecentComment";

const Sidebar = () => {
  const {
    state: { isSearch },
  } = useBlogContext();


  return (
    <div>
      <ul>
        <li>
          <Search />
        </li>

        {isSearch && (
          <li className="mb-[30px]">
            <RecentPost />
          </li>
        )}
        {isSearch && (
          <li className="mb-[30px]">
            <RecentComment />
          </li>
        )}
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
