import React, { useState } from "react";
import userStore from "../../../store/user.store";
import UserIcon from "../../../assets/icons/UserIcon";

const Header = () => {

  const [isOpening, setIsOpening] = useState(false)

  const {user, logOut} = userStore()

  const handleLogout = () => {
    logOut()
    setIsOpening(false)
  }

  return (
    <div>
      <div className="border-b border-white/[0.08] mt-[2.2rem] md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10">
        <div className="flex items-center h-[70px] z-[51] relative">
          <a
            className="hidden -intro-x md:flex"
            href="/top-menu/dashboard-overview-1"
          >
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="w-6"
              src="http://rubick-react.left4code.com/assets/logo.9a88cec5.svg"
            />
            <span className="ml-3 text-lg text-white"> Chakta </span>
          </a>

          <nav className="flex h-full md:ml-10 md:pl-10 md:border-l border-white/[0.08] mr-auto -intro-x">
            <ol className="flex items-center text-primary dark:text-slate-300 text-white/90">
              {/* <li className="">
                <a href="/">Ứng Dụng </a>
              </li> */}
              <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-bredcrumb-chevron-light before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-bredcrumb-chevron-darkmode text-white/70">
                <a href="/">Bảng Điều khiển</a>
              </li>
            </ol>
          </nav>

          <div className="relative mr-3 intro-x sm:mr-6">
            <div className="hidden sm:block">
              <input
                type="text"
                className="py-2 pl-4 outline-none disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 border-transparent w-56 shadow-none rounded-full bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72 dark:bg-darkmode-400/70"
                placeholder="Search..."
              />
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
                className="stroke-1.5 absolute inset-y-0 right-0 w-5 h-5 my-auto mr-3 text-slate-600 dark:text-slate-500"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <a className="relative text-white/70 sm:hidden" href="">
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
                className="stroke-1.5 w-5 h-5 dark:text-slate-500"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </a>
          </div>

          <div
            className="relative mr-4 intro-x sm:mr-6"
            data-headlessui-state=""
          >
            <div
              className="cursor-pointer relative text-white/70 outline-none block before:content-[''] before:w-[8px] before:h-[8px] before:rounded-full before:absolute before:top-[-2px] before:right-0 before:bg-danger"
              aria-expanded="false"
              data-headlessui-state=""
            >
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
                className="stroke-1.5 w-5 h-5 dark:text-slate-500"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
          </div>

          {<div className="relative" data-headlessui-state="">
            <div
              onClick={() => setIsOpening(!isOpening)}

              className="cursor-pointer block w-8 h-8 overflow-hidden scale-110 rounded-full shadow-lg image-fit zoom-in intro-x"
              id="headlessui-menu-button-:rr:"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
            >
              {/* <img
                alt="Midone Tailwind HTML Admin Template"
                src="/assets/profile-14.67599da9.jpg"
              /> */}
              
              <div className=" text-white"><UserIcon/></div>
            </div>
            {isOpening && <div className="absolute z-30 top-[100%] right-0 mt-1 visible opacity-100 translate-y-0">
              <div
                className="p-2 shadow-[0px_3px_10px_#00000017] border-transparent rounded-md dark:bg-darkmode-600 dark:border-transparent w-56 mt-px relative bg-primary/70 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
                aria-labelledby="headlessui-menu-button-:rk:"
                id="headlessui-menu-items-:r2o:"
                role="menu"
                data-headlessui-state="open"
              >
                <div className="p-2 font-normal" role="none">
                  <div className="font-medium capitalize" role="none">
                    {user?.userName}
                  </div>
                  <div
                    className="text-xs text-white/70 mt-0.5 dark:text-slate-500"
                    role="none"
                  >
                    {user?.admin && 'Administrator'} 
                  </div>
                </div>
                <div
                  className="h-px my-2 -mx-2 dark:bg-darkmode-400 bg-white/[0.08]"
                  role="none"
                ></div>
                <a
                  className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md dark:bg-darkmode-600 dark:hover:bg-darkmode-400 hover:bg-white/5"
                  id="headlessui-menu-item-:r2p:"
                  role="menuitem"
                  data-headlessui-state=""
                >
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
                    className="stroke-1.5 w-4 h-4 mr-2"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>{" "}
                  Profile
                </a>
                <a
                  className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md dark:bg-darkmode-600 dark:hover:bg-darkmode-400 hover:bg-white/5"
                  id="headlessui-menu-item-:r2q:"
                  role="menuitem"
                  data-headlessui-state=""
                >
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
                    className="stroke-1.5 w-4 h-4 mr-2"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>{" "}
                  Add Account
                </a>
                <a
                  className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md dark:bg-darkmode-600 dark:hover:bg-darkmode-400 hover:bg-white/5"
                  id="headlessui-menu-item-:r2r:"
                  role="menuitem"
                  data-headlessui-state=""
                >
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
                    className="stroke-1.5 w-4 h-4 mr-2"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>{" "}
                  Reset Password
                </a>
                <a
                  className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md dark:bg-darkmode-600 dark:hover:bg-darkmode-400 hover:bg-white/5"
                  id="headlessui-menu-item-:r2s:"
                  role="menuitem"
                  data-headlessui-state=""
                >
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
                    className="stroke-1.5 w-4 h-4 mr-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>{" "}
                  Help
                </a>
                <div
                  className="h-px my-2 -mx-2 dark:bg-darkmode-400 bg-white/[0.08]"
                  role="none"
                ></div>
                <button
                  onClick={handleLogout}
                  className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md dark:bg-darkmode-600 dark:hover:bg-darkmode-400 hover:bg-white/5"
                  role="menuitem"
                  data-headlessui-state=""
                >
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
                    className="stroke-1.5 w-4 h-4 mr-2"
                  >
                    <rect
                      x="1"
                      y="5"
                      width="22"
                      height="14"
                      rx="7"
                      ry="7"
                    ></rect>
                    <circle cx="16" cy="12" r="3"></circle>
                  </svg>{" "}
                  Logout
                </button>
              </div>
            </div> }
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
