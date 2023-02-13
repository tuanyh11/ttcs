import React from "react";
import { Link } from "react-router-dom";
import Col from "../Col/Col";
import Container from "../Container/Container";
import Row from "../Row/Row";
// import "./header.css";

const data = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "shop",
    link: "/shop",
  },
  {
    id: 4,
    title: "Contact us",
    link: "/contact",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 6,
    title: "Contact us",
    link: "/contact",
  },
];

const HeaderNav = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center py-[15px] xl:py-0">
          <Link to="/">
            <img
              className="w-[192px] h-auto max-w-full"
              src="https://klbtheme.com/chakta/wp-content/uploads/2021/01/logo.png"
              alt="Chakta – Auto Parts Shop WooCommerce Theme"
            />
          </Link>


          {/* default: off xl: display */}
          <nav className="hidden xl:flex items-center">
            {data.map((nav) => 
              <Link className="text-[16px] font-poppins py-[34px] px-[15px] block font-semibold text-dark-color uppercase" key={nav.id} to={nav.link}>
                {nav.title}
              </Link>
            )}
          </nav>

            {/* default: off xl: display */}
          <div className="hidden xl:flex items-center">
            <div className="relative">
              <input type="text" className="h-[45px] w-[170px] rounded-[22px] border-[2px] px-5" placeholder="Search" />
              <button className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-5">
              <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="mr-[10px] ml-[30px]">
              <Link to={"/cart"} className="relative">
                <i class="fa-solid fa-cart-shopping"></i>
                <span className="absolute text-[11px] rounded-full min-w-[16px] h-4 text-center bg-main-color leading-4 text-white  top-[-5px] right-[-13px]">0</span>
              </Link>
            </div>
          </div>

          <div className="">
            <span className="h-[3px] w-[30px] bg-main-color block mt-[5px] rounded-[3px] cursor-pointer transition duration-300"></span>
            <span className="h-[3px] w-[30px] bg-main-color block mt-[5px] rounded-[3px] cursor-pointer transition duration-300"></span>
            <span className="h-[3px] w-[30px] bg-main-color block mt-[5px] rounded-[3px] cursor-pointer transition duration-300"></span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderNav;
