import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonV1 from "../../../Components/Common/Button/Button";
import { useCartStore } from "../../../Components/store";
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
    setValue(Number(event.target.value));
  };

  const { state: data } = useProductDetailContext();

  const { addItem } = useCartStore();

  const isLimited = value > data?.quantityInStock;

  const Warning = !isLimited ? null : (
    <div
      class="flex p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
      role="alert"
    >
      <svg
        aria-hidden="true"
        class="flex-shrink-0 inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Warning alert!</span> Số lượng sản phẩm của bạn đã đạt được Số lượng trong kho
      </div>
    </div>
  );

  return (
    <div>
      <div className="py-5 px-[15px] md:py-[50px] md:px-[130px] md:mt-10 lg:mt-0 bg-white ">
        <h3 className="text-[27px] mb-[10px] font-poppins text-black font-semibold">
          {data?.name}
        </h3>

        <div className="flex items-center">
          <div>{generateStart(data?.averageRating)}</div>
          <p className="ml-2">(0 customer review)</p>
        </div>

        <p className="mb-5 mt-3  font-medium ">
          <del className="text-[#696969] text-sm mr-1  ">{data?.salePrice}</del>
          <span className="text-main-color text-[19px] ">
            ${data?.price?.formatted}
          </span>
        </p>

        <div
          className="mb-5 line-clamp-4"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />

        {/* <table className=" border border-collapse w-full  ">
          {data?.act_product?.table?.map((table, i) => {
            const row = table?.row;
            return (
              <tbody key={i}>
                {row?.map((cell, j) => {
                  return (
                    <tr key={j} className={`${j % 2 !== 0 ?'bg-[#f8f8f8]' : ''}`}>
                      <th className="p-2 text-start text-black font-medium">
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
        </table> */}
        <div className="mt-[25px] mb-5">
          <p className="pb-5 ">{data?.inStock ? "In Stock" : "Out of Stock"}</p>
          {Warning}
          {data?.inStock && (
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
                className="w-[50px] h-[50px] text-black border outline-none text-center"
              />
              <button
                onClick={() => setValue(value + 1)}
                className="fa-solid fa-plus w-[50px] h-[50px] border"
              ></button>
              <div className="ml-3">
                <ButtonV1
                  disabled={isLimited}
                  onClick={() =>
                    addItem({ ...data, quantity: value })
                  }
                  label={"ADD TO CART"}
                />
              </div>
            </div>
          )}
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
                      key={i}
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

          {/* <div className="flex">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BodyRight;
