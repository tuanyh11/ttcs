import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../../Components";
import { Col, Container, Row } from "../../Components";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useBlogContext } from "../../hooks";
import { getSibarBlogdata } from "../../api";

const Blog = () => {
  const { Provider } = useBlogContext();

  const [sidebarData, setSidebarData] = useState({});

  const getData = async () => {
    try {
      const res = await getSibarBlogdata();
      setSidebarData(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  


  return (
    <div>
      <BreadCrumb />
      <div className="py-20">
        <Provider
          value={{
            categories: sidebarData?.categories?.edges,
            posts: sidebarData?.posts?.edges,
            tags: sidebarData?.tags?.edges,
          }}
        >
          <Container>
            <Row>
              <Col
                className={"w-full lg:w-4/12 order-2 mt-10 md:mt-0  md:order-1"}
              >
                <div className="">
                  <div className="relative mb-[30px]">
                    <input
                      type="text"
                      className=" h-[80px] border-[1px] pl-5  w-full pr-[84px]  outline-none "
                      placeholder="Search..."
                      // onChange={handleOnSearch}
                    />
                    <button className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-20 bg-main-color  text-white">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                  <Sidebar />
                </div>
              </Col>
              <Col className={"w-full lg:w-8/12 order-1 md:order-2"}>
                <Content />
              </Col>
            </Row>
          </Container>
        </Provider>
      </div>
    </div>
  );
};

export default Blog;
