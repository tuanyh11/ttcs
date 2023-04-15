import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { searchProducts } from "../../api";
import { BreadCrumb, Col, Row, Container } from "../../Components";
import { useUiStore } from "../../Components/store";
import { useShopContext } from "../../hooks";
import Content from "./Content";
import Sidebar from "./Sidebar/index";
import MobileSidebar from "./Sidebar/MobileSidebar";
import slugUrl from "url-slug"

const Shop = ({ categories, dataCate }) => {
  const [filter, setFilter] = useState({
    status: [],
    category: [],
    brand: [],
    price: [],
  });

  const searchText = useLocation().state?.searchText;

  const [rangePrice, setRangePrice] = useState({
    min: 0,
    max: 0,
  })

  const [filterPrice, setFilterPrice] = useState({
    min: 0,
    max: 0,
  })

  const nav = useNavigate()

  const { setIsOpeningFilterProduct, isOpeningFilterProduct } = useUiStore();

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
    setFilter({ ...filter, price });
  };

  const handleOnSearch = async (text) => {
    const data = await searchProducts(text)
    if (data?.length > 1 || data?.length === 0)
      nav("/shop", { state: { products: data, searchText: text } })
    if (data?.length === 1) {
      nav(`/product/${slugUrl(data?.[0]?.name)}`, { state: { product: data?.[0], searchText: text } })
    }
  };

  const { Provider } = useShopContext();

  useEffect(() => {
    dataCate?.node && handleOnSelectCate(dataCate?.node)
  }, [dataCate])
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
          handleFilterPrice,
          rangePrice,
          filterPrice,
          setFilterPrice,
          
          setRangePrice,
          handleOnSearch
        }}
      >
        {
          dataCate?.node !== undefined ? (
            <BreadCrumb label={`Danh Mục: ${dataCate?.node.name}` || 'Sản Phẩm'} isForSearching={searchText} offPath={searchText} />
          ) : (
            <BreadCrumb
              label={searchText ? `Search Results for: ${searchText}` : "Sản Phẩm"}
              isForSearching={searchText}
              offPath={searchText}
            />
          )
        }
        <div className="lg:hidden">
          <div
            className={`fixed  w-[400px] overflow-auto top-0 h-[100vh] bg-white z-[99999999999] transition-all duration-500 ease-linear ${isOpeningFilterProduct ? "left-[0]" : "-left-full"
              }  `}
          >
            <div className="py-[18px] px-5 bg-[#1c2224] text-white text-[16px] font-semibold font-poppins flex justify-between">
              <h5 className="text-white">Product Filters </h5>
              <button
                onClick={() => setIsOpeningFilterProduct(false)}
                className="w-[26px] h-[26px] leading-[26px] bg-white rounded-full text-black font-bold"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="py-5 px-[10px]">
              <MobileSidebar />
            </div>
          </div>
        </div>
        <div className="py-20 relative">
          <Container className={"screens-576:max-w-[540px]"}>
            <Row>
              <Col 
                className={
                  "w-full hidden screens-600:block screens-992:w-3/12 order-2 mt-10 md:mt-0  screens-600:order-1 screens-992:order-none"
                }
              >
                <div className="">
                  <Sidebar categories={categories} />
                </div>
              </Col>
              <Col className={"w-full screens-992:w-9/12 order-1 md:order-2 "}>
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
