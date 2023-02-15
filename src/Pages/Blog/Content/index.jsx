import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Button } from "../../../Components";
import { useDate } from "../../../hooks";
import ReactPlayer from "react-player";
const images = [
  "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-1.jpg",
  "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-2.jpg",
  "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-3.jpg",
  "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-4.jpg",
];

function ProgressBar(props) {
  // This is the style object for the progress bar
  const style = {
    // Set the width to the value prop divided by the max prop
    width: `${(props.value / props.max) * 100}%`,
  };

  // This is the JSX that renders the progress bar
  return (
    <div className="w-full h-8 bg-[rgba(0,0,0,.8)] rounded-lg flex  items-center">
      {/* This is the div that shows the progress */}
      <div
        className="h-[0.3em] bg-[#666] rounded-lg hover:h-[0.5em]  cursor-pointer relative  transition-all duration-200 ease-in-out"
        style={style}
      ></div>
    </div>
  );
}

const Content = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const getDate = useDate();

  const [currentTime, setCurrentTime] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);

  // Create a ref for the player component

  // Create a function to handle the change of the input value

  let start = currentPage - 1;
  let end = currentPage + 1;
  const items = 10;

  if (start < 0) {
    start = 0;
    end = 2;
  }

  const pages = [...Array(Math.ceil(items / 3)).keys()];

  const showPages = pages.slice(start, end);

  const handleOnSetPage = (type) => {
    if(type === 'incr') {

      setCurrentPage(
        currentPage + 1 > pages.length - 1 ? currentPage : currentPage + 1
      );
    } else {
      setCurrentPage(
        currentPage - 1 < 0? currentPage : currentPage - 1
      );
    }
  };

  const isLastPage = currentPage === pages.length - 1
  const isFirstPage = currentPage - 2 >= 0

  console.log(isFirstPage)



  return (
    <div>
      <div className="mb-10">
        <div className="">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div className="h-full">
                <Link key={index} to={"/"} className="block">
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

        <div className="pt-[30px] pb-[10px] px-10 border-2 -mt-[9px]">
          <div className="flex items-center gap-[22px] pb-[10px] mb-[15px] border-b">
            <div className="">
              <i className="mr-[10px] text-main-color fa-regular fa-calendar-days"></i>
              <Link to="/">{getDate()}</Link>
            </div>
            <div className="">
              <i className="mr-[10px] text-main-color fa-regular fa-folder"></i>
              <Link to="/">Gallery</Link>
            </div>

            <div className="">
              <i className="mr-[10px] text-main-color fa-regular fa-bookmark"></i>
              <Link to="/">Envato, Images</Link>
            </div>
          </div>
          <Link
            to={"/"}
            className="text-[30px] leading-[35px] mb-5 block text-black font-poppins font-semibold"
          >
            Mirage Deep Dive Under anding Timin Response
          </Link>
          <div className="">
            <p className="mb-[25px] text-limit line-clamp-6 ">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore
            </p>
            <div className="mb-[25px]">
              <Button
                Tag="Link"
                to="/shop"
                className="py-[10px] text-[14px] px-[35px] hover:bg-main-color hover:text-white transition-all duration-300 ease-out hover:border-main-color  leading-[27px] rounded-[28px] bg-white border-[#e5e5e5] border-solid border-2 text-[#696969]"
              >
                Read More
                <i className="fa-solid fa-circle-arrow-right ml-[10px]"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="relative">
          <video width={"100%"} style={{ height: "470px" }} controls>
            <source src="https://www.youtube.com/watch?v=h9ahNz0GjDk" />
          </video>
        </div>

        <div className="pt-[30px] pb-[10px] px-10 border-2 -mt-[9px]">
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
            <p className="mb-[25px] text-limit line-clamp-6 ">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore
            </p>
            <div className="mb-[25px]">
              <Button
                Tag="Link"
                to="/shop"
                className="py-[10px] text-[14px] px-[35px] hover:bg-main-color hover:text-white transition-all duration-300 ease-out hover:border-main-color  leading-[27px] rounded-[28px] bg-white border-[#e5e5e5] border-solid border-2 text-[#696969]"
              >
                Read More
                <i className="fa-solid fa-circle-arrow-right ml-[10px]"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <ul className="flex">
          {isFirstPage ? (
            <li className="w-20 h-20 p-[10px] border rounded-full mx-[5px] first:ml-0 ">
              <button
                onClick={() => handleOnSetPage()}
                className="w-[60px] h-[60px] rounded-full leading-[60px] bg-[rgba(7,7,25,0.1)] text-center text-[#5b5858] hover:bg-main-color transition-all  hover:text-white"
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
            </li>
          ) : null}
          {showPages.map((page, index) => (
            <li
              className="w-20 h-20 p-[10px] border rounded-full mx-[5px] first:ml-0 "
              key={index}
            >
              <button
                onClick={()=> setCurrentPage(page)}
                className={`w-[60px] h-[60px] rounded-full leading-[60px]  ${
                  currentPage === page
                    ? "bg-main-color text-white"
                    : "bg-[rgba(7,7,25,0.1)] text-[#5b5858]"
                } text-center  hover:bg-main-color transition-all  hover:text-white`}
              >
                {page + 1}
              </button>
            </li>
          ))}

          {!isLastPage ? (
            <li className="w-20 h-20 p-[10px] border rounded-full mx-[5px] first:ml-0 ">
              <button
                onClick={() => handleOnSetPage('incr')}
                className="w-[60px] h-[60px] rounded-full leading-[60px] bg-[rgba(7,7,25,0.1)] text-center text-[#5b5858] hover:bg-main-color transition-all  hover:text-white"
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Content;
