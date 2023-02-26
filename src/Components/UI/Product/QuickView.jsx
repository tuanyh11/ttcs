import { Button } from "bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { generateStart } from "../../../utils";
import ButtonV1 from "../../Common/Button/Button";
import Col from "../../Common/Col/Col";
import Row from "../../Common/Row/Row";
import { useCartStore } from "../../store";

const QuickView = ({
  onQuickViewClick = () => {},
    featuredImage,
    name,
    description,
    id,
    salePrice,
    regularPrice,
    slug,
    averageRating = 0,
    shortDescription
}) => {
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

  const image = featuredImage?.node?.mediaItemUrl

  const stars = generateStart(averageRating)

  const {addItemWithQuantity} = useCartStore()

  const nav = useNavigate()

  const handleOnAddCart = () => {
    addItemWithQuantity({
      featuredImage,
      name,
      description,
      id,
      salePrice,
      regularPrice,
      slug,
      averageRating,
      shortDescription,
      quantity: value
    })
    nav(`/product/${id}`)
  }

  return (
    <div>
      <div className="fixed inset-0 z-[9999999]">
        <div className=" absolute inset-0 bg-[#0b0b0b] opacity-80 z-[9999999]"></div>
        <div className="md:px-[6px] lg:px-5 absolute  md:top-1/2 md:left-1/2 z-[99999999999] md:-translate-y-1/2 md:-translate-x-1/2 w-full xl:max-w-[980px] xl:px-0">
          <button
            onClick={() => onQuickViewClick()}
            className="fa-solid fa-xmark absolute top-0 right-0 text-lg font-semibold -translate-x-4 translate-y-2 md:-translate-x-4 md:translate-y-1  xl:-translate-x-4 xl:translate-y-2 "
          ></button>
          <div className=" w-full  bg-white p-[30px]">
            <Row>
              <Col className={"w-full md:w-6/12 mb-10 md:mb-0 "}>
                <div>
                  <div>
                    <img src={image} alt="" className="w-full h-full" />
                  </div>
                  <ul className="flex -mx-[5px] mt-[10px]">
                    <li className="w-4/12 mx-[5px]">
                      <img src={image} alt="" className="" />
                    </li>
                    <li className="w-4/12 mx-[5px]">
                      <img src={image} alt="" className="" />
                    </li>
                    <li className="w-4/12 mx-[5px]">
                      <img src={image} alt="" className="" />
                    </li>
                  </ul>
                </div>
              </Col>

              <Col className={"w-full md:w-6/12"}>
                <div className="">
                  <h3 className="text-[27px] font-poppins text-black font-semibold">
                    {name}
                  </h3>

                  <p className=" my-4 font-poppins font-semibold ">
                    <del className="text-[#696969] text-sm mr-1 ">
                      {salePrice}
                    </del>
                    <span className="text-main-color text-[19px] ">
                      {regularPrice}
                    </span>
                  </p>
                  <div className="leading-[0.8] mb-[15px]">{stars}</div>
                  <div dangerouslySetInnerHTML={{__html: shortDescription}}>{}</div>

                  <div className="my-5">
                    <span className="">In Stock</span>
                    <div className="flex">
                      <button onClick={() => setValue(Math.max(1, value - 1))} className="fa-solid fa-minus w-[50px] h-[50px] border"></button>
                      <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onBlur={(e) => e.target.value === "" && setValue(1)}
                        className="w-[50px] h-[50px] border outline-none text-center"
                      />
                      <button onClick={() => setValue(value + 1)} className="fa-solid fa-plus w-[50px] h-[50px] border"></button>
                      <div className="ml-3">
                        <ButtonV1 onClick={() => handleOnAddCart()} label={"ADD TO CART"} />
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="uppercase mb-[10px]">
                      <span className="text-black font-medium">sku:</span>
                      <span className="ml-2">SUR4JK74</span>
                    </div>
                    <div className="capitalize flex ">
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
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
