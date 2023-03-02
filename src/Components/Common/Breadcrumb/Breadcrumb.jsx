import React from "react";
import { Link, useLocation } from "react-router-dom";
import {revert} from 'url-slug'

const Breadcrumb = ({ image, label, offPath = false}) => {

  const loc = useLocation()
  console.log(loc)
  const pathname = loc.pathname.substring(1).split("/")
  //  `Search Results for: ${label}`
  return (
    <div>
      <div
        className="py-20 relative after:inset-0 after:absolute z-40 after:bg-[rgba(0,0,0,0.75)] bg-center bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${"https://klbtheme.com/chakta/wp-content/uploads/2021/01/breadcrumbs-bg.jpg"})`,
        }}
      >
        <h3
          to={"/"}
          className="text-center px-[15px] leading-[1.2] lg:leading-[72px] mb-[10px] block text-white relative z-50  text-[32px] md:text-4xl lg:text-[40px] xl:text-[60px] font-[600] font-poppins  "
        >
          { label}
        </h3>
        {!offPath && <div className="flex justify-center relative z-50 leading-[28px]">
          <Link to={"/"} className="text-white uppercase">Home</Link>
          {pathname.map((item, i) => {
            const  path = revert(item)
            return (
              <div key={item} >
                <i className="fa-solid fa-angle-right text-white ml-3 mr-2"></i>
                <Link to={`/${item}`} className="inline-block uppercase">
                  <span className={`${pathname.length - 1 === i ? 'text-main-color' : 'text-white' } `}>{path}</span>
                </Link>
              </div>
            );
          })}
        </div>}
      </div>
    </div>
  );
};

export default Breadcrumb;
