import React from "react";
import { HiOutlineMenuAlt2, HiOutlineHome } from "react-icons/hi";
import { CiShoppingCart, CiDeliveryTruck, CiUser } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useCart from "../store/cartStore";
const Sidebar = () => {
  const { products } = useCart();
  return (
    <div className="fixed top-0 left-0 h-screen p-2 bg-gray-100">
      <ul className="p-5 space-y-8">
        <li>
          <button>
            <HiOutlineMenuAlt2 size={"1.5rem"} />
          </button>
        </li>

        <li>
          <NavLink to="/">
            <button>
              <HiOutlineHome size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            <button className=" relative">
              <span className="text-[10px] font-semibold text-white p-1  bg-black rounded-full w-4 h-4 grid place-content-center top-0 right-0 translate-y-[-20%] translate-x-[20%] absolute ">
                {products?.length}
              </span>
              <CiShoppingCart size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/favs">
            <button>
              <IoHeartOutline size={"1.5rem"} />
            </button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            <button>
              <CiDeliveryTruck size={"1.5rem"} />
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/account">
            <button>
              <CiUser size={"1.5rem"} />
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
