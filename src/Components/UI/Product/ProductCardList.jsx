import React from "react";
import { Link } from "react-router-dom";
import { generateStart } from "../../../utils";
import ButtonV1 from "../../Common/Button/Button";
import Col from "../../Common/Col/Col";
import Row from "../../Common/Row/Row";

const ProductCard = ({
  image,
  title,
  salePrice,
  price,
  description,
  id,
  rating,
  isOnSale,
  onQuickView = () => {},
}) => {
  const stars = generateStart(rating);

  const saleInfo = isOnSale ? -Math.round((1 - salePrice / price) * 100) : null;
  return (
    <div>
      <Row className="group ">
        <Col className="w-full lg:w-4/12">
          <div className=" relative">
            <Link to={`/product/${id}`}>
              <img src={image} alt="" className="w-full h-full" />
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
                  <button onClick={(e) => e.preventDefault()} className="fa-solid fa-cart-shopping w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
                  <button
                    onClick={() =>
                      onQuickView({
                        image,
                        title,
                        salePrice,
                        price,
                        description,
                        id,
                        rating,
                        isOnSale,
                        stars,
                      })
                    }
                    className="fa-solid fa-magnifying-glass w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "
                  ></button>
                  <button className="fa-solid fa-heart w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
                </div>
              </div>
            </Link>
          </div>
        </Col>

        <Col className="w-full  lg:w-8/12">
          <div className="mt-[30px] px-[15px] pt-[10px] pb-[15px]">
            <div className="leading-[1] mb-2">{stars}</div>

            <Link
              to={`/product/:id`}
              className=" text-lg mb-1 font-poppins block text-black  font-semibold hover:text-main-color transition-all duration-300"
            >
              {title}
            </Link>

            <p className=" mb-[5px]">
              <del className="text-[#696969] text-sm mr-1">${salePrice}</del>
              <span className="text-main-color ">${price}</span>
            </p>

            <p className=" line-clamp-3 pb-4">{description}</p>

            <ButtonV1
              Tag="Link"
              to={`/product/${id}`}
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
