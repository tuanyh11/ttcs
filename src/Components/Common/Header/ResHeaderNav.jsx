import React, { useState } from 'react'
import { Link } from 'react-router-dom';

 function ResHeaderNav({ onSetOpen, data, isOpen }) {
    const [selectedPage, setSelectedPage] = useState([]);
  
    const handleOnSelect = (e, id) => {
      e.preventDefault();
  
      if (selectedPage.includes(id)) {
        setSelectedPage(selectedPage.filter((item) => item !== id));
        return;
      }
      setSelectedPage([...selectedPage, id]);
    };
  
    return (
      <div
        className={`xl:hidden fixed w-[300px] z-[9999999] bg-white duration-500 shadow-[0_5px_20px_rgb(0_0_0_/_10%)]  top-0 bottom-0 pt-[70px] left-0 transition ${
          isOpen ? "" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute right-0 top-0 bg-main-color  p-[5px]"
          onClick={() => onSetOpen()}
        >
          <div className="w-[26px] h-[26px]  relative">
            <span className="w-full rotate-45 h-[2px] rounded-[6px] top-3 bg-white block absolute left-0"></span>
            <span className="w-full -rotate-45 h-[2px] rounded-[6px] bg-white block absolute bottom-3 left-0"></span>
          </div>
        </button>
  
        <div className="">
          <div className="">
            {data.map((nav) => {
              const slug = nav?.label?.replace(" ", "-")?.toLowerCase();
              const children = nav?.childItems?.edges;
              const isHasChildren = children?.length > 0;
              return (
                <div key={nav?.databaseId} className="border-b last:border-none ">
                  <Link
                    className="text-[16px] block  relative justify-between font-poppins py-[13px] px-[26px]  font-semibold text-dark-color uppercase leading-[27px]"
                    // onClick={() => setSelectedPage(nav?.databaseId)}
                    to={`/${slug}`}
                  >
                    {nav?.label}
                    {isHasChildren && (
                      <button
                        onClick={(e) => handleOnSelect(e, nav?.databaseId)}
                        className="fa-solid fa-chevron-down  text-xs  font-bold absolute top-1/2 right-4 -translate-y-1/2  "
                      ></button>
                    )}
                  </Link>
  
                  {isHasChildren && (
                    <div
                      className={`${
                        selectedPage.includes(nav?.databaseId)
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      {children?.map((child) => {
                        const slug = child?.node?.label
                          ?.replace(" ", "-")
                          ?.toLowerCase();
  
                        return (
                          <div
                            key={child?.node?.id}
                            className="border-b first:border-t  "
                          >
                            <Link
                              className="text-[16px] block  relative justify-between font-poppins py-[13px] pl-[48px] pr-[26px]  font-semibold text-dark-color uppercase leading-[27px]"
                              to={`/${slug}`}
                            >
                              {child?.node?.label}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
export default ResHeaderNav