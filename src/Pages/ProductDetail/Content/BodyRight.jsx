import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonV1 from "../../../Components/Common/Button/Button";
import { useProductDetailContext } from "../../../hooks";
import { generateStart } from "../../../utils";

const BodyRight = () => {                                                                                                                           
  const [value, setValue] = useState(1);
  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      return;
    }
    if (!/[\d]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const {state: data} = useProductDetailContext()

  return (
    <div>
      <div className="py-5 px-[15px] md:py-[50px] md:px-[70px] bg-white ">
        <h3 className="text-[27px] mb-[10px] font-poppins text-black font-semibold">
          {data?.name}
        </h3>

        <div className="flex items-center">
          <div>{generateStart(data?.averageRating)}</div>
          <p className="ml-2">(1 customer review)</p>
        </div>

        <p className="mb-5 mt-3 font-poppins font-semibold ">
          <del className="text-[#696969] text-sm mr-1 ">{data?.salePrice}</del>
          <span className="text-main-color text-[19px] ">
            {data?.regularPrice}
          </span>
        </p>

        <div
          className="mb-5"
          dangerouslySetInnerHTML={{ __html: data?.shortDescription }}
        />

        <table className=" border border-collapse w-full  ">
          {data?.act_product?.table?.map((table, i) => {
            const row = table?.row;
            return (
              <tbody key={i}>
                {row?.map((cell, j) => {
                  return (
                    <tr key={j}>
                      <th className="p-2 text-start text-black">
                        {cell?.head}
                      </th>
                      <td>
                        <span className="klb-vehicle-data">
                          <ul>
                            <li
                              dangerouslySetInnerHTML={{
                                __html: cell?.data,
                              }}
                            />
                          </ul>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            );
          })}
        </table>
        <div className="mt-[25px] mb-5">
          <h3 className="pb-5 ">In Stock</h3>
          <div className="flex">
            <button
              onClick={() => setValue(Math.max(1, value - 1))}
              className="fa-solid fa-minus w-[50px] h-[50px] border"
            ></button>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onBlur={(e) => e.target.value === "" && setValue(1)}
              className="w-[50px] h-[50px] border outline-none text-center"
            />
            <button
              onClick={() => setValue(value + 1)}
              className="fa-solid fa-plus w-[50px] h-[50px] border"
            ></button>
            <div className="ml-3">
              <ButtonV1 label={"ADD TO CART"} />
            </div>
          </div>
        </div>

        <div className="">
          {data?.sku && (
            <div className="uppercase mb-[10px]">
              <span className="text-black font-medium">Sku:</span>
              <span className="ml-2">{data?.sku}</span>
            </div>
          )}
          {data?.productCategories && (
            <div className="capitalize flex mb-[10px] ">
              <span className="text-black font-medium">Category:</span>
              <div className="ml-2">
                {data?.productCategories?.edges.map((category, i) => {
                  const node = category?.node;
                  return (
                    <Link
                      key={node?.id}
                      className=" capitalize"
                      to={`/category/${node.id}`}
                    >
                      {node.name} {i === 3 - 1 ? "" : ", "}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex">
            <span className="text-black font-medium">Share:</span>
            <div className="ml-2">
              {[...new Array(3)].map((_, i) => {
                return (
                  <Link key={i} className=" capitalize" to={`/category/:1`}>
                    <i className="fa-brands fa-facebook text-lg ml-2"></i>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyRight;
