import React from "react";
import { fakeData } from "../../../assets/data";
import { ButtonArrow, Col, Container, ProductCardGridV2, Row } from "../../../Components";

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
  

const Exclusive = () => {
  return (
    <div>
      <div className="pb-20">
        <Container>
          <div className="md:p-[15px]  text-center flex justify-center">
            <div className="w-full md:w-9/12 lg:w-6/12 mb-[25px]">
              <h2 className="mb-[15px] font-poppins text-[27px] text-black leading-[32px] font-semibold">
                Exclusive Products{" "}
              </h2>
              <p>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur vel illum dolorem
              </p>
            </div>
          </div>
          <div>
            <Row>
              {exclusiveProducts.map((product, i) => {
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
    </div>
  );
};

export default Exclusive;
