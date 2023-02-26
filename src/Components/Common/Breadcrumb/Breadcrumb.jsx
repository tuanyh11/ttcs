import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ image, label}) => {

  const loc = useLocation()

  const pathname = loc.pathname.substring(1).split("/")

  
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
          className="text-center pb-8 block text-white relative z-50  text-[32px] md:text-4xl lg:text-[40px] xl:text-[60px] font-[600] font-poppins  "
        >
          {label}
        </h3>
        <div className="flex justify-center relative z-50">
          <Link to={"/"} className="text-white uppercase">Home</Link>
          {pathname.map((item, i) => {
            const  path = item?.replace("-", " ")
            return (
              <div key={item}>
                <i className="fa-solid fa-angle-right text-white ml-3 mr-2"></i>
                <Link to={`/${item}`} className="inline-block uppercase">
                  <span className={`${pathname.length - 1 === i ? 'text-main-color' : 'text-white' } `}>{path}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
