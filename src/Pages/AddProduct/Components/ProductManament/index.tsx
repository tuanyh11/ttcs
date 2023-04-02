import React from "react";
import { useFormContext } from "react-hook-form";
import ArrowDown from "../../../../assets/icons/ArrowDown";
import { InputV1 } from "../../../../Components";

const ProductManagement = () => {
  const { register } = useFormContext();
  return (
    <div>
      {" "}
      <div className="p-5 mt-5 intro-y box">
        <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
          <ArrowDown />
          Product Management
        </div>

        <div className="mt-5">
          <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
            <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
              <div className="text-left">
                <div className="flex items-center">
                  <div className="font-medium">Product Status</div>
                  <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                    Required
                  </div>
                </div>
                <div className="mt-3 text-xs leading-relaxed text-slate-500">
                  If the status is active, your product can be searched for by
                  potential buyers.
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
                  Active
                </label>
              </div>
            </div>
          </div>
          <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
            <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
              <div className="text-left">
                <div className="flex items-center">
                  <div className="font-medium">Product Stock</div>
                  <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                    Required
                  </div>
                </div>
              </div>
            </label>
            <div className="flex-1 w-full mt-3 xl:mt-0">
              <InputV1
                register={() =>
                  register("quantity", {
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
                    Required
                  </div>
                </div>
                <div className="mt-3 text-xs leading-relaxed text-slate-500">
                  Use a unique SKU code if you want to mark your product.
                </div>
              </div>
            </label>
            <div className="flex-1 w-full mt-3 xl:mt-0">
              <InputV1
                register={() =>
                  register("sku", {
                    required: {
                      value: true,
                      message: "SKU is required",
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
                    Required
                  </div>
                </div>
                <div className="mt-3 text-xs leading-relaxed text-slate-500">
                  The current format is VietNam dong, we are trying to provide more formatting for the price
                  (The price of products must greater or equal than  1000)
                </div>
              </div>
            </label>
            <div className="flex-1 w-full mt-3 xl:mt-0">
              <InputV1
                register={() =>
                  register("price", {
                    required: {
                      value: true,
                      message: "Price is required",
                    },
                    min: {
                      value: 1000,
                      message: "Price must be greater than 1000 or equal than",
                    },
                    pattern: {
                      value: /^[1-9][0-9]*$/,
                      message: "Price must be a number",
                    },
                  })
                  
                }
                placeholder="Price"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
