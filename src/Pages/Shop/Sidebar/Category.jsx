import React, { useContext } from "react";
import { useShopContext } from "../../../hooks";

const Categories = () => {
  const trackRef = React.useRef(null);

  const thumbRef = React.useRef(null);

  const categories = [...Array.from(new Array(4), (v, k) => ({
    name: `Camshafts & Bearing ${k + 1}`,
    id: k
  }))];

  const {state: {filter ,handleOnSelectCate}} = useShopContext()

  return (
    <div>
      <div className="py-10 px-[30px]  border-[2px] shadow-[0_5px_0_rgb(200_200_200/20%] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Categories
        </h4>
        <div>
          <ul className="">
            {categories.map((category, index) => (
              <li key={index} className="pb-[15px]">
                <div  className="group">
                  <input
                    type="checkbox"
                    className=" opacity-0  hidden input-shop"
                    name=""
                    id={`input-cate${index}`}
                    onChange={(e) => handleOnSelectCate(category)}
                    checked={filter?.category?.some((item) => item.id === category.id)}
                  />
                  <label className="cursor-pointer flex items-center gap-[10px] hover:text-main-color transition duration-300" htmlFor={`input-cate${index}`}>
                    <span className={`w-4 h-4  border inline-block relative after:opacity-0 group-hover:after:opacity-100 after:-rotate-45 after:border-solid after:border-[#222] after:border-t-0 after:border-r-0 after:border-b-[2px] after:border-l-[2px] after:h-[4px] after:w-[8px] after:absolute  after:top-[4px] after:left-[3px]`}></span>
                    <span className=" line-clamp-1">{category.name}</span>
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
