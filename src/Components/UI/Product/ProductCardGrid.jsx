import React, { useState } from "react";
import { Link } from "react-router-dom";
import { generateStart } from "../../../utils";
import { useCartStore, useUiStore } from "../../store";

const ProductCardGrid = ({
  featuredImage,
  name,
  description,
  id,
  salePrice,
  regularPrice = 0,
  slug,
  averageRating,
  shortDescription,
  ...rest
}) => {
  const stars = generateStart(averageRating);
  const product = {
    featuredImage,
    name,
    description,
    id,
    salePrice,
    regularPrice,
    slug,
    averageRating,
    shortDescription,
    ...rest,
  };

  const {selectProduct} = useUiStore()

  const saleInfo = salePrice
    ? -Math.round(
        (1 -
          Number(salePrice?.toString()?.substring(1)) /
            Number(regularPrice?.toString()?.substring(1))) *
          100
      )
    : null;

  const handleQuickView = function (e) {
    e.preventDefault();
    selectProduct(product, true)
  };

  const { hasProduct, addItem } = useCartStore();

  const handleAddToCart = function (e, item) {
    e.preventDefault();
    addItem(product);
  };

  return (
    <div>
      <div className="group">
        <div className="mb-5 relative">
          <Link to={`/product/${name}`} state={{id}}>
            <img
              src={featuredImage?.node?.mediaItemUrl}
              alt=""
              className="w-full h-full"
            />
            {salePrice && (
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
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="far fa-cart-plus w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "
                ></button>
                {hasProduct(id) && (
                  <button className="fa-solid fa-check w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
                )}
                <button
                  onClick={handleQuickView}
                  className="far fa-search-plus w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "
                ></button>
                <button className="fa-solid fa-heart w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center font-poppins">
          <div className="leading-[1]">{stars}</div>

          <Link
            to={`/product/${name}`} state={{id}}
            className=" text-[15px] text-black  font-semibold hover:text-main-color transition-all duration-300"
          >
            {name}
          </Link>

          <p className=" font-semibold ">
            <del className="text-[#696969] text-sm mr-1">{salePrice}</del>
            <span className="text-main-color ">{regularPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGrid;
