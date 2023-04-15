import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { deleteOrder, updateOrder } from "../../../api/order.api";
import RectagMark from "../../../assets/icons/RectagMark";
import Trash from "../../../assets/icons/Trash";
import { HeadingV1 } from "../../../Components";
import { OrderInterface } from "../../../interfaces/order.interface";
import { useListOrders } from "../../../queries/order.queries";
import { transformFormatDate } from "../../../utils/index.utils";

const Order = () => {
  const { data, refetch } = useListOrders() as any;

  console.log(data);

  const { mutate: updateOrderById } = useMutation(updateOrder);
  const { mutate: deleteOrderById } = useMutation(deleteOrder);

  const handleUpdateOrder = (order: OrderInterface) => {
    updateOrderById(
      {
        id: order._id as string,
        data: {
          ...order,
          status: "completed",
        },
      },
      {
        onSuccess: () => {
          alert("Updated order successfully");
          refetch();
        },
        onError: (error) => {
          alert("Updated order failed");
        },
      }
    );
  };

  const handleDeleteOrder = (id: string) => {
    deleteOrderById(id, {
      onError: (error) => {
        alert("Xoá Sản Đặt Hàng Thất Bại");
      },
    });
  };

  return (
    <div>
      <HeadingV1 title="Đặt Hàng" />
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 overflow-auto intro-y lg:overflow-visible">
          <table className="w-full text-left border-spacing-y-[10px] border-separate -mt-2">
            <thead className="">
              <tr className="">
                <th className="font-medium  uppercase px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                  Ngày
                </th>
                <th className="font-medium  uppercase px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                  Tổng Sản phẩm
                </th>
                <th className="font-medium  uppercase px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                  địa chỉ
                </th>
                <th className="font-medium  uppercase px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                  số tiền
                </th>
                <th className="font-medium  uppercase px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                  khác hàng
                </th>
                <th className="font-medium  uppercase px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                  trạng thái
                </th>
                <th className="font-medium  uppercase px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                  hành động
                </th>
              </tr>
            </thead>

            <thead className="">
              {data?.map((order: OrderInterface, index: number) => {
                const { _id, createdAt, total, shipping_address, status } =
                  order;
                console.log(createdAt);

                return (
                  <tr key={_id} className="intro-x">
                    <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      {transformFormatDate(new Date(createdAt))}
                    </td>
                    <td className="px-5 py-3 text-center dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      {total}
                    </td>
                    <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      {shipping_address?.address}
                    </td>
                    <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      {shipping_address?.amount.formatted}
                    </td>
                    <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      {shipping_address?.name}
                    </td>
                    <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      <span
                        className={`uppercase inline-block px-2 py-1 text-sm font-semibold rounded-full
                    ${
                      status === "pending payment"
                        ? "bg-yellow-200 text-yellow-800"
                        : status === "pending delivery"
                        ? "bg-blue-200 text-blue-800"
                        : status === "completed"
                        ? "bg-green-200 text-green-800"
                        : status === "canceled"
                        ? "bg-red-200 text-red-800"
                        : ""
                    }`}
                      >
                        {status}
                      </span>
                    </td>
                    <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => handleUpdateOrder(order)}
                          className="flex items-center mr-3"
                        >
                          <RectagMark />
                          Hoàn Thành
                        </button>
                        <button
                          onClick={() => handleDeleteOrder(_id as string)}
                          className="flex items-center text-danger"
                        >
                          <Trash />
                          Xoá
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
