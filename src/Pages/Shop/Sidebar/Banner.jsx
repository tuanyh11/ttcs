import React from "react";
import { Button } from "../../../Components";

const Banner = () => {
  return (
    <div>
      {" "}
      <div
        className="p-[135px_40px_145px_40px] bg-center bg-cover bg-no-repeat font-poppins relative after:inset-0 after:absolute affter:z-30 after:bg-[rgba(15,15,15,0.75)]  "
        style={{
          backgroundImage: `url(${"https://klbtheme.com/chakta/wp-content/uploads/2021/01/add-1.jpg"})`,
        }}
      >
        <div className="relative z-50">
          <h2 className="text-[40px] leading-[50px] mb-[25px] text-white text-center">
            <span className="block">Need Any</span>
            Auto Services
          </h2>
          <div className="flex justify-center">
            <Button
              Tag="Link"
              to="/shop"
              className="py-[14px] text-[14px] px-[45px]  leading-[27px] rounded-[28px]"
            >
              Shop Now
              <i className="fa-solid fa-circle-arrow-right ml-[10px]"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
