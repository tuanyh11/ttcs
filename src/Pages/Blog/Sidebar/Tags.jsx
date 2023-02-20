import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../../../hooks";

const Tags = () => {
  const { state } = useBlogContext();

  const tags = state.tags;

  return (
    <div>
      {" "}
      <div className="p-10  border-[2px] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Tags
        </h4>
        <ul>
          {tags?.map((tag) => {
            return (
              <li
                key={tag?.node?.databaseId}
                className=" last:pb-0  inline-block"
              >
                <Link
                  to={`/blog?tag=${tag?.node?.slug}`}
                  className="py-2 px-[11px] leading-[1] block bg-[#f5f7fa] hover:bg-main-color hover:text-white transition-all text-[#646a7c] mr-[14px] mb-[10px]"
                >
                  {tag?.node?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tags;
