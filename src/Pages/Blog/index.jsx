import React from "react";
import { BreadCrumb } from "../../Components";
import { Col, Container, Row } from "../../Components";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Blog = () => {
  return (
    <div>
      <BreadCrumb />
      <div className="py-20">


        <Container>
          <Row>
            <Col className={"w-full lg:w-4/12"}>
              <div className="">
                <div className="relative mb-[30px]">
                  <input
                    type="text"
                    className=" h-[80px] border-[1px] pl-5  w-full pr-[84px]  outline-none "
                    placeholder="Search..."
                    // onChange={handleOnSearch}
                  />
                  <button className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-20 bg-main-color  text-white">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
                <Sidebar />
              </div>
            </Col>
            <Col className={"w-full lg:w-8/12"}>
              <Content/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
