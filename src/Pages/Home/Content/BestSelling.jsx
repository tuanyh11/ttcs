import React from 'react'
import Slider from 'react-slick';
import { fakeData } from '../../../assets/data';
import { Container, NextButton, PreButton, ProductCardGrid } from '../../../Components';

const bestSellingProducts = fakeData(8, (i) => {
    return {
      id: new Date().getTime() + i,
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

const BestSelling = () => {


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
                  {bestSellingProducts.map((product, i) => {
                    return (
                      <div key={i}>
                        <div className="px-[15px]">
                          <ProductCardGrid {...product} />
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