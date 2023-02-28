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

  const [text, setText] = useState(null);


  const  {data} = useQuery({
    queryKey: ['blogCategory'],
    queryFn: () => getSideBarBlogData().then(res => res.data)
  });

  console.log(data);

  const handleOnSearch = (text) => {
    setText(text)
  }


  return (
    <div>
      <BreadCrumb label={ `${text ? `Search Results for: ${text}` : 'Blog posts'}`} offPath={true} />
      <div className="py-[80px]">
        <Provider value={
          {
          ...data,
          onSearch: handleOnSearch
          }
        }>
          <Container >
            <Row>
              <Col className={"w-full order-2 920:order-1 lg:w-4/12 "}>
                <Sidebar />
              </Col>
              <Col className={"w-full order-1 920:order-2 lg:w-8/12"}>
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
