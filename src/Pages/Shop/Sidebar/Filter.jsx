import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RangeSlider from "react-range-slider-input";
import { useShopContext } from "../../../hooks";
import { getRangePriceProduct } from "../../../api";

const Filter = () => {


  const {state: {handleFilterPrice, rangePrice: {max, min}, setFilterPrice, filterPrice}} =  useShopContext()


  return (
    <div>
      <div className="py-10 px-[30px]  border border-[#f7f7f7] shadow-[0_5px_0_rgb(200_200_200/20%] ">
        <h4 className="pb-[13px] capitalize mb-7 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Lọc theo giá
        </h4>
        <div>
 
          <div className="mb-6">
            <RangeSlider min={min} max={max} className="filter-price h-1" onInput={([min, max]) => setFilterPrice({
              min, 
              max
            })} />
          </div>
          <div className="flex items-center justify-between flex-wrap">
            <button onClick={() => handleFilterPrice([filterPrice.min, filterPrice.max])}  className="bg-main-color  py-[5px] px-[10px] uppercase text-white">
              Lọc
            </button>

            <div className="">
              Giá:
              <span className="mx-1">{filterPrice?.min}</span>-<span className="ml-1">{filterPrice?.max}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
