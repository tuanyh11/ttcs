import React from "react";

const Row = ({ children, className }) => {
  return <div className={`mx-[-20px] flex flex-wrap ${className || ''}`}>{children}</div>;
};

export default Row;
