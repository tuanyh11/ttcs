import React from "react";
import { Link, NavLink } from "react-router-dom";

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
          <li className=" nav-half-moon  relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90">
            <Link
              to={"/"}
              className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-5 mr-1 z-10 bg-slate-100 dark:bg-darkmode-700 before:content-[''] before:w-[20px] before:h-[20px] before:-ml-[20px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:bg-menu-corner before:absolute before:bottom-0 before:left-0 before:hidden before:xl:block dark:before:bg-menu-corner-dark after:content-[''] after:w-[20px] after:h-[20px] after:-mr-[20px] after:rotate-180 after:scale-[1.04] after:bg-[length:100%] after:bg-menu-corner after:absolute after:bottom-0 after:right-0 after:hidden after:xl:block dark:after:bg-menu-corner-dark"
            >
              <div className="dark:text-slate-400 text-primary dark:text-white">
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
              </div>
              <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 text-black font-medium dark:text-white">
                Dashboard
              </div>
            </Link>
          </li>

          <li className=" relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90 [&:hover>a>div:nth-child(1)]:before:bg-white/5 [&:hover>a>div:nth-child(1)]:before:dark:bg-darkmode-500/70">
            <NavLink
              to="/apps"
              className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-5 mr-1 opacity-100  animate-[0.4s_ease-in-out_0.3s_intro-menu] animate-fill-mode-forwards animate-delay-20"
            >
              <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
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
              </div>
              <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400">
                Apps
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
                  className="stroke-1.5 hidden w-4 h-4 transition duration-100 ease-in xl:block ml-2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </NavLink>

            <ul className="xl:left-[100%] xl:-ml-[4px] shadow-[0px_3px_20px_#0000000b] bg-primary hidden w-56 absolute rounded-md z-20 px-0 top-0 mt-14 xl:-mt-5 before:block before:absolute before:w-full before:h-full before:bg-black/10 before:inset-0 before:rounded-md before:z-[-1] dark:bg-darkmode-600 dark:shadow-[0px_3px_7px_#0000001c]">
              <li className="px-5 relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90">
                <Link
                  to={"users"}
                  className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-0 mr-0"
                >
                  <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
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
                  </div>
                  <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 w-full">
                    Users
                  </div>
                </Link>
              </li>

              <li className="px-5 relative [&:hover>ul]:block [&:hover>a>div:nth-child(2)>svg]:-rotate-90">
                <Link
                  to={"/e-commerce"}
                  className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-0 mr-0"
                >
                  <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
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
                  </div>
                  <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 w-full">
                    E-Commerce
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
                      className="stroke-1.5 hidden w-4 h-4 transition duration-100 ease-in xl:block ml-auto"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </Link>

                <ul className="left-[100%] ml-0 shadow-[0px_3px_20px_#0000000b] bg-primary hidden w-56 absolute rounded-md z-20 px-0 top-0 mt-0 before:block before:absolute before:w-full before:h-full before:bg-black/10 before:inset-0 before:rounded-md before:z-[-1] dark:bg-darkmode-600 dark:shadow-[0px_3px_7px_#0000001c]">
                  <li className="px-5 relative [&amp;:hover>ul]:block [&amp;:hover>a>div:nth-child(2)>svg]:-rotate-90">
                    <Link
                      to="/e-commerce/category"
                      className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-0 mr-0"
                    >
                      <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
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
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                      </div>
                      <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 w-full">
                        Categories
                      </div>
                    </Link>
                  </li>

                  <li className="px-5 relative [&amp;:hover>ul]:block [&amp;:hover>a>div:nth-child(2)>svg]:-rotate-90">
                    <Link
                      to="/e-commerce/add-product"
                      className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-0 mr-0"
                    >
                      <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
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
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                      </div>
                      <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 w-full">
                        Add Product
                      </div>
                    </Link>
                  </li>
                  <li className="px-5 relative [&amp;:hover>ul]:block [&amp;:hover>a>div:nth-child(2)>svg]:-rotate-90">
                    <Link
                      to={"/e-commerce/product-list"}
                      className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-0 mr-0"
                    >
                      <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
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
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                      </div>
                      <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 w-full">
                        Product List
                      </div>
                    </Link>
                  </li>

                  <li className="px-5 relative [&amp;:hover>ul]:block [&amp;:hover>a>div:nth-child(2)>svg]:-rotate-90">
                    <Link
                        to={"/e-commerce/reviews"}
                      className="h-[55px] rounded-full xl:rounded-b-none xl:rounded-t-[1rem] flex items-center text-white relative px-0 mr-0"
                    >
                      <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-full xl:before:rounded-b-none xl:before:rounded-t-lg before:transition before:ease-in before:duration-100">
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
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                      </div>
                      <div className="ml-3 flex items-center whitespace-nowrap dark:text-slate-400 w-full">
                        Reviews
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
