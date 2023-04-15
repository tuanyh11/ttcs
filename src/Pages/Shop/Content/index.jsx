import React, { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { getProducts } from "../../../api/product";
import { fakeData } from "../../../assets/data";
import {
  Col,
  Pagination,
  ProductCardGrid,
  ProductCardList,
  Row,
  Selector,
} from "../../../Components";
import Spinning from "../../../Components/Common/Spinning/Spinning";
import { useShopContext } from "../../../hooks";
import { sortProduct } from "../../../utils";

const sortDatatypes = [
  // {
  //   name: "Sort by popularity",
  //   slug: "popularity",
  // },
  {
    name: "Sắp xếp theo đánh giá trung bình",
    slug: "averageRating",
  },
  {
    name: "Sắp xếp theo mới nhất",
    slug: "Latest",
  },
  {
    name: "Sắp xếp theo giá: Thấp đến Cao",
    slug: "priceHigh",
  },
  {
    name: "Sắp xếp theo giá: Cao đến Thấp",
    slug: "priceLow",
  },
];

const Content = () => {
  const {
    state: { filter, handleOnRemoveCate, handleOnRemoveStatus, setRangePrice, setFilterPrice },
  } = useShopContext();

  const [featured, setFeatured] = useState("grid");

  const [sortDatatypesFilter, setSortDatatypesFilter] = useState(
    sortDatatypes[0]
  );

  const loc = useLocation();
  const productSearch = loc.state?.products;

  const [offset, setOffset] = useState({
    start: 0,
    end: 10,
  });

  const [products, setProducts] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState();

  const { data, isLoading } = useQuery({
    queryKey: ["productList"],
    queryFn: getProducts,
    enabled: !productSearch,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      let range = data?.map(item => 
        item.price.raw
      )

      setRangePrice({
        max: Math.max(...range),
        min: Math.min(...range)
      })

      setFilterPrice({
        min: 0,
        max: Math.max(...range)
      })
    }
  });

  console.log(data);

  useEffect(() => {
    setProducts(productSearch || data);
  }, [data, productSearch]);

  const categories = filter?.category;

  const showProducts = sortProduct(products, selectedFilter?.slug, filter);

  if (isLoading)
    return (
      <div className="relative h-full">
        <div className="absolute top-0 left-1/2 ">
          <Spinning />
        </div>
      </div>
    );

  return (
    <div>
      {showProducts?.length === 0 ? (
        <span className="text-[15px]">
          Không tìm thấy sản phẩm nào phù hợp với lựa chọn của bạn.
        </span>
      ) : (
        <>
          {
            <ul>
              {categories?.map((item, index) => {
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
                className={`border fal text-[22px] fa-th fa-grip-vertical w-[50px] h-[50px] hover:bg-main-color hover:text-white transition-main  ${
                  featured === "grid" ? "bg-main-color  text-white" : "bg-white"
                } mr-[8px]`}
              ></button>
              <button
                onClick={() => setFeatured("list")}
                className={`border text-[22px] far fa-list w-[50px] h-[50px] hover:bg-main-color hover:text-white transition-main ${
                  featured === "list" ? "bg-main-color  text-white" : "bg-white"
                } `}
              ></button>
            </div>

            <div className="flex-1 md:flex-grow-0 md:flex-shrink-0 ">
              <Selector
                onSelect={(item) => setSelectedFilter(item)}
                title={sortDatatypesFilter?.name}
                data={sortDatatypes}
                setTitle={setSortDatatypesFilter}
              />
            </div>
          </div>

          {/* Card gird product */}
          {featured === "grid" ? (
            <div>
              <Row className="flex flex-wrap">
                {showProducts?.map((item, index) => {
                  const product = item;
                  return (
                    <Col key={index} className=" w-full md:w-6/12 screens-992:w-4/12">
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
                {showProducts?.map((item, index) => {
                  const product = item;
                  console.log(product);
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

          <div>
            <Pagination
              items={showProducts?.totalLength}
              itemToShow={12}
              getOffset={(start, end) =>
                setOffset({
                  start,
                  end,
                })
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Content;


