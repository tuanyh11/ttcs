import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "../../../Components";
import { useProductDetailContext } from "../../../hooks";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import Nav from "./Nav";
import Pages from "./Pages";

const index = () => {
  const [page, setPage] = useState("description");
  const [commentId, setCommentId] = useState(null);
  const { state: data } = useProductDetailContext();

  useEffect(() => {
    if(data?.query?.type && data?.query?.commentId ) {
      setPage(data.query.type);
      setCommentId(data.query.commentId)
    }
  }, [data])

  return (
    <div className="bg-[#f7f7f7] ">
      <Container>
        <div className="pt-[30px]">
         <div className=" p-2  border border-solid">
         <Link to={"/cart"} className=" font-medium">
            {data?.name}
          </Link>{" "}
          “Titanium Wheel Cover” has been added to your cart.
         </div>
        </div>
      </Container>
      <div className="py-20 ">
        <Container>
          <Row>
            <Col className={"w-full lg:w-6/12"}>
              <BodyLeft
                featuredImage={data?.featuredImage?.node?.mediaItemUrl}
                galleryImages={data?.galleryImages?.nodes}
              />
            </Col>
            <Col className={"w-full lg:w-6/12"}>
              <BodyRight />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bg-white">
        <Container>
          <Nav
            onSetPage={setPage}
            commentCount={data?.commentCount}
            page={page}
          />
          <Pages page={page} data={data} commentId={commentId} />
        </Container>
      </div>
    </div>
  );
};

export default index;
