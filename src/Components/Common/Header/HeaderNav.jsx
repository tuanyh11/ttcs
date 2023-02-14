import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "../../../hooks";
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
    title: "Categories",
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

// lg, md, sm, xs display

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [text, setText] = useState("");

  const textSearch = useDebounce(text, 2000);

  const handleOnSearch = (e) => {
    setText(e.target.value);
  };


  return (
    <div>
      <Container className={"xl:max-w-[1420px]"}>
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
            {data.map((nav) => (
              <Link
                className="text-[16px] font-poppins py-[34px] px-[15px] block font-semibold text-dark-color uppercase"
                key={nav.id}
                to={nav.link}
              >
                {nav.title}
              </Link>
            ))}
          </nav>

          {/* default: off xl: display */}
          <div className="hidden xl:flex items-center">
            <div className="relative">
              <input
                type="text"
                className="h-[45px] w-[170px] rounded-[22px] border-[2px] pl-5 pr-10 outline-none "
                placeholder="Search"
                onChange={handleOnSearch}
              />
              <button className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-5">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="mr-[10px] ml-[30px]">
              <Link to={"/cart"} className="relative">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="absolute text-[11px] rounded-full min-w-[16px] h-4 text-center bg-main-color leading-4 text-white  top-[-5px] right-[-13px]">
                  0
                </span>
              </Link>
            </div>
          </div>

          <div
            className={`xl:hidden ${isOpen ? "nav-toggle" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="h-[3px] w-[30px] bg-main-color block mt-[5px] rounded-[3px] cursor-pointer transition duration-300 relative"></span>
            <span className="h-[3px] w-[30px] bg-main-color block mt-[5px] rounded-[3px] cursor-pointer transition duration-300 "></span>
            <span className="h-[3px] w-[30px] bg-main-color block mt-[5px] rounded-[3px] cursor-pointer transition duration-300 relative"></span>
          </div>
        </div>
        <ResHeaderNav
          onSetOpen={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          data={data}
        />
      </Container>
    </div>
  );
};

function ResHeaderNav({ onSetOpen, data, isOpen }) {
  return (
    <div
      className={`xl:hidden fixed w-[300px] bg-white duration-500 shadow-[0_5px_20px_rgb(0_0_0_/_10%)]  top-0 bottom-0 pt-[70px] left-0 transition ${
        isOpen ? "" : "-translate-x-full"
      }`}
    >
      <button
        className="absolute right-0 top-0 bg-main-color  p-[5px]"
        onClick={() => onSetOpen()}
      >
        <div className="w-[26px] h-[26px]  relative">
          <span className="w-full rotate-45 h-[2px] rounded-[6px] top-3 bg-white block absolute left-0"></span>
          <span className="w-full -rotate-45 h-[2px] rounded-[6px] bg-white block absolute bottom-3 left-0"></span>
        </div>
      </button>

      <div className="">
        <div className="">
          {data.map((nav) => (
            <Link
              className="text-[16px] font-poppins py-[13px] px-[26px] block font-semibold text-dark-color uppercase border-b last:border-none leading-[27px]"
              key={nav.id}
              to={nav.link}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
