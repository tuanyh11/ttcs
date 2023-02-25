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
    getProductDetail(id).then((res) => res?.node)
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

