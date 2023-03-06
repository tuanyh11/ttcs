import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Col from "../Col/Col";
import Container from "../Container/Container";
import Row from "../Row/Row";
const langues = [
  {
    id: 1,
    name: "English",
  },
  {
    id: 2,
    name: "French",
  },
  {
    id: 3,
    name: "German",
  },
];

const currencies = [
  {
    id: 1,
    name: "usd",
  },
  {
    id: 2,
    name: "eur",
  },
  {
    id: 3,
    name: "gbr",
  },
];

const HeaderTop = () => {
  const [langue, setLangue] = useState(langues[0]);
  const [currency, setCurrency] = useState(currencies[0]);
  return (
    <div className={`p-[2px] bg-dark-color text-gray-color-100 `}>
      <div className={"custom-container"}>
        <Row className={"items-center"}>
          <Col className="md:w-4/12 lg:w-3/12">
            <div>
              <ul className="flex">
                <li className="leading-[42px] pr-[15px] relative group">
                  <div className="cursor-pointer">
                    {langue?.name}
                    <i className="fa-solid fa-chevron-down text-[10px] -translate-y-[2px] pl-1 cursor-default"></i>
                  </div>
                  <ul className="absolute top-full left-0 bg-[#111] z-[999] shadow-[0_0_0_1px_rgb(68_68_68_/_11%)] hidden group-hover:block">
                    {langues?.map((lang) => (
                      <li key={lang.id} className="leading-[35px] px-[18px] ">
                        {lang.name}
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="leading-[42px] pr-[15px] relative uppercase group">
                  <div className="menu-item-header cursor-pointer ">
                    {currency?.name}
                    <i className="fa-solid fa-chevron-down  text-[10px] -translate-y-[2px] pl-1 cursor-default"></i>
                  </div>

                  <ul className="absolute top-full left-0 bg-[#111] z-[999] shadow-[0_0_0_1px_rgb(68_68_68_/_11%)] hidden group-hover:block">
                    {currencies?.map((item) => (
                      <li key={item.id} className="leading-[35px] px-[18px]">
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </Col>

          <Col className="md:w-5/12 lg:w-6/12">
            <div className="text-center">
              <p className="leading-[1.8] inline-block">
                15% every product we have a great offer for you{" "}
                <Button
                  label={"SHOP NOW"}
                  Tag="Link"
                  to={"/"}
                  className="button-v2 ml-2 p-[7px_15px] leading-3 text-xs font-bold font-rubik"
                />
              </p>
            </div>
          </Col>

          <Col className="md:w-3/12 lg:w-3/12">
            <div className="flex lg:justify-end flex-wrap">
              <div className="pl-[15px]">
                <i className="fa-solid fa-lock mr-[6px]"></i>
                <Link to="/my-account" className=" leading-[42px]">
                  Sign in
                </Link>
              </div>
              <div className="pl-[15px] ">
                <i className="fa-solid fa-user mr-[6px]"></i>
                <Link to="/my-account" className="leading-[42px]">
                  Sign up
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeaderTop;
