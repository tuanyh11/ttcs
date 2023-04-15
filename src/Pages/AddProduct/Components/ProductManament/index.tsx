import React, { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ArrowDown from "../../../../assets/icons/ArrowDown";
import { InputV1 } from "../../../../Components";
import CurrencyInput from "react-currency-input-field";
import { ProductInterface } from "../../../../interfaces/product.interface";
import { formatMoney } from "../../../../utils/index.utils";

const ProductManagement = () => {
  const { register, watch, setValue, control } =
    useFormContext<ProductInterface>();
  const price = watch("price");
  console.log(price);

  return (
    <div>
      {" "}
      <div className="p-5 mt-5 intro-y box">
        <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
          <ArrowDown />
          Quản lý sản phẩm
        </div>

        <div className="mt-5">
          <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
            <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
              <div className="text-left">
                <div className="flex items-center">
                  <div className="font-medium">Trạng Thái Sản Phẩm</div>
                  <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                    Bắt Buộc
                  </div>
                </div>
                <div className="mt-3 text-xs leading-relaxed text-slate-500">
                  Nếu trạng thái đang hoạt động, sản phẩm của bạn có thể được
                  tìm kiếm bằng cách khách hàng tiềm năng.
                </div>
              </div>
            </label>
            <div className="flex-1 w-full mt-3 xl:mt-0">
              <div className="flex items-center">
                <input
                  id="product-status-active"
                  type="checkbox"
                  defaultChecked={true}
                  {...register("isActive")}
                  className="w-4 h-4 cursor-pointer rounded-full "
                />
                <label
                  htmlFor="product-status-active"
                  className="cursor-pointer ml-2"
                >
                  Hoạt Động
                </label>
              </div>
            </div>
          </div>
          <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
            <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
              <div className="text-left">
                <div className="flex items-center">
                  <div className="font-medium">Số Lượng Sản Phẩm Trong Kho</div>
                  <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                    Bắt Buộc
                  </div>
                </div>
              </div>
            </label>
            <div className="flex-1 w-full mt-3 xl:mt-0">
              <InputV1
                register={() =>
                  register("quantityInStock", {
                    pattern: /^[1-9][0-9]*$/,
                    min: 1,
                  })
                }
                placeholder="Quantity"
              />
            </div>
          </div>
          <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
            <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
              <div className="text-left">
                <div className="flex items-center">
                  <div className="font-medium">SKU (Stock Keeping Unit)</div>
                  <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                    Bắt Buộc
                  </div>
                </div>
                <div className="mt-3 text-xs leading-relaxed text-slate-500">
                  Sử dụng mã SKU duy nhất nếu bạn muốn đánh dấu sản phẩm của
                  mình.
                </div>
              </div>
            </label>
            <div className="flex-1 w-full mt-3 xl:mt-0">
              <InputV1
                register={() =>
                  register("sku", {
                    required: {
                      value: true,
                      message: "SKU là bắt buộc",
                    },
                  })
                }
                placeholder="SKU"
              />
            </div>
          </div>

          <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
            <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
              <div className="text-left">
                <div className="flex items-center">
                  <div className="font-medium">Price</div>
                  <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                    Bắt Buộc
                  </div>
                </div>
                <div className="mt-3 text-xs leading-relaxed text-slate-500">
                  Định dạng hiện tại là Việt Nam đồng, chúng tôi đang cố gắng
                  cung cấp thêm định dạng cho giá (Giá của sản phẩm phải lớn hơn
                  hoặc bằng 1000)
                </div>
              </div>
            </label>
            <div className="flex-1 w-full mt-3 xl:mt-0">
             
              <Controller
                name="price.raw"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Gía Sản phẩm là bắt buộc",
                  },
                  min: {
                    value: 1000,
                    message: " phải lớn hơn 1000 hoặc bằng",
                  },
                  pattern: {
                    value: /^[1-9][0-9]*$/,
                    message: "Price must be a number",
                  },
                  onChange: (e) => {
                    setValue("price.formatted", formatMoney(Number(e.target.value)))                    
                  }
                }}
                render={({ field: { onChange, value } }) => {
                  return (
                    <CurrencyInput
                      placeholder="Price"
                     
                      intlConfig={{ locale: "vi-VN", currency: "VND" }}
                      className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 flex-1"
                      value={value}
                      suffix="đ"
                      onValueChange={(value) => onChange(value)}
                    />
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
