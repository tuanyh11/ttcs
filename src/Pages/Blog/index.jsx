import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../../Components";
import { Col, Container, Row } from "../../Components";
import Sidebar from "./Sidebar";
import { useBlogContext } from "../../hooks";
import { getSibarBlogdata } from "../../api";
import { Outlet } from "react-router-dom";

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

  console.log(sidebarData);

  return (
    <div>
      <BreadCrumb />
      <div className="py-[80px]">
        <Provider value={
          {
          ...sidebarData,

          }
        }>
          <Container>
            <Row>
              <Col className={"w-4/12"}>
                <Sidebar />
              </Col>
              <Col className={"w-8/12"}>
                <Outlet />
              </Col>
            </Row>
          </Container>
        </Provider>
      </div>
    </div>
  );
};

export default Blog;
