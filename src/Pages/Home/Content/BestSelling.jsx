import React from 'react'
import Slider from 'react-slick';
import { Container, NextButton, PreButton, ProductCardGrid } from '../../../Components';


const BestSelling = ({data}) => {


    const bestSellingSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextButton />,
        prevArrow: <PreButton />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div>
         <div className="mt-[65px] mb-20">
          <Container>
            <div className="md:p-[15px]  text-center flex justify-center">
              <div className="w-full md:w-9/12 lg:w-6/12  mb-[25px]">
                <h2 className="mb-[15px] font-poppins text-[27px] text-black leading-[32px] font-semibold">
                  Best Selling Products{" "}
                </h2>
                <p>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur vel illum dolorem
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                <Slider {...bestSellingSettings} className="-mx-[15px]">
                  {data?.map((product, i) => {
                    return (
                      <div key={i}>
                        <div className="px-[15px]">
                          <ProductCardGrid {...product?.node} />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </Container>
        </div>
    </div>
  )
}

  

export default BestSelling