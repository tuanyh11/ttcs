import React, { useState } from "react";
import { useLocation } from "react-router";
import { BreadCrumb, Col, Row, Container } from "../../Components";
import { useShopContext } from "../../hooks";
import Content from "./Content";
import Sidebar from "./Sidebar/index";

const Shop = ({ categories }) => {
  const [filter, setFilter] = useState({
    status: [],
    category: [],
    brand: [],
    price: [],
  });

  const handleOnSelectCate = (category) => {
    const id = category.databaseId;
    const isExisting = filter.category.find((item) => item.databaseId === id);

    if (isExisting) {
      setFilter({
        ...filter,
        category: [
          ...filter?.category.filter((item) => item.databaseId !== id),
        ],
      });
    } else setFilter({ ...filter, category: [...filter?.category, category] });
  };

  const handleOnSelectStatus = (status) => {
    const isExisting = filter.status.find((item) => item.id === status.id);

    if (isExisting) {
      setFilter({
        ...filter,
        status: [...filter?.status.filter((item) => item.id !== status.id)],
      });
    } else setFilter({ ...filter, status: [...filter?.status, status] });
  };

  const handleOnRemoveStatus = (status) => {
    setFilter({
      ...filter,
      status: [...filter?.status.filter((item) => item.id !== status.id)],
    });
  };

  const handleOnRemoveCate = (category) => {
    const id = category.databaseId;
    setFilter({
      ...filter,
      category: [...filter?.category.filter((item) => item.databaseId !== id)],
    });
  };

  const handleFilterPrice = (price) => {
    setFilter({ ...filter, price})
  }

  const { Provider } = useShopContext();


  return (
    <div>
      <Provider
        value={{
          filter,
          setFilter,
          handleOnSelectCate,
          handleOnSelectStatus,
          handleOnRemoveCate,
          handleOnRemoveStatus,
          handleFilterPrice
        }}
      >
        <BreadCrumb label={"Products"}/>
        <div className="py-20 relative">
          <Container>
            <Row>
              <Col
                className={"w-full lg:w-3/12 order-2 mt-10 md:mt-0  md:order-1"}
              >
                <div className="">
                  <div className="relative mb-[30px]">
                    <input
                      type="text"
                      className=" h-[50px] border-[1px] pl-5  w-full pr-[84px]  outline-none "
                      placeholder="Search..."
                      // onChange={handleOnSearch}
                    />
                    <button className="absolute top-1/2 right-0 -translate-y-1/2 px-4  ">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                  <Sidebar categories={categories} />
                </div>
              </Col>
              <Col className={"w-full lg:w-9/12 order-1 md:order-2"}>
                <Content />
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    </div>
  );
};

export default Shop;
