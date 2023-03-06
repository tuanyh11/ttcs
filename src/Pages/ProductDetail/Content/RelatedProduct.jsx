import React from "react";
import product from "../../../assets/data/product";
import { Col, ProductCardGrid, Row } from "../../../Components";

const RelatedProduct = () => {
  return (
    <div>
      <div className="pb-5 text-[20px] border-b-[2px] border-[#ddd] text-[#696969] font-poppins font-medium mb-[45px]">
        Related products
      </div>

      <Row>
        {product?.data?.products?.edges?.slice(0, 4)?.map((product) => {
          const node = product?.node;
          return (
            <Col
              className=" md:w-6/12 lg:w-3/12 mb-[30px] screens-992:w-3/12 md:mb-0 "
              key={node?.id}
            >
              <div className="mb-[30px]">
                <ProductCardGrid {...node} />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default RelatedProduct;
