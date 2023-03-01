import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { getProductDetail } from "../../api";
import {
  BreadCrumb
} from "../../Components";
import { useProductDetailContext } from "../../hooks";
import Content from "./Content";
import queryString from "query-string";


const ProductDetail = () => {
  const loc = useLocation()
  const state = loc.state
  const query = queryString.parse(loc.search)


  const id = state?.id || query?.productId;
  const productBySearch  = state?.product

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetail(id).then((res) => res?.node),
    enabled: !productBySearch
  });

  const { Provider } = useProductDetailContext();

  return (
    <div>
      <BreadCrumb />
      <div>
        <Provider value={productBySearch || {
          ...data,
          query: {
            ...query
          }
        }}>
          <Content />
        </Provider>
      </div>
    </div>
  );
};

export default ProductDetail;
