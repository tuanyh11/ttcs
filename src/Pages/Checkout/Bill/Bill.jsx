import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";

const Bill = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      {/* <div className="relative p-[20px] bg-[#F7F7F7] pl-[35px] mb-[15px]">
        <i className="fa-regular fa-tag mr-[10px] text-main-color text-[15px]"></i>
        <span>Have a coupon? </span>
        <a href="#">Click here to enter your code</a>
      </div> */}
      <div className="pt-[30px]">
        <div className="flex flex-wrap w-full">
          <div className="md:w-1/2 sm:px-[15px] px-0 w-full">
            <h3 className="text-[27px] mb-[10px] font-poppins font-semibold text-dark-color ">
              Chi tiết thanh toán
            </h3>
            <div className="flex flex-wrap">
              <label className="mb-[5px] font-normal">
                Tên Người Nhận: &nbsp;
                <span
                  className="text-main-color"
                  style={{ textDecoration: "underline dotted" }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="flex flex-wrap">
              <label className="mb-[5px] font-normal">
                Địa Chỉ: &nbsp;
                <span
                  className="text-main-color"
                  style={{ textDecoration: "underline dotted" }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                {...register("address")}
                className="w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]"
              />
              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
            </div>
            <div className="flex flex-wrap">
              <label className="mb-[5px] font-normal">
                Thành Phố: &nbsp;
                <span
                  className="text-main-color"
                  style={{ textDecoration: "underline dotted" }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                {...register("city")}
                className="w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]"
              />
              {errors.city && (
                <span className="text-red-500">{errors.city.message}</span>
              )}
            </div>
            {/* <div className="flex flex-wrap">
              <label className="mb-[5px] font-normal">
                State: &nbsp;
                <span
                  className="text-main-color"
                  style={{ textDecoration: "underline dotted" }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                {...register("state")}
                className="w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]"
              />
              {errors.state && (
                <span className="text-red-500">{errors.state.message}</span>
              )}
            </div> */}
            <div className="flex flex-wrap">
              <label className="mb-[5px] font-normal">
                Nước: &nbsp;
                <span
                  className="text-main-color"
                  style={{ textDecoration: "underline dotted" }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                {...register("country")}
                className="w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]"
              />
              {errors.country && (
                <span className="text-red-500">{errors.country.message}</span>
              )}
            </div>
            <div className="flex flex-wrap">
              <label className="mb-[5px] font-normal">
                Mã bưu điện : &nbsp;
                <span
                  className="text-main-color"
                  style={{ textDecoration: "underline dotted" }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                {...register("postal_code")}
                className="w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]"
              />
              {errors.postal_code && (
                <span className="text-red-500">
                  {errors.postal_code.message}
                </span>
              )}
            </div>
          </div>
          <div className="md:w-1/2 sm:px-[15px] px-0 w-full">
            <h3 className="text-[27px] mb-[10px] font-poppins font-semibold text-dark-color ">
              Thông tin thêm
            </h3>
            <div className="flex flex-wrap">
              <label className="mb-[5px] font-normal">
                Ghi chú đặt hàng <span>(không bắt buộc )</span>
              </label>
              <textarea
                type="text"
                placeholder="Ghi chú về đơn đặt hàng của bạn, ví dụ: ghi chú đặc biệt cho giao hàng."
                style={{ height: "102px" }}
                className="w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none pt-[10px] text-[#000]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bill;
