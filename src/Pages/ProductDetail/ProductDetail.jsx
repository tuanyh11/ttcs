import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
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
import Content from "./Content";

const ProductDetail = () => {
  const state = useLocation().state
  const id = state?.id;
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
        <Provider value={productBySearch || data}>
          <Content />
        </Provider>
      </div>
    </div>
  );
};

export default ProductDetail;
