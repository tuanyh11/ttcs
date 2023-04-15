import React from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowDown from "../../../assets/icons/ArrowDown";
import Bag from "../../../assets/icons/Bag";
import Box from "../../../assets/icons/Box";
import Home from "../../../assets/icons/Home";
import Thunder from "../../../assets/icons/Thunder";
import UserIcon from "../../../assets/icons/UserIcon";

const navData = [
  {
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="stroke-1.5"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    name: "Dashboard",
    childrens: [],
  },
  {
    path: '/apps',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="stroke-1.5"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    name: "Apps",
    childrens: [
      {
        path: "users",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="stroke-1.5"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        ),
        name: 'Users'
      },

      {
        path: null,
        icon: (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="stroke-1.5"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        ),
        name: ' E-Commerce'
      },
    ],
  },
];

const Nav = () => {
  return (
    <div>
      <div className="relative z-50 hidden md:block">
        <ul className="pb-3 xl:pb-0 xl:px-[50px] flex flex-wrap">
          <li className="   relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90">
            <NavLink
              to={"/"}
              className={({isActive}) => {
                return `h-[55px] ${isActive ? 'bg-slate-100 nav-half-moon text-black' : 'text-white'} rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center  relative px-5 mr-1 opacity-100  animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards animate-delay-20`
              }}
            >
              <div className="dark:text-slate-400  ">
                <Home/>
              </div>
              <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400  font-medium ">
                Bảng Điều Khiển
              </div>
            </NavLink>
          </li>

          <li className=" relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90 [&:hover>a>div:nth-child(1)]:before:bg-white/5 [&:hover>a>div:nth-child(1)]:before:dark:bg-darkmode-500/70">
            <NavLink
              to="/e-commerce"
              // onClick={(e) => e.preventDefault()}
              className={({isActive}) => {
                return `h-[55px] ${isActive ? 'bg-slate-100 nav-half-moon text-black' : 'text-white'} rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center  relative px-5 mr-1 opacity-100  animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards animate-delay-20`
              }}
            >
              <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
                <Bag/>
              </div>
              <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400">
                E-Commerce
                <ArrowDown/>
              </div>
            </NavLink>

         

            <ul className="xl:left-[100%] xl:-ml-[4px] shadow-[0px_3px_20px_#0000000b] bg-primary hidden w-56 absolute rounded-md z-20 px-0 top-0 mt-14 xl:-mt-5 before:block before:absolute before:w-full before:h-full before:bg-black/10 before:inset-0 before:rounded-md before:z-[-1] dark:bg-darkmode-600 dark:shadow-[0px_3px_7px_#0000001c]">
                  <li className="px-5 relative [&amp;:hover>ul]:block [&amp;:hover>a>div:nth-child(2)>svg]:-rotate-90">
                    <Link
                      to="/e-commerce/category"
                      className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-0 mr-0"
                    >
                      <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
                       <Thunder/>
                      </div>
                      <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 w-full">
                         Danh Mục
                      </div>
                    </Link>
                  </li>

                  <li className="px-5 relative [&amp;:hover>ul]:block [&amp;:hover>a>div:nth-child(2)>svg]:-rotate-90">
                    <Link
                      to="/e-commerce/add-product"
                      className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-0 mr-0"
                    >
                      <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
                       <Thunder/>
                      </div>
                      <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 w-full">
                        Tạo Sản Phẩm
                      </div>
                    </Link>
                  </li>
                  <li className="px-5 relative [&amp;:hover>ul]:block [&amp;:hover>a>div:nth-child(2)>svg]:-rotate-90">
                    <Link
                      to={"/e-commerce"}
                      className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-0 mr-0"
                    >
                      <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
                       <Thunder/>
                      </div>
                      <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 w-full">
                        Danh Sách Sản phẩm
                      </div>
                    </Link>
                  </li>

                  {/* <li className="px-5 relative [&amp;:hover>ul]:block [&amp;:hover>a>div:nth-child(2)>svg]:-rotate-90">
                    <Link
                        to={"/e-commerce/reviews"}
                      className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-0 mr-0"
                    >
                      <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
                       <Thunder/>
                      </div>
                      <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 w-full">
                        Reviews
                      </div>
                    </Link>
                  </li> */}
                </ul>
          </li>

          <li className=" relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90 [&:hover>a>div:nth-child(1)]:before:bg-white/5 [&:hover>a>div:nth-child(1)]:before:dark:bg-darkmode-500/70">
            <NavLink
              to="/orders"
              // onClick={(e) => e.preventDefault()}
              className={({isActive}) => {
                return `h-[55px] ${isActive ? 'bg-slate-100 nav-half-moon text-black' : 'text-white'} rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center  relative px-5 mr-1 opacity-100  animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards animate-delay-20`
              }}
            >
              <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
                <Box/>
              </div>
              <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400">
                Đặt Hàng
                {/* <ArrowDown/> */}
              </div>
            </NavLink>
          </li>
          <li className=" relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90 [&:hover>a>div:nth-child(1)]:before:bg-white/5 [&:hover>a>div:nth-child(1)]:before:dark:bg-darkmode-500/70">
            <NavLink
              to="/users"
              // onClick={(e) => e.preventDefault()}
              className={({isActive}) => {
                return `h-[55px] ${isActive ? 'bg-slate-100 nav-half-moon text-black' : 'text-white'} rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center  relative px-5 mr-1 opacity-100  animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards animate-delay-20`
              }}
            >
              <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
                <UserIcon/>
              </div>
              <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400">
                Người Dùng
                {/* <ArrowDown/> */}
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
