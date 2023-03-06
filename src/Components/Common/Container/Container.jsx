import React from "react";

const Container = ({ children, className }) => {
  return <div className={` screens-576:max-w-[540px] screens-768:max-w-[720px]  screens-992:max-w-[960px] screens-1200:max-w-[1200px]   mx-auto px-[15px]  ${className ||''}`}>{children}</div>;
};

export default Container;
