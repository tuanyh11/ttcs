import React from "react";

const PreButton = ({className, onClick, classCustom}) => {
  console.log(className);
  return (
    <div>
      {" "}
      <div
        className={`${classCustom || ''} ${className} top-1/3  z-50 -left-0 before:hidden hidden lg:block`}
        onClick={onClick}
      >
        <button className="fa-solid fa-angle-left w-10 h-10 bg-main-color text-sm text-white rounded-full"></button>
      </div>
    </div>
  );
};

export default PreButton;
