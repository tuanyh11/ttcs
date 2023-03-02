import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, Navigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../api";
import { BreadCrumb } from "../../Components";
import { useProductDetailContext } from "../../hooks";
import Content from "./Content";
import queryString from "query-string";
import {revert} from 'url-slug'

const ProductDetail = () => {
  const loc = useLocation();
  const state = loc.state;
  const query = queryString.parse(loc.search);
  const slug = useParams()?.slug; 


  const id = state?.id || query?.productId || revert(slug);
  const productBySearch = state?.product;

  const { data, isLoading, error, status } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetail(id).then((res) => res?.node),
    enabled: !productBySearch,
  });

  const { Provider } = useProductDetailContext();

  if (!data && status === 'success') return <Navigate to={"*"} state={{content: "Product not found try new params"}}/>;
  


  return (
    <div>
      <BreadCrumb label={"Product Detail"} />
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
