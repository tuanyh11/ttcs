import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import Popular from "./Popular";
import Search from "./Search";
import Tags from "./Tags";
import RecentPost from "./RecentPost";
import RecentComment from "./RecentComment";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const loc = useLocation();
  const filter = queryString.parse(loc.search);

  const isSearch = Object.keys(filter).length > 0;

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
