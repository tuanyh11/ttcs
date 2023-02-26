import React from "react";

const Breadcrumb = ({ image, label }) => {
  return (
    <div>
      <div
        className="py-20 relative after:inset-0 after:absolute z-40 after:bg-[rgba(0,0,0,0.75)] bg-center bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${"https://klbtheme.com/chakta/wp-content/uploads/2021/01/breadcrumbs-bg.jpg"})`,
        }}
      >
        <h3 className="text-center text-white relative z-50 pb-[10px] text-[32px] md:text-4xl lg:text-[40px] xl:text-[60px] font-[600] font-poppins leading-[1.2] ">
          {label}
        </h3>
      </div>
    </div>
  );
};

export default Breadcrumb;
