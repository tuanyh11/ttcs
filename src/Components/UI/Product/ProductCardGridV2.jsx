import React from "react";
import { Link } from "react-router-dom";

const ProductCardGridV2 = ({
  image,
  title,
  salePrice,
  price,
  description,
  id,
  rating = 0,
  isOnSale = false,
  onQuickView = () => {},
}) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;
  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <i key={i} className="fa fa-star filled text-[#F6BC3E] text-xs"></i>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <i
        key={filledStars + i}
        className="fa-regular fa-star text-[#ccc] text-xs"
      ></i>
    );
  }

  const saleInfo = isOnSale ? -Math.round((1 - salePrice / price) * 100) : null;
  return (
    <div>
      <div className="group">
        <div className="mb-5 relative">
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
            <div className="relative z-50">
              <button className="fa-solid fa-cart-shopping w-[35px] h-[35px] mx-[5px] bg-white rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible opacity-0 invisible "></button>
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
            </div>
          </div>
        </div>

        <div className="text-start font-poppins flex justify-between items-center">
          <div>
            <Link
              to={`/product/:id`}
              className=" text-[15px] text-black  font-semibold hover:text-main-color transition-all duration-300"
            >
              {title}
            </Link>

            <p className=" font-semibold ">
              <del className="text-[#696969] text-sm mr-1">${salePrice}</del>
              <span className="text-main-color ">${price}</span>
            </p>
          </div>
          <div >
            <button className="fa-solid fa-heart w-10 h-10  bg-white border border-border-color rounded-full hover:bg-main-color hover:text-white transition-all duration-500 ease-out "></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardGridV2;
