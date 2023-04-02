import React from "react";
import { useFormContext } from "react-hook-form";
import ArrowDown from "../../../../assets/icons/ArrowDown";
import { InputV1 } from "../../../../Components";
import { CategoryInterface } from "../../../../interfaces/product.interface";

interface Props {
  categories: CategoryInterface[]
}

const ProductInfo = ({categories}: Props) => {
  const { register, watch } = useFormContext();

  const categorySelected = watch("category._id")

  console.log(categorySelected);
  

  return (
    <div>
      <div className="p-5 mt-5 intro-y box">
        <div className="p-5 border rounded-md border-slate-200/60 dark:border-darkmode-400">
          <div className="flex items-center pb-5 text-base font-medium border-b border-slate-200/60 dark:border-darkmode-400">
            <ArrowDown />
            Product Information
          </div>

          <div className="mt-5">
            <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
              <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                <div className="text-left">
                  <div className="flex items-center">
                    <div className="font-medium">Product Name</div>
                    <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                      Required
                    </div>
                  </div>
                  <div className="mt-3 text-xs leading-relaxed text-slate-500">
                    Include min. 40 characters to make it more attractive and
                    easy for buyers to find, consisting of product type, brand,
                    and information such as color, material, or type.
                  </div>
                </div>
              </label>
              <div className="flex-1 w-full mt-3 xl:mt-0">
                <InputV1 register={() => register("name", {required: {
                    value: true,
                    message: "Product name is required"
  
                }})}/>
                <div className="text-xs text-slate-500 mt-2 text-right">
                  Maximum character 0/70
                </div>
              </div>
            </div>

            <div className="block sm:flex flex-col items-start pt-5 mt-5 xl:flex-row first:mt-0 first:pt-0">
              <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-64 xl:!mr-10">
                <div className="text-left">
                  <div className="flex items-center">
                    <div className="font-medium">Category</div>
                    <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                      Required
                    </div>
                  </div>
                </div>
              </label>
              <div className="flex-1 w-full mt-3 xl:mt-0">
                <select
                  id="category"
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Category is required"
                    }
                  })}
                  className=" outline-none disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 flex-1"
                >
                  {categories?.map(((category, index) => {
                    return (
                      <option selected={categorySelected === category._id || false} key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    )
                  }))}
                 
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
