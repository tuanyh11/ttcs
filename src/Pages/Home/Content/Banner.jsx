import React from "react";
import { fakeData } from "../../../assets/data";
import { ButtonArrow, Col, Container, Row } from "../../../Components";

const bannerData = fakeData(4, (i) => {
    return {
      title: "25% BIG OFFER ",
      desc: `Modern Auto Wheel Up To 25% Offer ${i + 1}`,
      image: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/of-bg-1.jpg`,
    };
  });

const Banner = () => {
  return (
    <div>
      <div className="mt-[200px] pb-[50px]">
        <Container>
          <Row>
            {bannerData.map((item, index) => {
              return (
                <Col key={index} className="w-full xl:w-6/12 p-[15px]">
                  <div
                    className="bg-center min-h-[240px] bg-cover bg-no-repeat relative after:absolute after:inset-0 after:bg home-banner after:z-10"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="p-[50px] text-start relative z-40">
                      <h2 className="text-[15px] text-[#fbb71c] font-normal ">
                        {item.title}
                      </h2>
                      <p className="text-white mb-[15px] text-[24px] font-poppins pr-[30%]  ">
                        {item.desc}
                      </p>
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
