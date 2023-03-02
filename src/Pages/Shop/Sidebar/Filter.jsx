import React, { useState } from "react";
import { Link } from "react-router-dom";
import RangeSlider from "react-range-slider-input";
import { useShopContext } from "../../../hooks";
import { getRangePriceProduct } from "../../../api";

const Filter = () => {

  const {currency, max} = getRangePriceProduct()
  const [price, setPrice] = useState([0, max])

  const {state: {handleFilterPrice}} =  useShopContext()


  return (
    <div>
      <div className="py-10 px-[30px]  border border-[#f7f7f7] shadow-[0_5px_0_rgb(200_200_200/20%] ">
        <h4 className="pb-[13px] mb-7 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Filter by price
        </h4>
        <div>
 
          <div className="mb-6">
            <RangeSlider min={0} max={max} className="filter-price h-1" onInput={(e) => setPrice(e)} />
          </div>
          <div className="flex items-center justify-between">
            <button onClick={() => handleFilterPrice(price)}  className="bg-main-color  py-[5px] px-[10px] uppercase text-white">
              filter
            </button>

            <div className="">
              Price:
              <span className="mx-1">{currency}{price?.[0]}</span>-<span className="ml-1">{currency}{price?.[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
