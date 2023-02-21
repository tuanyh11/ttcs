import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "..";
import { useShopContext } from "../../../hooks";

const Popular = () => {
  const categories = [
    ...Array.from(new Array(2), (v, k) => ({
      name: `Camshafts & Bearing ${k + 1}`,
      id: k,
    })),
  ];

  const {
    state: { filter, setFilter, handleOnSelectStatus },
  } = useShopContext();

  return (
    <div>
      <div className="py-10 px-[30px]  border-[2px] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins capitalize">
          Product status
        </h4>
        <div>
          <ul className="">
            {categories.map((status, index) => (
              <li key={index} className="pb-[15px]">
                <div className="group">
                  <input
                    type="checkbox"
                    className=" opacity-0  hidden input-shop "
                    name=""
                    id={`input-productstatus${index}`}
                    onChange={(e) => handleOnSelectStatus(status)}
                    checked={filter?.status?.some(
                      (item) => item.id === status.id
                    )}
                  />
                  <label
                    className="flex items-center  cursor-pointer gap-[10px] hover:text-main-color transition duration-300 "
                    htmlFor={`input-productstatus${index}`}
                  >
                    <span
                      className={`
                      w-4 h-4 border
                     inline-block relative after:opacity-0 group-hover:after:opacity-100 after:-rotate-45 
                     after:border-solid after:border-[#222] after:border-t-0 after:border-r-0 after:border-b-[2px] 
                     after:border-l-[2px] after:h-[4px] after:w-[8px] after:absolute  after:top-[4px] after:left-[3px]
                     `}
                    ></span>
                    <span className="line-clamp-1">{status.name}</span>
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

export default Popular;
