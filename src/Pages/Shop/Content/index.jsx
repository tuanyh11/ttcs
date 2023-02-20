import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fakeData } from "../../../assets/data";
import {
  Button,
  Col,
  Pagination,
  ProductCardGrid,
  ProductCardList,
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
    state: { filter },
  } = useShopContext();

  const [featured, setFeatured] = useState("list");

  const [quickView, setQuickView] = useState(null);

  const [offset, setOffset] = useState({
    start: 0,
    end: 10,
  });

  const [value, setValue] = useState(1);

  const handleKeyDown = (event) => {
    console.log(event.key);
    // Check if the key pressed is a number
    if (!/[\d]/.test(event.key)) {
      // Prevent the default behavior of the event
      event.preventDefault();
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [products, setProducts] = useState([]);

  const filterContent = (() => {
    let content = [];
    Object.entries(filter).forEach(([key, value]) => {
      console.log(value);
      return content.push(...value);
    });
    return content;
  })();

  useEffect(() => {
    setProducts(data.slice(offset.start, offset.end));
  }, [offset]);

  return (
    <div>
      {quickView && (
        <div>
          <div className="fixed inset-0 z-[9999999]">
            <div className=" absolute inset-0 bg-[#0b0b0b] opacity-80 z-[9999999]"></div>
            <div className="px-5 absolute  top-1/2 left-1/2 z-[99999999999] -translate-y-1/2 -translate-x-1/2 w-full xl:max-w-[980px] xl:px-0">
              <button
                onClick={() => setQuickView(null)}
                className="fa-solid fa-xmark absolute top-0 right-0 text-xl font-semibold -translate-x-8 translate-y-2  xl:-translate-x-4 xl:translate-y-2 "
              ></button>
              <div className=" w-full  bg-white p-[30px]">
                <Row>
                  <Col className={"w-6/12 "}>
                    <div>
                      <div>
                        <img
                          src={quickView?.image}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <ul className="flex -mx-[5px] mt-[10px]">
                        <li className="w-4/12 mx-[5px]">
                          <img src={quickView?.image} alt="" className="" />
                        </li>
                        <li className="w-4/12 mx-[5px]">
                          <img src={quickView?.image} alt="" className="" />
                        </li>
                        <li className="w-4/12 mx-[5px]">
                          <img src={quickView?.image} alt="" className="" />
                        </li>
                      </ul>
                    </div>
                  </Col>

                  <Col className={"w-6/12"}>
                    <div className="">
                      <h3 className="text-[27px] font-poppins text-black font-semibold">
                        {quickView?.title}
                      </h3>

                      <p className=" my-4 font-poppins font-semibold ">
                        <del className="text-[#696969] text-sm mr-1 ">
                          ${quickView?.salePrice}
                        </del>
                        <span className="text-main-color text-[19px] ">
                          ${quickView?.price}
                        </span>
                      </p>
                      <div className="leading-[0.8] mb-[15px]">
                        {quickView?.stars}
                      </div>
                      <p className="">{quickView?.description}</p>

                      <div className="my-5">
                        <span className="">In Stock</span>
                        <div className="flex">
                          <button className="fa-solid fa-minus w-[50px] h-[50px] border"></button>
                          <input
                            type="text"
                            value={value}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            className="w-[50px] h-[50px] border outline-none text-center"
                          />
                          <button class="fa-solid fa-plus w-[50px] h-[50px] border"></button>
                          <div className="ml-3">
                            <Button label={"ADD TO CART"} />
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <div className="uppercase mb-[10px]">
                          <span className="text-black font-medium">sku:</span>
                          <span className="ml-2">SUR4JK74</span>
                        </div>
                        <div className="capitalize flex ">
                          <span className="text-black font-medium">
                            Category:
                          </span>
                          <div className="ml-2">
                            {[...new Array(3)].map((_, i) => {
                              return (
                                <Link
                                  key={i}
                                  className=" capitalize"
                                  to={`/category/:1`}
                                >
                                  Engine Parts + {i + 1}{" "}
                                  {i === 3 - 1 ? "" : ", "}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}

      {filterContent.length > 0 && (
        <ul className="mb-2">
          {filterContent.map((item, index) => {
            return (
              <li
                className="relative inline-block mr-[10px] text-[#555555] cursor-pointer hover:after:rotate-0 hover:before:rotate-0 after:transition-all before:transition-all after:duration-300 before:duration-300 after:w-[10px] after:absolute after:left-0 after:bg-black after:rotate-45 after:top-[14px] after:h-[2px]     before:w-[10px] before:absolute before:left-0 before:bg-black before:-rotate-45 before:top-[14px] before:h-[2px] pl-4  "
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}

      <div className="flex items-center justify-between mb-[30px]">
        <div className="hidden md:block">
          <button
            onClick={() => setFeatured("grid")}
            className={`border fa-solid fa-list w-[50px] h-[50px]  ${
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
                  <div className="mb-[30px] group">
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
