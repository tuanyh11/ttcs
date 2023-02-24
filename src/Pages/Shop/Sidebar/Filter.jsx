import React from "react";
import { Link } from "react-router-dom";
import RangeSlider from "react-range-slider-input";

const Filter = () => {

  return (
    <div>
      <div className="py-10 px-[30px]  border-[2px] shadow-[0_5px_0_rgb(200_200_200/20%] ">
        <h4 className="pb-[13px] mb-7 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Filter by price
        </h4>
        <div>
 
          <div className="mb-6">
            <RangeSlider className="filter-price h-1" onInput={(e) => console.log(e)} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-main-color  py-[5px] px-[10px] uppercase text-white">
              filter
            </button>

            <div className="">
              Price:
              <span className="mx-1">0</span>-<span className="ml-1">700</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
