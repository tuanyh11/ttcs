import React from "react";
import { BreadCrumb, Col, Row, Container } from "../../Components";
import Content from "./Content";
import Sidebar from "./Sidebar/index"

const Shop = () => {
  return (
    <div>
      <BreadCrumb/>
      <div className="py-20">
        <Container>
          <Row>
            <Col
              className={"w-full lg:w-3/12 order-2 mt-10 md:mt-0  md:order-1"}
            >
              <div className="">
                <div className="relative mb-[30px]">
                  <input
                    type="text"
                    className=" h-[50px] border-[1px] pl-5  w-full pr-[84px]  outline-none "
                    placeholder="Search..."
                    // onChange={handleOnSearch}
                  />
                  <button className="absolute top-1/2 right-0 -translate-y-1/2 px-4  ">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <Sidebar />
              </div>
            </Col>
            <Col className={"w-full lg:w-9/12 order-1 md:order-2"}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Shop;
