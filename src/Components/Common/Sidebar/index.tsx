import React from "react";
import { Link } from "react-router-dom";

const sideData = [
  {
    path: '/', 
    
  }
]

const Sidebar = () => {
  return (
    <div>
      {" "}
      <nav className="pr-5 pb-16 overflow-x-hidden hidden md:block w-[85px] xl:w-[230px]">
        <a
          className="flex items-center pt-4 pl-5 intro-x"
          href="/side-menu/dashboard-overview-1"
        >
          <img
            alt="Midone Tailwind HTML Admin Template"
            className="w-6"
            src="http://rubick-react.left4code.com/assets/logo.9a88cec5.svg"
          />
          <span className="hidden ml-3 text-lg text-white xl:block">
            Rubick
          </span>
        </a>

        <div className="my-6 w-full h-px bg-white/[0.08] z-10 relative dark:bg-white/[0.07]"></div>

        <ul className="">
          <li>
            <Link
              className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full z-10 bg-slate-100 dark:bg-darkmode-700 before:content-[''] before:w-[30px] before:h-[30px] before:-mt-[30px] before:rotate-90 before:scale-[1.04] before:bg-[length:100%] before:bg-menu-corner before:absolute before:top-0 before:right-0 before:-mr-5 dark:before:bg-menu-corner-dark after:content-[''] after:w-[30px] after:h-[30px] after:mt-[50px] after:scale-[1.04] after:bg-[length:100%] after:bg-menu-corner after:absolute after:top-0 after:right-0 after:-mr-5 dark:after:bg-menu-corner-dark"
              to={"/"}
            >
              <div className="text-primary dark:text-slate-300 before:content-[''] before:z-[-1] before:absolute before:top-0 before:right-0 before:-mr-5 before:w-12 before:h-full before:bg-slate-100 before:dark:bg-darkmode-700">
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
              <div className="hidden xl:flex items-center w-full ml-3 text-slate-800 font-medium dark:text-slate-300">
                Dashboard
              </div>
            </Link>
          </li>
          <li>
            <a
              className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full [&amp;>div:nth-child(1)]:hover:before:bg-white/5 [&amp;>div:nth-child(1)]:hover:before:dark:bg-darkmode-500/70 opacity-100  animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-30"
              href="#"
            >
              <div className="dark:text-slate-400 before:content-[''] before:z-[-1] before:w-[230px] before:absolute before:top-0 before:left-0 before:h-full before:rounded-l-full before:transition before:ease-in before:duration-100">
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
              <div className="hidden xl:flex items-center w-full ml-3 dark:text-slate-400">
                E-commerce
                <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block">
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
                    className="stroke-1.5 w-4 h-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </a>
            <ul className="bg-black/10 rounded-lg dark:bg-darkmode-900/30 hidden">
              <li>
                <a
                  className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-10"
                  href="/categories"
                >
                  <div className="">
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
                  <div className="hidden xl:flex items-center w-full ml-3">
                    Categories
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-20"
                  href="/add-product"
                >
                  <div className="">
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
                  <div className="hidden xl:flex items-center w-full ml-3">
                    Add Product
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-30"
                  href="#"
                >
                  <div className="">
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
                  <div className="hidden xl:flex items-center w-full ml-3">
                    Products
                    <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block transform rotate-180">
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
                        className="stroke-1.5 w-4 h-4"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
                <ul className="bg-black/10 rounded-lg dark:bg-darkmode-900/30 block">
                  <li>
                    <a
                      className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-10"
                      href="/product-list"
                    >
                      <div className="">
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
                      <div className="hidden xl:flex items-center w-full ml-3">
                        Product List
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-20"
                      href="/product-grid"
                    >
                      <div className="">
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
                      <div className="hidden xl:flex items-center w-full ml-3">
                        Product Grid
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-40"
                  href="#"
                >
                  <div className="">
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
                  <div className="hidden xl:flex items-center w-full ml-3">
                    Transactions
                    <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block">
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
                        className="stroke-1.5 w-4 h-4"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
                <ul className="bg-black/10 rounded-lg dark:bg-darkmode-900/30 hidden">
                  <li>
                    <a
                      className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-10"
                      href="/transaction-list"
                    >
                      <div className="">
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
                      <div className="hidden xl:flex items-center w-full ml-3">
                        Transaction List
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-20"
                      href="/transaction-detail"
                    >
                      <div className="">
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
                      <div className="hidden xl:flex items-center w-full ml-3">
                        Transaction Detail
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-50"
                  href="#"
                >
                  <div className="">
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
                  <div className="hidden xl:flex items-center w-full ml-3">
                    Sellers
                    <div className="transition ease-in duration-100 ml-auto mr-5 hidden xl:block">
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
                        className="stroke-1.5 w-4 h-4"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
                <ul className="bg-black/10 rounded-lg dark:bg-darkmode-900/30 hidden">
                  <li>
                    <a
                      className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-10"
                      href="/seller-list"
                    >
                      <div className="">
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
                      <div className="hidden xl:flex items-center w-full ml-3">
                        Seller List
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-20"
                      href="/seller-detail"
                    >
                      <div className="">
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
                      <div className="hidden xl:flex items-center w-full ml-3">
                        Seller Detail
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="cursor-pointer h-[50px] flex items-center pl-5 text-white mb-1 relative rounded-full text-white/70 dark:text-slate-400 opacity-0 translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-60"
                  href="/reviews"
                >
                  <div className="">
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
                  <div className="hidden xl:flex items-center w-full ml-3">
                    Reviews
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
