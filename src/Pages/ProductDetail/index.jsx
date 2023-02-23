import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BreadCrumb, Col, Container, NextButton, PreButton, Row } from "../../Components";
import ButtonV1 from "../../Components/Common/Button/Button";
import { fakeData, generateStart } from "../../utils";

const images = fakeData(5, (i) => {
  return {
    url: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-${
      i + 1
    }-600x600.jpg`,
  };
});

const ProductDetail = () => {
  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);

  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: slider2.current,
  }; 

  const settings2 = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: slider1.current,
    nextArrow: <NextButton classCustom={"!translate-y-[10%] btn-right !right-14 "} />,
    prevArrow: <PreButton  classCustom={"!translate-y-[10%] btn-left !left-10 "}/>,
    focusOnSelect: true,
  };

  const [value, setValue] = useState(1);

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      return;
    }
    if (!/[\d]/.test(event.key)) {
      event.preventDefault();
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <BreadCrumb />
      <div className="py-20 bg-[#f7f7f7]">
        <Container>
          <Row>
            <Col className={"w-6/12"}>
              <div className="">
                <Slider {...settings1} ref={slider1}>
                  {images.map((image, index) => {
                    console.log(image);

                    return (
                      <div key={index} className="">
                        <img
                          className="w-full p-2 bg-white border border-[#ddd] outline-none overflow-hidden"
                          src={image.url}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </Slider>

                <Slider {...settings2} ref={slider2} className="-mx-[3px] product-detail-slider">
                  {images.map((image, index) => {

                    return (
                      <div  key={index}>
                        <div className=" w-full px-1">
                        <img
                          className="w-full p-2 bg-white border border-[#ddd] outline-none overflow-hidden"
                          src={image.url}
                          alt=""
                        />
                      </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </Col>
            <Col className={"w-full md:w-6/12"}>
              <div className="py-[50px] px-[70px] bg-white ">
                <h3 className="text-[27px] mb-[10px] font-poppins text-black font-semibold">
                  {"Titanium Wheel Cover"}
                </h3>

                <div className="flex items-center">
                  <div>{generateStart(3)}</div>
                  <p className="ml-2">(1 customer review)</p>
                </div>

                <p className="mb-5 mt-3 font-poppins font-semibold ">
                  <del className="text-[#696969] text-sm mr-1 ">
                    {"£150.00"}
                  </del>
                  <span className="text-main-color text-[19px] ">
                    ${" £120.00"}
                  </span>
                </p>

                <p className="mb-5">
                  {
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem udantium, totam rem aperiam, eaque ipsa quae abventore veritatis et quasi architecto beatae vitae dicta sunt explicabomo enim ipsam"
                  }
                </p>

                <table className=" border border-collapse w-full  ">
                  <tbody>
                    <tr>
                      <th className="p-2 text-start text-black">Make</th>
                      <td>
                        <span className="klb-vehicle-data">
                          <ul>
                            <li>Audi</li>
                          </ul>
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-[#f8f8f8]">
                      <th className="p-2 text-start text-black">Model</th>
                      <td>
                        <span className="klb-vehicle-data">
                          <ul>
                            <li>A5</li>
                          </ul>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-2 text-start text-black">Year</th>
                      <td>
                        <span className="klb-vehicle-data">
                          <ul>
                            <li>2017</li>
                          </ul>
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-[#f8f8f8]">
                      <th className="p-2 text-start text-black">Body Style</th>
                      <td>
                        <span className="klb-vehicle-data">Sedan</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-[25px] mb-5">
                  <h3 className="pb-5 ">In Stock</h3>
                  <div className="flex">
                    <button
                      onClick={() => setValue(Math.max(1, value - 1))}
                      className="fa-solid fa-minus w-[50px] h-[50px] border"
                    ></button>
                    <input
                      type="text"
                      value={value}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      onBlur={(e) => e.target.value === "" && setValue(1)}
                      className="w-[50px] h-[50px] border outline-none text-center"
                    />
                    <button
                      onClick={() => setValue(value + 1)}
                      className="fa-solid fa-plus w-[50px] h-[50px] border"
                    ></button>
                    <div className="ml-3">
                      <ButtonV1 label={"ADD TO CART"} />
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="uppercase mb-[10px]">
                    <span className="text-black font-medium">Sku:</span>
                    <span className="ml-2">SUR4JK74</span>
                  </div>
                  <div className="capitalize flex mb-[10px] ">
                    <span className="text-black font-medium">Category:</span>
                    <div className="ml-2">
                      {[...new Array(3)].map((_, i) => {
                        return (
                          <Link
                            key={i}
                            className=" capitalize"
                            to={`/category/:1`}
                          >
                            Engine Parts + {i + 1} {i === 3 - 1 ? "" : ", "}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex">
                    <span className="text-black font-medium">Share:</span>
                    <div className="ml-2">
                      {[...new Array(3)].map((_, i) => {
                        return (
                          <Link
                            key={i}
                            className=" capitalize"
                            to={`/category/:1`}
                          >
                            <i className="fa-brands fa-facebook text-lg ml-2"></i>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="pt-20 pb-[70px]">
        <Container>
          <ul className="flex border-b-[2px] border-[#ddd]">
            <li className={`capitalize pb-5 relative after:absolute after:w-full after:h-[2px] after:bg-main-color after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0`}>Description</li>
            <li className={`capitalize pb-5 relative after:absolute after:w-full after:h-[2px] after:bg-main-color after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0`}>Additional information</li>
            <li className={`capitalize pb-5 relative after:absolute after:w-full after:h-[2px] after:bg-main-color after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0`}>Reviews (1)</li>
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default ProductDetail;
