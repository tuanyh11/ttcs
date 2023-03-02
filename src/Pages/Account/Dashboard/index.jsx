import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Col, Row, Container } from "../../../Components";
import IndexPage from "./IndexPage";

const buttons = [
  {
    name: "Dashboard",
    link: "/my-account",
  },
  {
    name: "Orders",
    link: "orders",
  },
  {
    name: "downloads",
    link: "downloads",
  },
  {
    name: "addresses",
    link: "addresses",
  },
  {
    name: "account details",
    link: "account-details",
  },
  {
    name: "wishlist",
    link: "wishlist",
  },
];

const Dashboard = () => {
  console.log(useLocation())

  return (
    <div>
      <Row>
        <Col>
          <div className="">
            <div className="flex gap-1 mb-[25px]">
              {buttons.map((button, index) => (
                <Link
                  className="px-[35px] py-3 leading-[27px] bg-main-color border-main-color border text-white rounded-[0.25rem] hover:bg-black transition-main hover:border-black capitalize "
                  to={button.link}
                  key={index}
                >
                  {button.name}
                </Link>
              ))}
            </div>

            <div className="">
              <Outlet/>  
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
