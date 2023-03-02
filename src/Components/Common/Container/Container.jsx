import React from "react";

const Container = ({ children, className }) => {
  return <div className={`md:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1200px]  mx-auto px-5  ${className ||''}`}>{children}</div>;
};

export default Container;
