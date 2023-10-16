import React, { useEffect, useMemo, useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import watch from "../assets/watch.jpg";
import laptop from "../assets/laptop.jpg";
import keyboard from "../assets/keyboard.jpg";
import sunGlass from "../assets/glasses.jpeg";
import leatherWatch from "../assets/leatherWatch.jpg";
import mouse from "../assets/mouse.jpg";
import monitor from "../assets/monitor.jpg";
import { useQuery } from "react-query";
import { getProducts } from "../apis/product";
import { getCategories } from "../apis/category";
import { toast } from "react-toastify";
import useCart from "../store/cartStore";
const Main = () => {
  let Products = [
    {
      img: sunGlass,
      title: "Sun Glasses",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: keyboard,
      title: "Black keyboard",
      description: "lorem ipsum dolar",
      price: 70,
    },
    {
      img: watch,
      title: "Apple Watch",
      description: "lorem ipsum dolar",
      price: 990,
    },
    {
      img: mouse,
      title: "Black Mouse",
      description: "lorem ipsum dolar",
      price: 30,
    },
    {
      img: laptop,
      title: "accer laptop",
      description: "lorem ipsum dolar",
      price: 999,
    },
    {
      img: leatherWatch,
      title: "Leather Watch",
      description: "lorem ipsum dolar",
      price: 880,
    },
    {
      img: monitor,
      title: "One plus monitor",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: sunGlass,
      title: "Sun Glasses",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: mouse,
      title: "Mouse",
      description: "lorem ipsum dolar",
      price: 40,
    },
    {
      img: leatherWatch,
      title: "leather",
      description: "lorem ipsum dolar",
      price: 40,
    },
  ];
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [selectCate, setSelectCate] = useState(false);
  const searchHandler = (e) => {
    const filteredArray = Products.filter((product) =>
      product.title.toLocaleLowerCase().includes(e.target.value)
    );
    if (filteredArray.length != 0) {
      setFilteredProducts(filteredArray);
    }
  };

  const { add, getItems } = useCart();

  console.log(getItems());

  const { data: product } = useQuery({
    queryFn: getProducts,
    queryKey: "get-products",
    onSuccess: (res) => {
      setFilteredProducts(res?.data || []);
    },
  });

  const { data: categories } = useQuery({
    queryFn: getCategories,
    queryKey: "get-categories",
  });

  useEffect(() => {
    selectCate &&
      setFilteredProducts(
        product?.data?.filter((item) =>
          item?.categories?.some((cate) => cate?._id === selectCate?._id)
        )
      );
  }, [selectCate]);

  return (
    <div className="w-full relative">
      <div className="sticky top-0 z-10">
        <div className="header flex justify-between items-center p-4 bg-white">
          <h1 className="text-3xl font-bold">NHOM7</h1>
          <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
            <input
              type="text"
              placeholder="Search product"
              className="bg-transparent outline-0"
              onChange={searchHandler}
            />
            <button onClick={() => searchHandler()}>
              <CiSearch />
            </button>
          </div>
        </div>
        <div className="categories bg-white w-full flex  space-x-8 px-2 py-10">
          <div
            onClick={() => {
              setFilteredProducts(product?.data);
              setSelectCate(null);
            }}
            className={` ${
              !selectCate ? "bg-black text-white" : "bg-white"
            } cursor-pointer border px-4 py-2 rounded-full drop-shadow-xl uppercase`}
          >
            <p className=" font-medium text-sm">All</p>
          </div>
          {categories?.data?.map((category) => {
            return (
              <div
                key={category?._id}
                onClick={() => setSelectCate(category)}
                className={` ${
                  selectCate?._id === category?._id
                    ? "bg-black text-white"
                    : "bg-white"
                } cursor-pointer border px-4 py-2 rounded-full drop-shadow-xl uppercase`}
              >
                <p className=" font-medium text-sm">{category?.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {filteredProducts?.length === 0 ? (
          <div
            class="mb-4 rounded-lg bg-secondary-100 px-6 py-5  font-semibold text-2xl text-secondary-800"
            role="alert"
          >
            No Product!
          </div>
        ) : (
          filteredProducts?.map((product, idx) => {
            return (
              <div
                key={idx}
                className="product h-[300px] bg-white drop-shadow-2xl p-2 border"
              >
                <img
                  src={product?.images?.[0].url}
                  alt=""
                  className="w-full h-[60%] object-cover p-2"
                />
                <div className="m-2 bg-gray-100 p-2">
                  <h1 className="text-xl font-semibold">{product.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    className="text-sm truncate overflow-hidden text-ellipsis "
                  ></div>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">${product.price}.00</p>
                    <CiShoppingCart
                      onClick={() => add(product)}
                      className=" cursor-pointer"
                      size={"1.4rem"}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Main;
