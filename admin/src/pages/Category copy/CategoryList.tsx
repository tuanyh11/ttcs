import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import TableTwo from '../../components/TableTwo';
import TableFour from '../../components/TableFour';
import { useMutation, useQuery } from 'react-query';
import { delCategoryById, getCategories } from '../apis/category';
import { TCategory } from './type';
import { BsPencilFill } from 'react-icons/bs';
import { RiCloseFill, RiDeleteBin5Fill, RiPencilFill } from 'react-icons/ri';
import NewCategory from './NewCategory';
import UpdateCategory from './UpdateCategory';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CategoryList = () => {
  const { data, refetch } = useQuery({
    queryFn: getCategories,
    queryKey: 'get-categories',
  });

  const { mutate } = useMutation({
    mutationFn: delCategoryById,
    onSuccess: () => {
      toast.success(' deleted category successfully');
      refetch();
    },
    onError: (err) => {
      toast.error('Failed to delete');
    },
  });

  console.log(data);

  const [isOpen, setIsOpen] = useState({
    state: false,
    turn: 'create',
  });

  const onSuccessCreate = () => {
    setIsOpen({
      state: false,
      turn: 'create',
    });
    refetch();
  };

  const handleOnDelete = (id: string) => {
    mutate(id);
  };

  const handleOnUpdate = () => {
    setIsOpen({ state: true, turn: 'update' });
  };

  const handleOnCreate = () => {
    setIsOpen({ state: true, turn: 'create' });
  };

  const onSuccessUpdate = () => {
    refetch();
  };

  return (
    <>
      {isOpen.state ? (
        <div className=" fixed bg-[rgba(0,0,0,0.2)] z-[999] inset-0">
          <div className=" absolute right-0 z-[9999] w-96 h-[100vh]">
            <button
              onClick={() => setIsOpen({ ...isOpen, state: false })}
              className=" absolute grid place-content-center p-4 right-0"
            >
              <RiCloseFill className=" text-2xl" />
            </button>
            {isOpen.turn === 'update' ? (
              <UpdateCategory onUpdate={() => onSuccessUpdate()} />
            ) : (
              <NewCategory onCreate={() => onSuccessCreate()} />
            )}
          </div>
        </div>
      ) : null}
      <Breadcrumb pageName="Categories" />
      <div>
        <TableFour
          title="List"
          column={['id', 'name', 'slug']}
          btnNew={{
            to: '/category/new',
            tag: 'button',
            onClick: () => handleOnCreate(),
          }}
          btnEdit={{}}
          renderData={() => (
            <tbody>
              {data?.data?.map((category: TCategory) => {
                return (
                  <tr
                    key={category?._id}
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
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {category?._id}
                    </th>
                    <td className="px-6 py-4">{category?.name}</td>
                    <td className="px-6 py-4">{category?.slug}</td>

                    <td className="px-6 py-4">
                      <div className=" flex gap-4 items-center">
                        <Link
                          to={`?edit=${category.name}&id=${category._id}`}
                          onClick={handleOnUpdate}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <RiPencilFill />
                        </Link>
                        <button
                          onClick={() => {
                            handleOnDelete(category?._id);
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

export default CategoryList;
