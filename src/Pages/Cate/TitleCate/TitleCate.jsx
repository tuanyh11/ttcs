import React from "react";

const TitleCate = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h2 className="mb-[15px] leading-[32px] text-[27px] text-dark-color font-poppins font-semibold text-center capitalize">
        Danh mục phổ biến
      </h2>
      <p className="text-center">
        Danh mục phổ biến là một danh sách các sản phẩm hoặc dịch vụ được yêu
        thích và mua nhiều nhất trong một thời gian nhất định.
      </p>
    </div>
  );
};

export default TitleCate;
