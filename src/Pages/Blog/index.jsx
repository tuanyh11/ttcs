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


  return (
    <div>

    </div>
  );
};

export default Blog;
