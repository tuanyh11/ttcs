import React, { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BreadCrumb, Col, Row, Container } from "../../Components";
import { useShopContext } from "../../hooks";
import Content from "./Content";
import Sidebar from "./Sidebar/index";

export const ShopContext = createContext();

const Shop = ({ categoris }) => {
  const [filter, setFilter] = useState({
    status: [],
    category: [],
    brand: [],
    price: [],
  });

  const handleOnSelectCate = (category) => {
    const isExisting = filter.category.find((item) => item.id === category.id);

    if (isExisting) {
      setFilter({
        ...filter,
        category: [
          ...filter?.category.filter((item) => item.id !== category.id),
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
    setFilter({
      ...filter,
      category: [...filter?.category.filter((item) => item.id !== category.id)],
    });
  };

  const { Provider } = useShopContext();
  const { slug } = useParams();
  console.log(slug);
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
        }}
      >
        <BreadCrumb />
        <div className="py-20">
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
                  <Sidebar categoris={categoris} />
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
