import { useRef } from "react";
import Slider from "react-slick";
import { NextButton, PreButton } from "../../../Components";
import { fakeData } from "../../../utils";



const BodyLeft = ({featuredImage, galleryImages}) => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: slider2.current,
    focusOnSelect: true,
  };

  const settings2 = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: slider1.current,
    nextArrow: (
      <NextButton classCustom={"!translate-y-[10%] btn-right !right-14 "} />
    ),
    prevArrow: (
      <PreButton classCustom={"!translate-y-[10%] btn-left !left-10 "} />
    ),
    focusOnSelect: true,
  };

  return (
    <div>
      <Slider {...settings1} ref={slider1}>
        {galleryImages?.map((image) => {

          return (
            <div key={image?.id} className="">
              <img
                className="w-full p-2 bg-white border border-[#ddd] outline-none overflow-hidden"
                src={image?.mediaItemUrl}
                alt=""
              />
            </div>
          );
        })}
      </Slider>

      <Slider
        {...settings2}
        ref={slider2}
        className="-mx-[3px] product-detail-slider"
      >
        {galleryImages?.map((image) => {
          return (
            <div key={image?.id}>
              <div className=" w-full px-1">
                <img
                  className="w-full p-2 bg-white border border-[#ddd] outline-none overflow-hidden"
                  src={image?.mediaItemUrl}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BodyLeft;
