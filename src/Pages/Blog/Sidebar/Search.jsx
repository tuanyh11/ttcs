import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBlogContext, useDebounce } from "../../../hooks";

const Search = () => {


  const [text, setText] = useState("");


  return (
    <div>
      <div className="relative mb-[30px]">
        <input
          type="text"
          className=" h-[80px] border-[1px] pl-5  w-full pr-[84px]  outline-none "
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
        />
        <Link to={`/blog?search=${text}`} state={{search: text}} className="absolute top-1/2 right-0 inline-block leading-[80px] text-center -translate-y-1/2 w-20 h-20 bg-main-color  text-white">
          <i className="fas fa-search"></i>
        </Link>
      </div>
    </div>
  );
};

export default Search;
