import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BlogCard, Button } from "../../../Components";
import { useDate } from "../../../hooks";
import ReactPlayer from "react-player";
import {blogData} from "../../../assets/data/blog"

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
    if (type === "incr") {
      setCurrentPage(
        currentPage + 1 > pages.length - 1 ? currentPage : currentPage + 1
      );
    } else {
      setCurrentPage(currentPage - 1 < 0 ? currentPage : currentPage - 1);
    }
  };

  const isLastPage = currentPage === pages.length - 1;
  const isFirstPage = currentPage - 2 >= 0;

  return (
    <div>
      <div className="mb-10">
        <BlogCard settings={settings} />
      </div>

      <div className="mb-10">
        <BlogCard type="video" />
      </div>

      <div className="">
        <ul className="flex">
          {isFirstPage ? (
            <li>
              <PagiButton onSetpage={() => handleOnSetPage()}>
                <i className="fa-solid fa-angle-left"></i>
              </PagiButton>
            </li>
          ) : null}
          {showPages.map((page, index) => (
            <li key={page}>
              {
                <PagiButton
                  key={index}
                  onSetpage={() => setCurrentPage(page)}
                  isCurrentPage={currentPage === page}
                  page={page}
                />
              }
            </li>
          ))}

          {!isLastPage ? (
            <li>
              <PagiButton onSetpage={() => handleOnSetPage("incr")}>
                <i className="fa-solid fa-angle-right"></i>
              </PagiButton>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

function PagiButton({
  onSetpage = () => {},
  isCurrentPage = 0,
  page = 0,
  children,
}) {
  return (
    <div className="w-[50px] h-[50px] md:w-20 md:h-20 p-[10px] border rounded-full mx-[5px] first:ml-0 ">
      <button
        onClick={() => onSetpage()}
        className={`w-[30px] h-[30px] md:w-[60px] md:h-[60px] flex justify-center items-center rounded-full leading-[60px]  ${
          isCurrentPage
            ? "bg-main-color text-white"
            : "bg-[rgba(7,7,25,0.1)] text-[#5b5858]"
        } text-center  hover:bg-main-color transition-all  hover:text-white`}
      >
        {children || page + 1}
      </button>
    </div>
  );
}

export default Content;
