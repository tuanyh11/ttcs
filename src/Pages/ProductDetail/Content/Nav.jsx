import React from 'react'

const Nav = ({commentCount, onSetPage, page}) => {


  return (
    <div>
          <div className="mb-[30px] ">
              <ul className="md:flex border-b-[2px] border-[#ddd] mb-[30px]">
                <li
                  onClick={() => onSetPage("description")}
                  className={`capitalize pb-5 cursor-pointer relative after:absolute after:w-full after:h-[2px]   after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0 ${
                    page === "description"
                      ? "md:after:bg-main-color md:after:opacity-100 text-main-color"
                      : " after:opacity-0"
                  }`}
                >
                  Description
                </li>
                <li
                  onClick={() => onSetPage("additional")}
                  className={`capitalize pb-5 cursor-pointer relative after:absolute after:w-full after:h-[2px]  after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0 ${
                    page === "additional"
                      ? "md:after:bg-main-color md:after:opacity-100 text-main-color"
                      : " after:opacity-0"
                  }`}
                >
                  Additional information
                </li>
                <li
                  onClick={() => onSetPage("reviews")}
                  className={`capitalize pb-5 cursor-pointer relative after:absolute after:w-full after:h-[2px]  after:bottom-[-1px] mr-[50px] text-[20px] font-medium after:left-0 after:right-0 ${
                    page === "reviews"
                      ? "md:after:bg-main-color md:after:opacity-100 text-main-color"
                      : " after:opacity-0"
                  }`}
                >
                  Reviews ({commentCount})
                </li>
              </ul>

 
            </div>

    </div>
  )
}

export default Nav