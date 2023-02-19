import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useDate } from "../../../hooks";
import Button from "../../Common/Button/Button";

const images = [
  "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-1.jpg",
  "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-2.jpg",
  "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-3.jpg",
  "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-4.jpg",
];
const BlogCard = ({
  type = "image",
  settings = {},
  hiddenDescription = true,
  hiddenButton = false,
  hiddenBlockquote = true,
}) => {
  const getDate = useDate();

  return (
    <div>
      {type === "image" ? (
        <div className="">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="h-full">
                <Link  to={"/"} className="block">
                  <img
                    onClick={(e) => e.preventDefault()}
                    src={image}
                    alt=""
                    className="max-w-full block "
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div>
          <video width={"100%"} style={{ height: "470px" }} controls>
            <source src="https://www.youtube.com/watch?v=h9ahNz0GjDk" />
          </video>
        </div>
      )}

      <div className="pt-[30px] pb-[10px] px-[15px] md:px-10 border-2 -mt-[9px]">
        <div className="flex items-center gap-[22px] pb-[10px] mb-[15px] border-b capitalize">
          <div className="">
            <i className="mr-[10px] text-main-color fa-regular fa-calendar-days"></i>
            <Link to="/">{getDate()}</Link>
          </div>
          <div className="">
            <i className="mr-[10px] text-main-color fa-regular fa-folder"></i>
            <Link to="/">Video</Link>
          </div>

          <div className="">
            <i className="mr-[10px] text-main-color fa-regular fa-bookmark"></i>
            <Link to="/">video, Images</Link>
          </div>
        </div>
        <Link
          to={"/"}
          className="text-[30px] leading-[35px] mb-5 block text-black font-poppins font-semibold"
        >
          Mirage Deep Dive Under anding Timin Response
        </Link>
        <div className="">
          <p
            className={`mb-[25px] text-limit ${
              hiddenDescription ? "line-clamp-6" : ""
            } `}
          >
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt.
          </p>
          {!hiddenBlockquote && (
            <div className="">
              <blockquote className=" border-l-[5px] border-main-color my-[30px] py-10 px-[50px] bg-[#f8f8f8]">
                <p className=" text-[23px] font-medium leading-[1.3] text-[#222] mb-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <span className=" text-sm font-medium uppercase text-[#222] tracking-widest">
                  – Rosalina Pong
                </span>
              </blockquote>
            </div>
          )}
          <div className="mb-[25px]">
            {!hiddenButton && (
              <Button
                Tag="Link"
                to={`/blog/${'Mirage Deep Dive Under anding Timin Response'}`}
                state={{id: 1}}
                className="py-[10px] text-[14px] px-[35px] hover:bg-main-color hover:text-white transition-all duration-300 ease-out hover:border-main-color  leading-[27px] rounded-[28px] bg-white border-[#e5e5e5] border-solid border-2 text-[#696969]"
              >
                Read More
                <i className="fa-solid fa-circle-arrow-right ml-[10px]"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
