import React from "react";
import Slider from "react-slick";
import { fakeData } from "../../assets/data";
import {
  Button,
  ButtonArrow,
  Col,
  Container,
  ProductCardGridV2,
  Row,
} from "../../Components";
import Hero from "./Content/Hero";

const bannerData = fakeData(4, (i) => {
  return {
    title: "25% BIG OFFER ",
    desc: `Modern Auto Wheel Up To 25% Offer ${i + 1}`,
    image: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/of-bg-1.jpg`,
  };
});

const exclusiveProducts = fakeData(8, (i) => {
  return {
    rating: Math.floor(Math.random() * 5) + 1,
    title: `Titanium Wheel Cover ${i}`,
    name: `Product Name ${i}`,
    description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem udantium, totam rem aperiam, eaque ipsa quae abventore ${i}`,
    price: 99.99,
    isOnSale: true,
    salePrice: 79.99,
    image:
      "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-1.jpg",
    categories: [].push(i),
  };
});

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>

      <section>
        <div className="mt-[200px] pb-[50px]">
          <Container>
            <Row>
              {bannerData.map((item, index) => {
                return (
                  <Col key={index} className="w-6/12 p-[15px]">
                    <div
                      className="bg-center bg-cover bg-no-repeat relative after:absolute after:inset-0 after:bg home-banner after:z-10"
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
      </section>

      <section>
        <div className="pb-20">
          <Container>
            <div className="p-[15px]  text-center flex justify-center">
              <div className="w-6/12 mb-[25px]">
                <h2 className="mb-[15px] font-poppins text-[27px] text-black leading-[32px] font-semibold">
                  Exclusive Products{" "}
                </h2>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                  esse quam nihil molestiae consequatur vel illum dolorem
                </p>
              </div>
            </div>
            <div className="">
              <Row>
                {exclusiveProducts.map((product) => {
                  return (
                    <Col className="w-3/12">
                      <div className="mb-[35px]">
                        <ProductCardGridV2 {...product} />
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>

            <div className="flex justify-center">
              <ButtonArrow
                Tag="Link"
                to="/shop"
                className="py-[11px] px-[40px] leading-[27px] rounded-[28px] border-2 border-solid text-[#777777] hover:bg-main-color hover:border-main-color hover:text-white transition-all duration-[500] ease-out border-border-color bg-white"
              >
                View More Products
              </ButtonArrow>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Home;
