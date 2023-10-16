import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import image from "../assets/glasses.jpeg";
import useCart from "../store/cartStore";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { orderProducts } from "../apis/product";
import useUser from "../store/userStore";
const Cartitems = () => {
  const { products, increaseQuantity, decreaseQuantity, remove, totalPrice } =
    useCart();

  const { user } = useUser();

  console.log(user);

  const total = totalPrice();

  const { mutate } = useMutation({
    mutationFn: orderProducts,
    mutationKey: "order-products",
  });

  const handleOnOrder = () => {
    mutate({
      products,
      orderby: user?.id,
      email: user?.email,
    });
  };

  return (
    <div>
      <div className="w-11/12 m-auto py-10">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="text-sm text-gray-400">There are 1 Items in your cart</p>
        <section className="flex justify-between items-center space-x-10">
          <div className="w-[60%] space-y-3">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <td className="text-gray-40 py-2">Product</td>
                  <td className="text-gray-40 py-2">Price</td>
                  <td className="text-gray-40 py-2">Quantity</td>
                  <td className="text-gray-40 py-2">Total</td>
                  <td className="text-gray-40 py-2">Delete</td>
                </tr>
              </thead>
              <tbody className="space-y-10">
                {products?.map((item) => {
                  return (
                    <tr key={item?._id} className="border-dashed border-b">
                      <td className="py-5">
                        <div className="flex items-center space-x-3 py-2">
                          <img
                            src={item?.images?.[0]?.url}
                            alt=""
                            className="w-[100px] h-[100px] border rounded p-2"
                          />
                          <div>
                            <h1 className="text-xl font-bold">{item?.title}</h1>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item?.description,
                              }}
                              className="text-sm truncate line-clamp-1 w-20"
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>{item?.price}</td>
                      <td>
                        <div className="flex items-center space-x-3">
                          <button
                            className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                            onClick={() => decreaseQuantity(item?._id)}
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <div>
                            <input
                              type="number"
                              id="first_product"
                              min={1}
                              value={item?.total}
                              max={item?.quantity}
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="1"
                              required
                            />
                          </div>
                          <button
                            className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                            onClick={() => increaseQuantity(item?._id)}
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td>{item?.total * item.price}</td>
                      <td>
                        <button onClick={() => remove(item?._id)}>
                          <AiFillDelete size={"1.5rem"} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="my-5">
              <div className=" flex justify-between">
                <Link
                  to={"/"}
                  className="flex items-center space-x-3 bg-gray-200 font-semibold rounded p-2"
                >
                  <BsArrowLeft />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[40%] h-fit border rounded p-5 space-y-5">
            <div className="space-y-5">
              <div className="flex justify-between items-center border-b border-dashed p-2">
                <h1 className="text-xl">Sub Totoal</h1>
                <p>{total}</p>
              </div>
              <div className="flex justify-between items-center border-b border-dashed p-2">
                <h1 className="text-xl">Discount</h1>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between items-center border-b p-2">
                <h1 className="text-xl">shipping</h1>
                <p>$20.00</p>
              </div>
              <div className="flex justify-between items-center p-2">
                <h1 className="text-xl">Totoal</h1>
                <p>{total}</p>
              </div>
            </div>
            <button
              onClick={() => handleOnOrder()}
              className="w-full p-2 bg-gray-800 text-center text-white rounded"
            >
              order now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cartitems;
