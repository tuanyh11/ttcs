import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const trackRef = React.useRef(null);

  const thumbRef = React.useRef(null);

  const categories = [...new Array(10).keys()];

  return (
    <div>
      <div className="py-10 px-[30px]  border-[2px] shadow-[0_5px_0_rgb(200_200_200/20%] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Categories
        </h4>
        <div>
          <ul className="">
            {categories.map((category, index) => (
              <li key={index}>
                <div >
                  <input
                    type="checkbox"
                    className=" opacity-0  hidden"
                    name=""
                    id={`input-${index}`}
                  />
                  <label className="flex items-center gap-[10px]" htmlFor="">
                    <span className="w-4 h-4 border inline-block relative after:-rotate-45 after:border-solid after:border-[#222] after:border-t-0 after:border-r-0 after:border-b-2 after:border-l-2 after:h-[3px] after:w-[7px] after:absolute after:block after:top-2 after:left-[3px]"></span>
                    Camshafts & Bearing
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
