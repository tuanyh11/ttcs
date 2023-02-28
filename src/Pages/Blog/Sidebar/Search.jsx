import React, { useState } from "react";
import { useBlogContext, useDebounce } from "../../../hooks";

const Search = () => {

  
  const {state: {onSearch}} =  useBlogContext()


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
        <button onClick={() => onSearch(text)} className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-20 bg-main-color  text-white">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
