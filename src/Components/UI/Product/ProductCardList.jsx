import React, { useState } from "react";
import { Link } from "react-router-dom";
import { generateStart } from "../../../utils";
import ButtonV1 from "../../Common/Button/Button";
import Col from "../../Common/Col/Col";
import Row from "../../Common/Row/Row";
import { useCartStore } from "../../store";
import QuickView from "./QuickView";
import urlSlug from 'url-slug'

const ProductCard = ({
  featuredImage,
  name,
  id,
  salePrice,
  regularPrice = 0,
  slug,
  shortDescription,
  averageRating,
  description,
  ...rest
}) => {
  const stars = generateStart(averageRating);
  const image = featuredImage?.node?.mediaItemUrl
  
  const saleInfo = salePrice
    ? -Math.round(
        (1 -
          Number(salePrice?.toString()?.substring(1)) /
            Number(regularPrice?.toString()?.substring(1))) *
          100
      )
    : null;

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

    const handleQuickView = function (e) {
      e.preventDefault();
      setIsOpen(true);
    };

  const [isOpen, setIsOpen] = useState(false);

  const { hasProduct, addItem, addToWishlistItems } = useCartStore();

  const handleAddToCart = function (e) {
    e.preventDefault();
    addItem(product);
  };

  const handleAddToWish = function (e) {
    e.preventDefault();
    addToWishlistItems(product);
  };

  return (
    <div>
          {isOpen && (
        <QuickView {...product} onQuickViewClick={() => setIsOpen(false)} />
      )}
      <Row className="group ">
        <Col className="w-full lg:w-4/12">
          <div className=" relative">
            <Link  to={`/product/${urlSlug(name)}`} state={{id}}>
              <img src={ image} alt="" className="w-full h-full" />
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
                  <button onClick={(e) => handleAddToCart(e)} className="far fa-cart-plus  w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
                  {hasProduct(id) && (
                  <button className="fa-solid fa-check w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
                )}
                  <button
                    onClick={handleQuickView}
                    className="far fa-search-plus w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "
                  ></button>
                  <button onClick={handleAddToWish} className="fa-regular fa-heart w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
                </div>
              </div>
            </Link>
          </div>
        </Col>

        <Col className="w-full  lg:w-8/12">
          <div className="mt-[30px] px-[15px] pt-[10px] pb-[15px]">
            <div className="leading-[1] mb-2">{stars}</div>

            <Link
               to={`/product/${urlSlug(name)}`} state={{id}}
              className=" text-lg mb-1 font-poppins block text-black  font-semibold hover:text-main-color transition-all duration-300"
            >
              {name}
            </Link>

            <p className=" mb-[5px]">
              <del className="text-[#696969] text-sm mr-1">{salePrice}</del>
              <span className="text-main-color ">{regularPrice}</span>
            </p>

            <div dangerouslySetInnerHTML={{__html: shortDescription}} className=" line-clamp-3 mb-4"/>

            <ButtonV1
              Tag="Link"
               to={`/product/${urlSlug(name)}`} state={{id}}
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
