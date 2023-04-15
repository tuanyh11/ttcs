import React from "react";
import {
  ButtonArrow,
  Col,
  Container,
  ProductCardGridV2,
  Row,
} from "../../../Components";

const Exclusive = ({ data }) => {
  return (
    <div>
      <div className="pb-20">
        <Container>
          <div className="md:p-[15px]  text-center flex justify-center">
            <div className="w-full md:w-9/12 lg:w-6/12 mb-[25px]">
              <h2 className="mb-[15px] font-poppins text-[27px] text-dark-color leading-[32px] font-semibold">
                Sản Phẩm Độc Quyền{" "}
              </h2>
              <p>
                Sản phẩm độc quyền là một sản phẩm được thiết kế và sản xuất đặc
                biệt cho một nhóm khách hàng cụ thể hoặc chỉ có một số lượng
                giới hạn.
              </p>
            </div>
          </div>
          <div>
            <Row>
              {data?.map((product, i) => {
                return (
                  <Col key={i} className="w-full md:w-6/12 lg:w-3/12">
                    <div className="mb-[35px]">
                      <ProductCardGridV2 {...product} />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>

          <div className="flex justify-center mt-5">
            <ButtonArrow
              Tag="Link"
              to="/shop"
              className="py-[11px] px-[40px] leading-[27px] rounded-[28px] border-2 border-solid text-[#777777] hover:bg-main-color hover:border-main-color hover:text-white transition-all duration-[500] ease-out border-border-color bg-white"
            >
              Xem thêm sản phẩm
            </ButtonArrow>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Exclusive;
