import { useEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";
import { NextButton, PreButton } from "../../../Components";
import { fakeData } from "../../../utils";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function SampleNextArrow(props) {
  const { onClick } = props;
  const handleOnClick = (e) => {
    e.stopPropagation();
    onClick(e);
  };
  return (
    <div
      className={
        "absolute top-1/2   fa-solid fa-arrow-right cursor-pointer w-[32px] h-[32px] hover:opacity-100 -translate-y-1/2 right-4 text-white opacity-[0.75]"
      }
      onClick={handleOnClick}
    />
  );
}

function SamplePrevArrow(props) {
  const handleOnClick = (e) => {
    e.stopPropagation();
    onClick(e);
  };
  const { onClick } = props;
  return (
    <div
      onClick={handleOnClick}
      className={` absolute top-1/2   fa-solid fa-arrow-left cursor-pointer w-[32px] h-[32px] hover:opacity-100 -translate-y-1/2 left-4 text-white opacity-[0.75]`}
    />
  );
}

const BodyLeft = ({ featuredImage, galleryImages = [] }) => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentSlider, setCurrentSlider] = useState(0);
  const handle = useFullScreenHandle();
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

  const settingSwiper = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,
    swipeToSlide: true,
    swipe: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [isOpening, setIsOpening] = useState(false);

  const swiperRef = useRef(null);

  useEffect(() => {
    function handleClickInside(event) {
      if (swiperRef.current && swiperRef.current.contains(event.target)) {
        setIsOpening((pre) => !pre);
      }
    }
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    document.addEventListener("click", handleClickInside);

    return () => {
      document.removeEventListener("click", handleClickInside);
      window.removeEventListener("resize", handleResize);
    };
  }, [swiperRef]);

  console.log(isOpening);

  return (
    <div>
      <Slider {...settings1} ref={slider1}>
        {galleryImages?.map((image, j) => {
          return (
            <div key={j} className="">
              <img
                onClick={() => setIsOpening(true)}
                className="w-full p-2 bg-white border border-[#ddd] outline-none overflow-hidden"
                src={image}
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
            <div key={image}>
              <div className=" w-full px-1">
                <img
                  className="w-full p-2 bg-white border border-[#ddd] outline-none overflow-hidden"
                  src={image}
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </Slider>

      {isOpening && (
        <div className="fixed inset-0 z-[99999999] bg-[#000000]">
          <FullScreen handle={handle}>
            <div className="px-[10px] text-white text-[13px] flex justify-between relative z-[99999999] ">
              <span className="h-11 w-11  leading-[44px] opacity-[0.75]">
                {" "}
                {currentSlider + 1} / {galleryImages?.length}
              </span>
              <div className="">
                {!handle.active ? (
                  <button
                    onClick={handle.enter}
                    className={`fa-regular fa-expand text-xl h-11 w-11 leading-[44px]`}
                  ></button>
                ) : (
                  <button
                    onClick={handle.exit}
                    className={`fa-solid fa-down-left-and-up-right-to-center text-xl h-11 w-11 leading-[44px]`}
                  ></button>
                )}
                <button
                  onClick={() => setIsOpening(false)}
                  className="fa-sharp fa-solid fa-xmark text-xl  h-11 w-11  leading-[44px]"
                ></button>
              </div>
            </div>
            <div
              ref={swiperRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999999] w-full"
            >
              <div className="">
                <Slider
                  {...settingSwiper}
                  beforeChange={(e, i) => setCurrentSlider(i)}
                >
                  {galleryImages?.map((image) => {
                    return (
                      <div key={image?.id} className="flex justify-center">
                        <img
                          className="    mx-auto  max-w-full border-[#ddd] outline-none overflow-hidden"
                          src={image?.mediaItemUrl}
                          style={{width: `${screenWidth <= 857 ? screenWidth - 17 : 800}px`, height: `${screenWidth <= 857 ? screenWidth - 17 : 800}px`}}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </FullScreen>
        </div>
      )}
    </div>
  );
};

export default BodyLeft;
