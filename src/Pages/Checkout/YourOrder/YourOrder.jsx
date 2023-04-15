import currency from "currency.js";
import React, { useState } from "react";
import { formatMoney } from "../../../utils";



const YourOrder = ({ items, total }) => {



  return (
    <div className=" sm:px-[15px] px-0">
      <h3 className="text-[27px] mb-[10px] font-poppins font-semibold text-dark-color mt-[20px]">
      Đơn đặt hàng của bạn
      </h3>
      <div className="overflow-x-auto">
        <table className="mb-[20px] w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left border-[1px] border-[#dee2e6] p-[15px]">
                 Sản Phẩm
              </th>
              <th className="text-left border-[1px] border-[#dee2e6] p-[15px]">
                Tổng
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const name = item?.name;
              const quantity = item?.quantity;
              const subTotal = Number(item.price.raw) * item.quantity;
              return (
                <tr>
                  <td className="text-left border-[1px] border-[#dee2e6] p-[15px]">
                    {name}&nbsp;<strong>x&nbsp;{quantity}</strong>
                  </td>
                  <td className="text-left border-[1px] border-[#dee2e6] p-[15px]">
                    {formatMoney(subTotal)}
                  </td>
                </tr>
              );
            })}

            {/* <tr>
              <td className="text-left border-[1px] border-[#dee2e6] p-[15px]">
                <strong>Subtotal</strong>
              </td>
              <td className="text-left border-[1px] border-[#dee2e6] p-[15px]">
                {formatMoney(total)}
              </td>
            </tr> */}
            <tr>
              <td className="text-left border-[1px] border-[#dee2e6] p-[15px]">
                <strong>Tổng</strong>
              </td>
              <td className="text-left border-[1px] border-[#dee2e6] p-[15px]">
                <strong>
                  {formatMoney(total)}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default YourOrder;
