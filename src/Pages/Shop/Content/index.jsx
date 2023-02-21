import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
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

const data = fakeData(25, (i) => {
  return {
    rating: Math.floor(Math.random() * 5) + 1,
    title: `Titanium Wheel Cover ${i}`,
    name: `Product Name ${i}`,
    description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem udantium, totam rem aperiam, eaque ipsa quae abventore ${i}`,
    price: 99.99,
    isOnSale: true,
    salePrice: 79.99,
    image:
      "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-1.jpg",
    categories: [].push(i),
  };
});

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

  const [featured, setFeatured] = useState("list");

  const [quickView, setQuickView] = useState(null);

  const [offset, setOffset] = useState({
    start: 0,
    end: 10,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.slice(offset.start, offset.end));
  }, [offset]);

  

  return (
    <div>
      {quickView && (
        <QuickView {...quickView} onQuickViewClick={() => setQuickView(null)} />
      )}

      {
        <ul >
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
          <select
            id="countries"
            className="block  p-2.5 leading-[50px] h-[50px] px-5 border focus:border-[#111] outline-none w-full md:w-[250px]"
          >
            {sortDatatypes.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Card gird product */}
      {featured === "grid" ? (
        <div>
          <Row className="flex flex-wrap">
            {products.map((item, index) => {
              return (
                <Col key={index} className=" w-full md:w-6/12 lg:w-4/12">
                  <div className="mb-[30px] ">
                    <ProductCardGrid
                      {...item}
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
            {products.map((item, index) => {
              return (
                <Col key={index} className=" w-full">
                  <div className="mb-[30px]">
                    <ProductCardList
                      {...item}
                      onQuickView={(data) => setQuickView(data)}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      ) : null}

      <div className="">
        <Pagination
          items={data.length}
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
