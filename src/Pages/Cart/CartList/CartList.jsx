import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../../Components/store";
import currency from "currency.js";

const CartList = () => {
  const { items } = useCartStore();

  return (
    <form className="overflow-x-auto">
      <table className="max-w-full bg-transparent w-full border-gray-500">
        <thead>
          <tr>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              &nbsp;
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Product
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Price
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Quantity
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Subtotal
            </th>
            <th className="text-center border-[1px] border-[#dee2e6] p-[8px]">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const image = item?.featuredImage?.node?.mediaItemUrl;
            const price = item?.salePrice || item?.regularPrice;
            const priceNumber = currency(price);
            const subTotal = currency(item.quantity * priceNumber?.intValue, {fromCents: true, decimal: "."}).format();
            const name = item?.name;
            const id = item?.id;

            return (
              <tr>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  <Link to={`/product/${name}`} state={{id}}>
                    <img
                      src={image}
                      alt=""
                      className="w-[90px] mx-auto h-[90px] "
                    />
                  </Link>
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  <Link to={`/product/${name}`} state={{id}}>{item?.name}</Link>
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  {price}
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  <div className="inline-flex justify-self-stretch">
                    <div className="dec w-[50px] h-[50px] bg-transparent border-[1px] border-[#eaeaea] cursor-pointer text-center pt-[10px] ">
                      <i className="fa-solid fa-minus"></i>
                    </div>
                    <input
                      className="w-[50px] h-auto bg-transparent border-[1px] border-[#eaeaea] text-center focus:outline-none"
                      value={item.quantity}
                      type="text"
                    />
                    <div className="inc w-[50px] h-[50px] bg-transparent border-[1px] border-[#eaeaea] cursor-pointer text-center pt-[10px]">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px]">
                  {subTotal}
                </td>
                <td className="border-[1px] border-[#dee2e6] text-center py-[20px] px-[10px] cursor-pointer">
                  <i className="fa-solid fa-xmark"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="border-x-[1px] border-b-[1px] py-[20px] px-[10px] sm:flex justify-between block w-full">
        <div className="sm:mb-0 mb-[15px]">
          <input
            className="h-[50px] border-[1px] border[#eaeaea] px-[20px] float-left focus:outline-none"
            type="text"
            placeholder="Coupon code"
          />
          <button className="inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white sm:mt-0 mt-[10px]">
            Apply coupon
          </button>
        </div>
        <button className="inline-block bg-main-color uppercase leading-[50px] font-semibold text-[14px] px-[16px] font-poppins text-white opacity-[0.7]">
          Update cart
        </button>
      </div>
    </form>
  );
};

export default CartList;
