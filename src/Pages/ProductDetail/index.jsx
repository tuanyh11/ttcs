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
    <div>ProductDetail</div>
  )
}
