import React, { useState } from "react";
import { useQuery } from "react-query";
import {  useParams } from "react-router-dom";
import { getProductDetail } from "../../api";
import product from "../../assets/data/product";
import {
  BreadCrumb,
  Col,
  Container,
  ProductCardGrid,
  Row,
} from "../../Components";
import { useProductDetailContext } from "../../hooks";
import Content from './Content'



const ProductDetail = () => {



  const id = useParams()?.id;

  const { data, isLoading, error } = useQuery(["product", id], () =>
    getProductDetail().then((res) => res.data?.product)
  );

  const {Provider} = useProductDetailContext()


  return (
    <div>
      <BreadCrumb />
      <div className="py-20 ">
        <Provider value={data}>
          <Content/>
        </Provider>
       
      </div>
    </div>
  );
};

export default ProductDetail;

function Comment({ comment, getDate, children, showReply, onReply, onCancel }) {
  const authorName = comment?.author?.node?.name;

  const avatar = comment?.author?.node?.avatar?.url;

  return (
    <div>
      <div className="mb-10">
        <div className="flex ">
          <div className="min-w-[90px] min-h-[90px] h-[90px]">
            <img src={avatar} alt="" className="w-full h-full rounded-full" />
          </div>

          <div className="ml-[30px]">
            <div className="">
              <span className=" text-[18px]  font-medium text-dark-color">
                {authorName}
              </span>
              <span className="ml-3">{getDate()}</span>
            </div>
            <div
              className="mb-[15px]"
              dangerouslySetInnerHTML={{ __html: comment?.content }}
            ></div>
            <button
              onClick={() => onReply(comment.id)}
              className=" font-medium transition hover:text-main-color"
            >
              Reply
              <i className="fa-solid fa-arrow-right-long ml-[10px]"></i>
            </button>
          </div>
        </div>
      </div>

      {showReply(comment.id) && (
        <CommentForm nameUser={authorName} onCancel={onCancel} />
      )}

      {children.map((commentChil) => {
        return (
          <div key={commentChil?.id} className="md:pl-[60px]">
            <Comment
              comment={commentChil}
              getDate={getDate}
              children={[]}
              onCancel={onCancel}
              onReply={() => onReply(commentChil.id)}
              showReply={showReply}
            />
          </div>
        );
      })}
    </div>
  );
}
