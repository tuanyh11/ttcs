import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, Navigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../api";
import { BreadCrumb } from "../../Components";
import { useProductDetailContext } from "../../hooks";
import Content from "./Content";
import queryString from "query-string";
import { revert } from "url-slug";
import { getProduct } from "../../api/product";
import { moveToTop } from "../../utils";

const ProductDetail = () => {
  const loc = useLocation();
  const state = loc.state;
  const query = queryString.parse(loc.search);
  const slug = useParams()?.slug;

  useEffect(() => {
    moveToTop();
  }, []);

  const id = state?._id || query?.productId || revert(slug);
  const productBySearch = state?.product;

  const { data, isLoading, error, status } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    enabled: !productBySearch,
    onError: () => {
      <Navigate
        to={"*"}
        state={{ content: "Product not found try new params" }}
      />;
    },
  });

  const { Provider } = useProductDetailContext();

  return (
    <div>
      <BreadCrumb label={"Chi Tiết Sản Phẩm"} />
      <div>
        <Provider
          value={
            productBySearch || {
              ...data,
              query: {
                ...query,
              },
            }
          }
        >
          <Content />
        </Provider>
      </div>
    </div>
  );
};

export default ProductDetail;
