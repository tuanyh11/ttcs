import React from 'react'
import Slider from 'react-slick';
import { fakeData } from '../../../assets/data';
import { Container } from '../../../Components';
const brandsData = fakeData(8, (i) => {
    return {
      id: Math.floor(Math.random() * 5) + 1,
      image: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-${
        Math.floor(Math.random() * 6) + 1
      }.png`,
    };
  });
const Brand = () => {

  

  const brandSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div>
        <div className="py-[60px] bg-main-color">
          <Container>
            <Slider {...brandSettings}>
              {brandsData.map((brand, i) => {
                return <div  key={i}>
                  <img src={brand.image} alt="" className="max-w-full mx-auto" />
                </div>;
              })}
            </Slider>
          </Container>
        </div>
    </div>
  )
}

export default Brand