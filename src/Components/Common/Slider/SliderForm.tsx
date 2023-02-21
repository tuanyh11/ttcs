import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderForm = () => {
  const dt = [
    { nam: 'https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-2.png' },
    { nam: 'https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-3.png' },
    { nam: 'https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-4.png' },
    { nam: 'https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-5.png' },
    { nam: 'https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-6.png' },
    { nam: 'https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-2.png' },
    { nam: 'https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-3.png' },
    { nam: 'https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-4.png' },
    { nam: 'https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-5.png' },
    { nam: 'https://klbtheme.com/chakta/wp-content/uploads/2021/01/client-6.png' },

  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  };
  return (
    <div className="elementor-widget-container">
      <div className="bg-[#ff4545] py-16">
        <div className="container-form max-w-[1200px] ml-auto mr-auto relative px-4">
          <Slider {...settings}>
            {
              dt.map((item, index) => (
                <div className="sponsor-item text-center" key={index}>
                  <a href="#">
                    <img src={item.nam}
                      className="ml-auto mr-auto h-auto "
                      alt="img" />
                  </a>
                </div>
              ))
            }
          </Slider>


        </div>
      </div>
    </div>
  );
}
export default SliderForm;