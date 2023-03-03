import React from "react";
import { Link } from "react-router-dom";

const OrderPage = () => {
  return (
    <div>
      {/* <p className=""><Link className="text-main-color" to={"/shop"}>Browse products</Link> products No order has been made yet.</p> */}
      <table className="max-w-[100%] bg-transparent w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left border border-[#dee2e6] p-2">
              <span >Order</span>
            </th>
            <th className="text-left border border-[#dee2e6] p-2">
              <span >Date</span>
            </th>
            <th className="text-left border border-[#dee2e6] p-2">
              <span >Status</span>
            </th>
            <th className="text-left border border-[#dee2e6] p-2">
              <span >Total</span>
            </th>
            <th className="text-left border border-[#dee2e6] p-2">
              <span >Actions</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="woocommerce-orders-table__row woocommerce-orders-table__row--status-on-hold order">
            <td
              className="p-2 text-left border border-[#dee2e6]"
              data-title="Order"
            >
              <Link to={"/"} className="text-main-color">
                #1106{" "}
              </Link>
            </td>
            <td
              className="p-2 text-left border border-[#dee2e6]"
              data-title="Date"
            >
              <time datetime="2023-03-02T08:52:40+00:00">March 2, 2023</time>
            </td>
            <td
              className="p-2 text-left border border-[#dee2e6]"
              data-title="Status"
            >
              On hold
            </td>
            <td
              className="p-2 text-left border border-[#dee2e6]"
              data-title="Total"
            >
              <span >
                <span >£</span>240.00
              </span>{" "}
              for 2 items
            </td>
            <td
              className="p-2 text-left border border-[#dee2e6]"
              data-title="Actions"
            >
              <button
                className="text-main-color"
              >
                View
              </button>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
