import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../../../hooks";
import urlSlug from 'url-slug'

const RecentComment = () => {
  const { state } = useBlogContext();

  const recentComments = state?.recentComments;

  return (
    <div>
      <div className="p-10  border-[2px] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Recent Comment
        </h4>
        <ul>
          {recentComments?.map((node, i) => {
            const comment = node?.newestComment;
            return (
              <li key={comment?.id + i} className="pb-[15px] last:pb-0 ">
                <a className="hover:text-main-color transition-main" href="#">
                  {comment?.author?.node?.name}
                </a>
                <span> on </span>
                <Link
                  className="hover:text-main-color transition-main font-medium "
                  to={`/product/${urlSlug(node?.productName)}?type=reviews&commentId=${comment?.id}&productId=${node?.productId}`}
                  state={{ comment: comment?.id, id: node?.productId }}
                >
                  {node?.productName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecentComment;
