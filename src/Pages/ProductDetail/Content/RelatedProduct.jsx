import React from 'react'
import product from '../../../assets/data/product';
import { Col, ProductCardGrid, Row } from '../../../Components';

const RelatedProduct = () => {
  return (
    <div >
    <div className="pb-5 text-[20px] border-b-[2px] border-[#ddd] mb-[45px]">
      Related products
    </div>

    <Row>
      {product?.data?.products?.edges?.slice(0, 4)?.map((product) => {
        const node = product?.node;
        return (
          <Col className=" md:w-6/12 lg:w-3/12 mb-[30px] md:mb-0" key={node?.id}>
            <ProductCardGrid
              {...node}
            />
          </Col>
        );
      })}
    </Row>
  </div>
  )
}

export default RelatedProduct