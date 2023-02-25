import React from "react";
import { ButtonArrow, Col, Container, Row } from "../../../Components";

const Banner = ({data}) => {

  const bannerList = data?.content

  return (
    <div>
      <div className="mt-[200px] pb-[50px]">
        <Container>
          <Row>
            {bannerList?.map((item, index) => {
              return (
                <Col key={index} className="w-full xl:w-6/12 p-[15px]">
                  <div
                    className="bg-center min-h-[240px] bg-cover bg-no-repeat relative after:absolute after:inset-0 after:bg home-banner after:z-10"
                    style={{ backgroundImage: `url(${item?.image?.mediaItemUrl})` }}
                  >
                    <div className="p-[50px] text-start relative z-40">
                      <h2 className="text-[15px] text-[#fbb71c] font-normal ">
                        {item.title}
                      </h2>
                      <div dangerouslySetInnerHTML={{__html: item?.content}} className="text-white mb-[15px] text-[24px] font-poppins pr-[30%]  ">
                        {item.desc}
                      </div>
                      <ButtonArrow
                        Tag="Link"
                        to="/shop"
                        className={
                          "py-[6px] px-[17px] leading-[27px] rounded-[28px]"
                        }
                      >
                        Shop now
                      </ButtonArrow>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
