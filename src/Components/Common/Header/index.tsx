import React from "react";

const Header = () => {
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
            <span className="ml-3 text-lg text-white"> Rubick </span>
          </a>

          <nav className="flex h-full md:ml-10 md:pl-10 md:border-l border-white/[0.08] mr-auto -intro-x">
            <ol className="flex items-center text-primary dark:text-slate-300 text-white/90">
              <li className="">
                <a href="/">Application</a>
              </li>
              <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-bredcrumb-chevron-light before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-bredcrumb-chevron-darkmode text-white/70">
                <a href="/">Dashboard</a>
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
              id="headlessui-popover-button-:ro:"
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

          <div className="relative" data-headlessui-state="">
            <div
              className="cursor-pointer block w-8 h-8 overflow-hidden scale-110 rounded-full shadow-lg image-fit zoom-in intro-x"
              id="headlessui-menu-button-:rr:"
              aria-haspopup="true"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <img
                alt="Midone Tailwind HTML Admin Template"
                src="/assets/profile-14.67599da9.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
