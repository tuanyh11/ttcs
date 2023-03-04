import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../../Components";
import { Col, Container, Row } from "../../Components";
import Sidebar from "./Sidebar";
import { useBlogContext } from "../../hooks";
import { getSideBarBlogData, searchBlogs } from "../../api";
import { Outlet, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import queryString from "query-string";

const Blog = () => {
  const { Provider } = useBlogContext();
  const  {data} = useQuery({
    queryKey: ['blogCategory'],
    queryFn: () => getSideBarBlogData().then(res => res.data),
    refetchOnWindowFocus: false,
  });



  const loc = useLocation()

  const query = queryString.parse(loc.search);

  const search = loc.state?.search

  const cateName = query?.categoryName

  const tagName = loc.state?.tagName

  let path = 'Blog posts'

  if(search) path = `Search Results for: ${search}`

  const isDetail = loc.pathname.split('/').length > 2
  

  if(cateName) path = `Category : ${cateName}`
  if(tagName) path = `Tag : ${tagName}`
  // cateName

  return (
    <div>
      {!isDetail && <BreadCrumb label={ path} offPath={true} />}
      <div className="py-[80px]">
        <Provider value={
          {
          ...data
          }
        }>
          <Container >
            <Row>
              <Col className={"w-full order-2 screens-768:order-1 lg:w-4/12 mt-10  screens-768:mt-0 "}>
                <Sidebar />
              </Col>
              <Col className={"w-full order-1 screens-768:order-2 lg:w-8/12"}>
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
