import React from "react";

const Row = ({ children, className }) => {
  return <div className={`mx-[-15px] flex flex-wrap ${className || ''}`}>{children}</div>;
};

export default Row;
