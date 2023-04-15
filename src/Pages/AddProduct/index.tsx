import { useMutation,  useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createProduct, getCategories, getCategory } from "../../api/product";
import ArrowDown from "../../assets/icons/ArrowDown";
import { Error, HeadingV1 } from "../../Components";
import { ProductInterface } from "../../interfaces/product.interface";
import { formatMoney, moveToTop } from "../../utils/index.utils";
import ProductDetail from "./Components/ProductDetail";
import ProductInfo from "./Components/ProductInfo";
import ProductManagement from "./Components/ProductManament";
import Upload from "./Components/Upload";
import { ImageListType } from "react-images-uploading";

const AddProduct = () => {
  const defaultValues: ProductInterface = {
    name: "",
    description: "",
    price: {
      raw: 10000,
      formatted: formatMoney(10000)
    },
    images: null,
    category: "",
    quantityInStock: 1,
    isActive: true,
    sku: "",
    previews: [],
  };

  const methods = useForm<ProductInterface>({
    defaultValues,
  });

  const [isPersist, setIsPersist] = useState(false);
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const handleReSetInput = () => {
    reset(defaultValues);
  };

  const nav = useNavigate();

  const handleOnCancel = () => {
    handleReSetInput();
    moveToTop();
  };

  const { mutate } = useMutation(createProduct, {
    onSuccess: () => {
      if (isPersist) {
        return handleOnCancel();
      }
      nav("/e-commerce");
    },
  });

  const {data: categories = []} = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories
  })


  const handleOnSubmit = (formData: ProductInterface) => {
    const data = new FormData();
    Array.from(formData.images as ImageListType).forEach((image) => {
      image?.file && data.append("images", image.file);
    });
    console.log(formData);
    
    const {previews, images, price, ...rest} = formData
    // Append the other form data fields to the form data
    Object.entries(rest).forEach(([key, value]) => {
        data.append(key, value as keyof ProductInterface);
      
    });
    data.append("price", JSON.stringify(price))
    mutate(data);
  };

  // console.log()
  const listErrors = Object.entries(errors).map(([_, v]) => v.message)

  console.log(listErrors);
  

  return (
    <div>
      <HeadingV1 title="Create Your Product" />
      {listErrors.length > 0 && <div className="p-5 my-5 border rounded-md border-slate-200/60 dark:border-darkmode-400 bg-white">
        <Error errors={listErrors as string[]}/>
      </div> }
      <form onSubmit={handleSubmit(handleOnSubmit)} className="">
        <FormProvider {...methods}>
          <div className="grid grid-cols-11 pb-20 mt-5 gap-x-6">
            <div className="col-span-11 intro-y 2xl:col-span-9">
              <Upload />

              <ProductInfo categories={categories}/>
              <ProductDetail />

              <ProductManagement />

              <div className="flex flex-col justify-end gap-2 mt-5 md:flex-row">
                <button
                  type="button"
                  onClick={() => handleOnCancel()}
                  className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
                >
                  Huỷ Bỏ
                </button>
                <button
                  type="submit"
                  onClick={() => setIsPersist(true)}
                  className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
                >
                  Lưu &amp; Tiếp Tục Tạo Mới
                </button>
                <button
                  type="submit"
                  onClick={() => setIsPersist(false)}
                  className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-full py-3 md:w-52"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </FormProvider>
      </form>
    </div>
  );
};

export default AddProduct;
