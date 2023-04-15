import React, { useState } from "react";
import { Link } from "react-router-dom";
import { generateStart } from "../../../utils";
import ButtonV1 from "../../Common/Button/Button";
import Col from "../../Common/Col/Col";
import Row from "../../Common/Row/Row";
import { useCartStore } from "../../store";
import QuickView from "./QuickView";
import urlSlug from "url-slug";
import Popup from "reactjs-popup";
import Button from "../../Common/Button/Button";
// import { Button } from "bootstrap";

const ProductCard = (props) => {
  const saleInfo = null;
  // salePrice
  //   ? -Math.round(
  //       (1 -
  //         Number(salePrice) /
  //           Number(price)) *
  //         100
  //     )
  //   : null;

  const {
    images,
    name,
    description,
    _id,
    salePrice,
    price,
    slug,
    inStock,
    averageRating,
    shortDescription,
  } = props;

  const stars = generateStart(averageRating);
  const image = images?.[0];

  const [isOpen, setIsOpen] = useState(false);

  const { hasProduct, addItem, addToWishlistItems, isInWishList } =
    useCartStore();

  const handleAddToCart = function (e) {
    e.preventDefault();
    addItem({ ...props, quantity: 1 });
  };

  const handleAddToWish = function (e) {
    e.preventDefault();
    addToWishlistItems({ ...props, quantity: 1 });
  };

  const isAlreadyInWishlist = isInWishList(_id);

  return (
    <div>
      {isOpen && (
        <QuickView {...product} onQuickViewClick={() => setIsOpen(false)} />
      )}
      <Row className="group ">
        <Col className="w-full lg:w-4/12">
          <div className=" relative">
            <div>
              <Link to={`/product/${urlSlug(name)}`} state={{ _id }}>
                <img src={images?.[0]} alt="" className="w-full h-full" />
                {salePrice && (
                  <span className=" absolute z-[70] text-white bg-main-color translate-x-4 px-[7px] py-1 text-xs leading-[1] translate-y-4 top-0 left-0 rounded-sm">
                    {saleInfo}%
                  </span>
                )}
              </Link>
              {saleInfo && (
                <span className=" absolute z-[70] text-white bg-main-color translate-x-4 px-[7px] py-1 text-xs leading-[1] translate-y-4 top-0 left-0 rounded-sm">
                  {saleInfo}%
                </span>
              )}
              <div
                className="absolute z-10 top-1/2 left-1/2 text-black/80  -translate-x-1/2 after:opacity-0 after:invisible font-poppins
                            -translate-y-1/2 w-full h-full flex justify-center items-center after:inset-0 after:absolute after:z-40  
                            after:bg-[rgba(0,0,0,0.55)] group-hover:after:opacity-100 group-hover:after:visible after:transition-all after:duration-[400] after:ease-out "
              >
                <div className="relative z-[99999]">
                  {inStock && (
                    <button
                      onClick={(e) => handleAddToCart(e)}
                      className="far fa-cart-plus  w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "
                    ></button>
                  )}
                  {hasProduct(_id) && (
                    <button className="fa-solid fa-check w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
                  )}
                  <Popup
                    nested
                    modal
                    overlayStyle={{
                      zIndex: 999999999999,
                    }}
                    trigger={
                      <button className="far fa-search-plus w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
                    }
                  >
                    {(close) => (
                      <QuickView {...props} onQuickViewClick={() => close()} />
                    )}
                  </Popup>
                  <Popup
                    modal
                    nested
                    overlayStyle={{
                      zIndex: 999999999999,
                    }}
                    trigger={
                      <button
                        onClick={handleAddToWish}
                        className="fa-regular fa-heart w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "
                      ></button>
                    }
                  >
                    {(close) => (
                      <div className=" bg-white  opacity-100 ">
                        <div className="max-w-[360px] w-full  p-10  z-[9999999999999999]">
                          <div className="text-center">
                            <button className=" fa-solid fa-check"></button>
                            <span className="block mb-[25px]">
                              {isAlreadyInWishlist
                                ? `"${props?.name}" Already in Wishlist`
                                : `"${props?.name}" added to Wishlist`}
                            </span>
                            <div className="mb-[10px]">
                              <Button
                                className={"block w-full"}
                                Tag={"Link"}
                                to="/wishlist"
                                // onClick={() => setIsOpeningWishlist(false)}
                                children={
                                  <>
                                    <i className="fa-regular fa-heart mr-[6px] text-base"></i>{" "}
                                    VIEW WISHLIST
                                  </>
                                }
                              />
                            </div>
                            <div className="mb-[10px]">
                              <Button
                                className={"block w-full"}
                                onClick={close}
                                children={
                                  <>
                                    <i className="fa-sharp fa-solid fa-xmark mr-[6px] "></i>{" "}
                                    CLOSE
                                  </>
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col className="w-full  lg:w-8/12">
          <div className="mt-[30px] px-[15px] pt-[10px] pb-[15px]">
            <div className="leading-[1] mb-2">{stars}</div>

            <Link
              to={`/product/${urlSlug(name)}`}
              state={{ _id }}
              className=" text-lg mb-1 font-poppins block text-black  font-semibold hover:text-main-color transition-all duration-300"
            >
              {name}
            </Link>

            <p className=" mb-[5px]">
              {/* <del className="text-[#696969] text-sm mr-1">{salePrice}</del> */}
              <span className="text-main-color ">{price?.formatted}</span>
            </p>

            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className=" line-clamp-3 mb-4"
            />

            <ButtonV1
              Tag="Link"
              to={`/product/${urlSlug(name)}`}
              state={{ _id }}
              className=" rounded-[28px] px-5 py-[6px] leading-[23px]"
            >
              Shop Now
              <i className="fa-solid fa-circle-arrow-right ml-[10px]"></i>
            </ButtonV1>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCard;
