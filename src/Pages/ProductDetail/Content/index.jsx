import React from "react";
import { Col, Container, Row } from "../../../Components";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import Footer from "./Footer";

const index = () => {
  return (
    <div>
      <div className="bg-[#f7f7f7] py-20">
        <Container>
          <Row>
            <Col className={"w-full lg:w-6/12"}>
              <BodyLeft />
            </Col>
            <Col className={"w-full lg:w-6/12"}>
              <BodyRight />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-white">
        <Container>
            <Footer/>
        </Container>
      </div>
    </div>
  );
};

export default index;
