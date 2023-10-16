import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import TableTwo from '../../components/TableTwo';
import TableFour from '../../components/TableFour';
import { Link } from 'react-router-dom';
import { RiDeleteBin5Fill, RiPencilFill } from 'react-icons/ri';
import { useMutation, useQuery } from 'react-query';
import { delProductById, getProducts } from '../apis/product';
import { toast } from 'react-hot-toast';
import { TProduct } from '../../types';

const ProductList = () => {
  const { data, refetch } = useQuery({
    queryFn: getProducts,
    queryKey: 'get-categories',
  });

  const { mutate } = useMutation({
    mutationFn: delProductById,
    onSuccess: () => {
      toast.success(' deleted category successfully');
      refetch();
    },
    onError: (err) => {
      toast.error('Failed to delete');
    },
  });

  const handleOnDelete = (id: string) => {
    mutate(id);
  };

  return (
    <>
      <Breadcrumb pageName="Products" />
      <div>
        <TableFour
          column={['product', 'sold', 'quantity', 'price']}
          title="List"
          btnNew={{ to: '/product/new' }}
          renderData={() => (
            <tbody>
              {data?.data?.map((product: TProduct) => {
                return (
                  <tr
                    key={product?._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src={product?.images?.[0].url}
                        alt="Jese image"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {product?.title}
                        </div>
                        <div className=" font-normal text-gray-500 max-w-30">
                          <div
                            className="line-clamp-1 truncate"
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                          ></div>
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{product?.sold}</td>
                    <td className="px-6 py-4">{product?.quantity}</td>
                    <td className="px-6 py-4">{product?.price}</td>

                    <td className="px-6 py-4">
                      <div className=" flex gap-4 items-center">
                        <Link
                          to={`edit/${product._id}`}
                          // onClick={handleOnUpdate}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <RiPencilFill />
                        </Link>
                        <button
                          onClick={() => {
                            handleOnDelete(product?._id);
                          }}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <RiDeleteBin5Fill />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        />
      </div>
    </>
  );
};

export default ProductList;
