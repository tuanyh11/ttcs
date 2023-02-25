import React, { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getProducts } from "../../../api";
import { fakeData } from "../../../assets/data";
import {
  Button,
  Col,
  Pagination,
  ProductCardGrid,
  ProductCardList,
  QuickView,
  Row,
} from "../../../Components";
import { useShopContext } from "../../../hooks";


const sortDatatypes = [
  {
    name: "Sort by popularity",
  },
  {
    name: "Sort by average rating",
  },
  {
    name: "Sort by lastest",
  },
  {
    name: "Numerical",
  },
  {
    name: "Sort by price: Low to High",
  },
  {
    name: "Sort by price: High to Low",
  },
];

const Content = () => {
  const {
    state: { filter, handleOnRemoveCate, handleOnRemoveStatus },
  } = useShopContext();

  const [featured, setFeatured] = useState("grid");

  const [sortDatatypesFilter, setSortDatatypesFilter] = useState(
    sortDatatypes[0]
  );

  const [quickView, setQuickView] = useState(null);

  const [offset, setOffset] = useState({
    start: 0,
    end: 10,
  });

  const {data: products} = useQuery({
    queryKey: ['productList'],
    queryFn: () => getProducts().then(res => res)
  })


  return (
    <div>
      {quickView && (
        <QuickView {...quickView} onQuickViewClick={() => setQuickView(null)} />
      )}

      {
        <ul>
          {filter?.category?.map((item, index) => {
            return (
              <li
                className="relative mb-2 inline-block mr-[10px] text-[#555555] cursor-pointer hover:after:rotate-0 hover:before:rotate-0 after:transition-all before:transition-all after:duration-300 before:duration-300 after:w-[10px] after:absolute after:left-0 after:bg-black after:rotate-45 after:top-[14px] after:h-[2px]     before:w-[10px] before:absolute before:left-0 before:bg-black before:-rotate-45 before:top-[14px] before:h-[2px] pl-4  "
                key={index}
                onClick={() => handleOnRemoveCate(item)}
              >
                {item.name}
              </li>
            );
          })}

          {filter?.status?.map((item, index) => {
            return (
              <li
                className="relative mb-2 inline-block mr-[10px] text-[#555555] cursor-pointer hover:after:rotate-0 hover:before:rotate-0 after:transition-all before:transition-all after:duration-300 before:duration-300 after:w-[10px] after:absolute after:left-0 after:bg-black after:rotate-45 after:top-[14px] after:h-[2px]     before:w-[10px] before:absolute before:left-0 before:bg-black before:-rotate-45 before:top-[14px] before:h-[2px] pl-4  "
                key={index}
                onClick={() => handleOnRemoveStatus(item)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      }

      <div className="flex items-center justify-between mb-[30px]">
        <div className="hidden md:block">
          <button
            onClick={() => setFeatured("grid")}
            className={`border fa-solid fa-grip-vertical w-[50px] h-[50px]  ${
              featured === "grid" ? "bg-main-color  text-white" : "bg-white"
            } mr-[5px]`}
          ></button>
          <button
            onClick={() => setFeatured("list")}
            className={`border fa-solid fa-list w-[50px] h-[50px] ${
              featured === "list" ? "bg-main-color  text-white" : "bg-white"
            } `}
          ></button>
        </div>

        <div className="flex-1 md:flex-grow-0 md:flex-shrink-0 ">
          {Selector(sortDatatypesFilter, setSortDatatypesFilter)}
        </div>
      </div>

      {/* Card gird product */}
      {featured === "grid" ? (
        <div>
          <Row className="flex flex-wrap">
            {products?.data?.map((item, index) => {
              const product = item?.node
              return (
                <Col key={index} className=" w-full md:w-6/12 lg:w-4/12">
                  <div className="mb-[30px] ">
                    <ProductCardGrid
                      {...product}
                      onQuickView={(data) => setQuickView(data)}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      ) : null}

      {/* Card List Product */}

      {featured === "list" ? (
        <div>
          <Row className="flex flex-wrap">
            {products?.data?.map((item, index) => {
              const product = item?.node
              console.log(product)
              return (
                <Col key={index} className=" w-full">
                  <div className="mb-[30px]">
                    <ProductCardList
                      {...product}
                      onQuickView={(data) => setQuickView(data)}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      ) : null}

      <div >
        <Pagination
          items={products?.totalLength}
          itemToShow={12}
          getOffset={(start, end) =>
            setOffset({
              start,
              end,
            })
          }
        />
      </div>
    </div>
  );
};

export default Content;

function Selector(sortDatatypesFilter, setSortDatatypesFilter) {

  const [isOpening, setIsOpening] = useState(false);

  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpening(false)

      }
    }

    function handleClickInside(event) {
      if (selectRef.current && selectRef.current.contains(event.target)) {
        setIsOpening(pre => !pre)
      }
    }

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleClickInside);
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickInside);
    };
  }, [selectRef]);

  return <div    ref={selectRef} className=" relative">
    <div className="block relative p-2.5 h-[50px] px-5 border border-[#111] outline-none w-full md:w-[250px]">
      {sortDatatypesFilter?.name}
      <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-xs"></i>
    </div>
    {isOpening && (
      <ul className=" absolute z-[9999] top-full bg-white left-0 right-0 bg-[0_0_0_1px_rgb(68_68_68/11%)] border">
        {sortDatatypes.map((item, index) => (
          <li
            onClick={() => setSortDatatypesFilter(item)}
            className={`h-10 leading-10 pl-[18px] pr-[30px] cursor-pointer ${sortDatatypesFilter.name === item?.name
                ? "bg-[#f6f6f6] font-semibold"
                : ""}`}
            key={index}
          >
            {item.name}
          </li>
        ))}
      </ul>
    )}
  </div>;
}

