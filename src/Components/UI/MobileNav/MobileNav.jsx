import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCartStore } from "../../store";

const MobileNav = ({onClickOpen = () => {}}) => {

  const { pathname } = useLocation();

  const {getTotal} = useCartStore()
  return (
    <>
      <div className="fixed z-[999999] bottom-0 right-0 left-0 text-[21px] text-[#9b9b9b] lg:hidden shadow-[(0_.5rem_1rem_rgba(0,0,0,.15))]">
        <div className={"bg-white text-center flex"}>
          <div className={"w-3/12 border-r border-[#edf1f4]"}>
            <div className="py-5 px-[7px] ">
              <Link
                to={"/"}
                className="fal text-[21px] font-medium fa-home "
              ></Link>
            </div>
          </div>
          <div className={"w-3/12 border-r border-[#edf1f4]"}>
            <div className="py-5 px-[7px] ">
              {pathname !== "/shop" ? (
                <Link
                  to="/shop"
                  className="fal text-[21px] font-medium fa-th-large"
                ></Link>
              ) : (
                <button
                  onClick={() =>
                    onClickOpen()
                  }
                  className="fal text-[21px] font-medium fa-filter"
                ></button>
              )}
            </div>
          </div>
          <div className={"w-3/12 border-r border-[#edf1f4]"}>
            <div className="py-5 px-[7px]  relative">
              <Link
                to={"/cart"}
                className="fal text-[21px] font-medium fa-shopping-cart"
              ></Link>
              <span className="w-[18px] h-[18px] text-white text-[10px] rounded-full bg-main-color block text-center leading-[18px] absolute z-10 top-1/2 -translate-y-full  right-[20px]">
                {Number(getTotal())}
              </span>
            </div>
          </div>
          <div className={"w-3/12"}>
            <div className="py-5 px-[7px] ">
              <Link
                to={"/my-account"}
                className="fal text-[21px] font-medium fa-user-circle"
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
