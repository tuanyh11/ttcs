import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories, getProduct, updateProduct } from "../../api/product";
import { HeadingV1 } from "../../Components";
import { baseURL } from "../../config/axios.config";
import { ProductInterface } from "../../interfaces/product.interface";
import { formatMoney, moveToTop } from "../../utils/index.utils";
import ProductDetail from "../AddProduct/Components/ProductDetail";
import ProductInfo from "../AddProduct/Components/ProductInfo";
import ProductManagement from "../AddProduct/Components/ProductManament";
import Upload from "../AddProduct/Components/Upload";
import { ImageListType } from "react-images-uploading";
import { ClipLoader } from "react-spinners";

const EditProduct = () => {
  const defaultValues: ProductInterface = {
    name: "",
    description: "",
    price: {
      raw: 10000,
      formatted: formatMoney(10000),
    },
    images: [],
    category: "",
    quantityInStock: 1,
    isActive: true,
    sku: "",
    previews: [],
    deletedImages: [],
  };

  const id: string = useParams<{ id: string }>().id || "";

  const methods = useForm<ProductInterface>({
    defaultValues,
  });

  console.log(id);

  const [isPersist, setIsPersist] = useState(false);
  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = methods;

  const { data } = useQuery({
    queryFn: () => getProduct(id),
    queryKey: ["get-product", id],
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      Object.entries(data).map(([k, v]) => {
        if (k === "images") {
          return setValue(
            k as keyof ProductInterface,
            (v as string[])?.map((item) => ({ dataURL: item, file: null }))
          );
        }
        setValue(k as keyof ProductInterface, v as [] | string | number);
      });
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
  });

  // console.log(watch());

  const handleReSetInput = () => {
    reset(defaultValues);
  };

  const nav = useNavigate();

  const handleOnCancel = () => {
    moveToTop();
  };

  const { mutate, isLoading } = useMutation(updateProduct, {
    onSuccess: () => {
      if (isPersist) {
        return handleOnCancel();
      }
      nav("/e-commerce/");
    },
  });

  // console.log(errors);

  const handleOnSubmit = (formData: ProductInterface) => {
    const data = new FormData();
    const { images, ...rest } = formData;
    const newImagesUpload = (images as ImageListType).filter((img) => img.file);

    newImagesUpload.length > 0 &&
      Array.from(newImagesUpload).forEach((image) => {
        data.append("images", image.file as File);
      });
    Object.entries(rest).forEach(([key, value]) => {
      if (key === "deletedImages" || key === "price") {
        return data.append(key, JSON.stringify(value));
      }
      data.append(key, value as keyof ProductInterface);
    });
    return mutate({ id, data });
  };

  return (
    <div>
      {" "}
      <div>
        <HeadingV1 title="Chỉnh Sửa Sản Phẩm Của Bạn" />
        <form onSubmit={handleSubmit(handleOnSubmit)} className="">
          <FormProvider {...methods}>
            <div className="grid grid-cols-11 pb-20 mt-5 gap-x-6">
              <div className="col-span-11 intro-y 2xl:col-span-9">
                <Upload />

                <ProductInfo categories={categories} />
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

                  {isLoading ? (
                    <div 
                    className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
                    
                    >
                      <ClipLoader color="#36d7b7" />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      onClick={() => setIsPersist(true)}
                      className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed w-full py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 md:w-52"
                    >
                      Lưu &amp; Tiếp Tục Chỉnh Sửa
                    </button>
                  )}

                  {isLoading ? (
                    <div className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-full py-3 md:w-52">
                      <ClipLoader color="#36d7b7" />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      onClick={() => setIsPersist(false)}
                      className="transition duration-200 border shadow-sm inline-flex items-center justify-center px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary w-full py-3 md:w-52"
                    >
                      Lưu
                    </button>
                  )}
                </div>
              </div>
            </div>
          </FormProvider>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
