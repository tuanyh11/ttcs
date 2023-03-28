import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import ArrowDown from "../../assets/icons/ArrowDown";
import { HeadingV1 } from "../../Components";
import ProductDetail from "./Components/ProductDetail";
import ProductInfo from "./Components/ProductInfo";
import ProductManagement from "./Components/ProductManament";
import Upload from "./Components/Upload";

const AddProduct = () => {
  const methods = useForm()

  return (
    <div>
      <HeadingV1 title="Create Your Product" />
      <FormProvider {...methods}>

        <div className="grid grid-cols-11 pb-20 mt-5 gap-x-6">

          <div className="col-span-11 intro-y 2xl:col-span-9">

            <Upload />

            <ProductInfo />
            <ProductDetail />

            <ProductManagement />

            <div className="flex flex-col justify-end gap-2 mt-5 md:flex-row"><button type="button" className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52">Cancel</button><button type="button" className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52">Save &amp; Add New Product</button><button type="button" className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-full py-3 md:w-52">Save</button></div>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default AddProduct;
