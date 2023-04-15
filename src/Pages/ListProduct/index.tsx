import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteProduct,
  duplicateProduct,
  getProducts,
} from "../../api/product";
import DuplicateIcon from "../../assets/icons/DuplicateIcon";
import Magnifying from "../../assets/icons/Magnifying";
import Plus from "../../assets/icons/Plus";
import RectagMark from "../../assets/icons/RectagMark";
import Trash from "../../assets/icons/Trash";
import { HeadingV1 } from "../../Components";
import { baseURL } from "../../config/axios.config";
import { ProductInterface } from "../../interfaces/product.interface";
import { ClipLoader, FadeLoader } from "react-spinners";

const index = () => {
  const [showProducts, setShowProducts] = useState<ProductInterface[]>([])
  const [textSearches, setTextSearches] = useState<string>('')

  const { data = [] ,refetch } = useQuery({
    queryFn: getProducts,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryKey: ["get-products"],
    onSuccess: (data) => {
      setShowProducts(data)
    }
  });


  const { mutate, isLoading } = useMutation(deleteProduct, {
    onSuccess: () => refetch(),
  });
  const { mutate: duplicate } = useMutation(duplicateProduct, {
    onSuccess: () => refetch(),
  });

  const handleOnDelete = (id: string) => {
    if (window.confirm("Bạn có chắc muốn xoá sản phẩm này ?")) {
      mutate(id);
    }
  };

  const handleOnDuplicate = (id: string) => {
    duplicate(id);
    // refetch()
  };

  return (
    <div>
      <HeadingV1 title="Danh Sách Sản Phẩm" />
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
          <Link to={"/e-commerce/add-product"} className="flex">
            <button className="transition duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mr-2 shadow-md">
              Tạo Mới Sản Phẩm
            </button>
            <div className="relative" data-headlessui-state="">
              <button
                className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer px-2 !box"
                id="headlessui-menu-button-:r4:"
                aria-haspopup="true"
                aria-expanded="false"
                data-headlessui-state=""
                type="button"
              >
                <span className="flex items-center justify-center w-5 h-5">
                  <Plus />
                </span>
              </button>
            </div>
          </Link>
          <div className="hidden mx-auto md:block text-slate-500">
            {/* Showing 1 to 10 of 150 entries */}
          </div>
          <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <div className="relative w-56 text-slate-500">
              <input
                type="text"
                className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 w-56 pr-10 !box"
                placeholder="Search..."
                onChange={(e) => setShowProducts([...data.filter(p => p.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))])}
              />
              <Magnifying />
            </div>
          </div>
        </div>

        <div className="col-span-12 overflow-auto intro-y lg:overflow-visible">
          <table className="w-full text-left border-spacing-y-[10px] border-separate -mt-2">
            <thead className="">
              <tr className="">
                <th className="font-medium uppercase  px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                  Hình Ảnh
                </th>
                <th className="font-medium uppercase  px-5 py-3 dark:border-darkmode-300 border-b-0 whitespace-nowrap">
                  Tên Sản Phẩm
                </th>
                <th className="font-medium uppercase  px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                  Số Lượng
                </th>
                <th className="font-medium uppercase  px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                  Giá
                </th>
                <th className="font-medium uppercase  px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                  Trạng Thái
                </th>
                <th className="font-medium uppercase  px-5 py-3 dark:border-darkmode-300 text-center border-b-0 whitespace-nowrap">
                  Hành Động
                </th>
              </tr>
            </thead>

            <thead className="">
              {showProducts.map((product: ProductInterface) => {
                return (
                  <tr key={product._id} className="intro-x">
                    <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      <div className="flex">
                        {product.images
                          .slice(0, 3)
                          .map((img: string, index: number) => {
                            return (
                              <div
                                key={index}
                                className={`w-10 h-10 image-fit zoom-in ${
                                  index !== 0 ? "-ml-5" : ""
                                }`}
                              >
                                <img
                                  className="cursor-pointer h-full w-full  rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                  alt="Midone Tailwind HTML Admin Template"
                                  src={`${img}`}
                                />
                              </div>
                            );
                          })}
                      </div>
                    </td>
                    <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      <a href="" className="font-medium whitespace-nowrap">
                        {product.name}
                      </a>
                    </td>
                    <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      {product.quantityInStock}
                    </td>
                    <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      {product?.price?.formatted}
                    </td>
                    <td className="px-5 py-3 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                      <div
                        className={`flex items-center justify-center  ${
                          product.isActive ? " text-green-600" : "text-danger"
                        }`}
                      >
                        <RectagMark />
                        {product.isActive ? " Active" : "Inactive"}
                      </div>
                    </td>
                    <td className="px-5 dark:border-darkmode-300 first:rounded-l-md last:rounded-r-md  bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                      <div className="flex items-center justify-center">
                        <Link
                          className="flex items-center mr-3"
                          to={`/e-commerce/edit-product/${product._id}`}
                        >
                          <RectagMark />
                          Sửa
                        </Link>
                        {isLoading ? (
                          <ClipLoader  color="#36d7b7" />
                        ) : (
                          <button
                            onClick={() =>
                              handleOnDelete(product._id as string)
                            }
                            className="flex items-center mr-3 text-danger"
                          >
                            <Trash />
                            Xoá
                          </button>
                        )}
                        <button
                          onClick={() =>
                            handleOnDuplicate(product._id as string)
                          }
                          className="flex items-center text-green-600"
                        >
                          <DuplicateIcon />
                          Nhân Bản
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

export default index;
