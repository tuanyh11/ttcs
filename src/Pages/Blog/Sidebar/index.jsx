import React from "react";
import { Link } from "react-router-dom";
import Recent from "./Recent";

const Sidebar = () => {
  return (
    <div>
      <ul className="">
        <li className="">
          <div>
            <div className="p-10">
              <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
                Recent Posts
              </h4>
            </div>

            <ul className="">
              {[...new Array(5).keys()].map((index) => {
                return (
                  <li key={index} className="">
                    <Link to={"/"}>The Problem With Typefaces on the Web</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
      </ul>
    </div>
  );
};

export default Sidebar;
