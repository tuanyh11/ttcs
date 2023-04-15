import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { generateStart } from "../../../utils";
import { useCartStore, useUiStore } from "../../store";
import urlSlug from "url-slug";
import Popup from "reactjs-popup";
import Button from "../../Common/Button/Button";
import QuickView from "./QuickView";

const ProductCardGrid = (props) => {
  const {
    images,
    name,
    description,
    _id,
    salePrice,
    inStock,
    price,
    slug,
    averageRating,
    shortDescription,
  } = props;

  const stars = generateStart(averageRating);
  const saleInfo = null;
  // salePrice
  //   ? -Math.round(
  //       (1 -
  //         Number(salePrice) /
  //           Number(price.raw)) *
  //         100
  //     )
  //   : null;



  const { hasProduct, addItem, addToWishlistItems, isInWishList } =
    useCartStore();

  const handleAddToCart = function (e) {
    // e.preventDefault();
    addItem({ ...props, quantity: 1 });
  };

  const handleAddToWish = function (e) {
    e.preventDefault();
    addToWishlistItems({ ...props, quantity: 1 });
  };

  const isAlreadyInWishlist = isInWishList(_id);
  // console.log(isInWishList);

  return (
    <div>
      <div className="group">
        <div className="mb-5 relative">
          <div>
            <Link to={`/product/${urlSlug(name)}`} state={{ _id }}>
              <img src={images?.[0]} alt="" className="w-full h-full" />
              {salePrice && (
                <span className=" absolute z-[70] text-white bg-main-color translate-x-4 px-[7px] py-1 text-xs leading-[1] translate-y-4 top-0 left-0 rounded-sm">
                  {saleInfo}%
                </span>
              )}
            </Link>
            <div
              className="absolute z-10 top-1/2 left-1/2 text-black/80  -translate-x-1/2 after:opacity-0 after:invisible font-poppins
                        -translate-y-1/2 w-full h-full flex justify-center items-center after:inset-0 after:absolute after:z-40  
                        after:bg-[rgba(0,0,0,0.55)] group-hover:after:opacity-100 group-hover:after:visible after:transition-all after:duration-[400] after:ease-out "
            >
              <div className="relative z-[99999]">
                {inStock && (
                  <button
                    onClick={handleAddToCart}
                    className="far fa-cart-plus w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "
                  ></button>
                )}
                {hasProduct(_id) && (
                  <button className="fa-solid fa-check w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
                )}

                <Popup
                  nested
                  modal
                  overlayStyle={
                    {
                      zIndex: 999999999999
                    }
                  }
                  trigger={
                    <button
                      className="far fa-search-plus w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "
                    ></button>
                  }
                >
                  {(close) => (
                    <QuickView {...props} onQuickViewClick={() => close()} />
                  )}
                </Popup>
                {/* <button
                  onClick={handleQuickView}
                  className="far fa-search-plus w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "
                ></button> */}

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
        <div className="text-center font-poppins">
          <div className="leading-[1]">{stars}</div>

          <Link
            to={`/product/${urlSlug(name)}`}
            state={{ _id }}
            className=" text-[15px] text-black  font-semibold hover:text-main-color transition-all duration-300"
          >
            {name}
          </Link>

          <p className=" font-semibold ">
            {/* <bdi className="text-[#696969] text-sm mr-1">{salePrice}</bdi> */}
            <bdi className="text-main-color  ">{price?.formatted}</bdi>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;
