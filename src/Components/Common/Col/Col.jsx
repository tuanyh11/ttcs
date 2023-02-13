import React from "react";

const Col = ({ className, children }) => {
  return <div className={`px-[15px] ${className || ''}`}>{children}</div>;
};

export default Col;
