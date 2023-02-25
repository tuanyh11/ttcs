import React, { useState } from "react";
import { Col, Container, Row } from "../../../Components";
import { useProductDetailContext } from "../../../hooks";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import Nav from "./Nav";
import Pages from "./Pages";

const index = () => {
  const [page, setPage] = useState("description");
  const {state: data} = useProductDetailContext()

  return (
    <div>
      <div className="bg-[#f7f7f7] py-20">
        <Container>
          <Row>
            <Col className={"w-full lg:w-6/12"}>
              <BodyLeft featuredImage={data?.featuredImage?.node?.mediaItemUrl} galleryImages={data?.galleryImages?.nodes} />
            </Col>
            <Col className={"w-full lg:w-6/12"}>
              <BodyRight />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-white">
        <Container>
            <Nav onSetPage={setPage} commentCount={data?.commentCount} page={page}/>
            <Pages page={page} data={data}/>
        </Container>
      </div>
    </div>
  );
};

export default index;
