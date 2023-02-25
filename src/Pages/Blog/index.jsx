import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../../Components";
import { Col, Container, Row } from "../../Components";
import Sidebar from "./Sidebar";
import { useBlogContext } from "../../hooks";
import { getSideBarBlogData } from "../../api";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";

const Blog = () => {
  const { Provider } = useBlogContext();


  const  {data} = useQuery({
    queryKey: ['blogCategory'],
    queryFn: () => getSideBarBlogData().then(res => res.data)
  })

  return (
    <div>
      <BreadCrumb />
      <div className="py-[80px]">
        <Provider value={
          {
          ...data,
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
