import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {

  const trackRef = React.useRef(null);

  const thumbRef = React.useRef(null);
  


  return (
    <div>
      <div className="py-10 px-[30px]  border-[2px] shadow-[0_5px_0_rgb(200_200] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
        Filter by price 
        </h4>
        <div>
          <div className=" relative  mb-[25px] ">
            <div className="w-3 absolute top-[-4px] left-0 h-3 bg-main-color rounded-full"></div>
            <span className="h-1 bg-main-color block w-full"></span>
            <div className="w-3 absolute top-[-4px] right-0 h-3 bg-main-color rounded-full"></div>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-main-color  py-[5px] px-[10px] uppercase text-white">
              filter
            </button>

            <div className="">
              Price:

              <span className="mx-1">0</span>
              -
              <span className="ml-1">700</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
