import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbPath = ({ pathname }) => {
  // console.log(pathname);
  return (
    <div className="elementor flex relative ml-auto mr-auto h-full ">
      <div
        className="relative z-[1] w-full flex h-[270px] bg-[url(https://klbtheme.com/chakta/wp-content/plugins/chakta-core/elementor/images/breadcrumb.jpg)] 
       after:absolute after:w-full after:h-[270px] after:top-0 after:left-0 after:-z-[1] after:bg-[#191a1bce] bg-center bg-cover bg-no-repeat py-20"
      >
        <div className="max-w-[1200px] mx-auto px-4 w-full">
          <div className="flex justify-center flex-wrap">
            <div className="sm:w-2/3 w-full">
              <div className="relative md:px-4 px-0 w-full">
                <div className="breadcrumbs-content text-center">
                  <h1 className="text-white font-semibold md:text-[60px] text-[32px] mb-3 font-poppins">
                    {pathname}
                  </h1>
                  <ul className="breadcrumb-menu mt-[25px]">
                    <li className="inline-block uppercase">
                      <Link
                        to="/home"
                        className="text-white"
                        title="Home"
                        rel="bookmark"
                      >
                        Home
                      </Link>{" "}
                    </li>
                    <li className="inline-block">
                      <i className="fa-solid fa-angle-right text-white ml-3 mr-2"></i>
                    </li>
                    <li className="inline-block uppercase">
                      {
                        pathname === 'Categories' ? (
                          <span className="text-[#ff4545]"> product {pathname}</span>

                        ) : (
                          <span className="text-[#ff4545]">{pathname}</span>
                        )
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbPath;
