import React from "react";

const InputV1 = ({label, register = {}, error,  ...rest}) => {
  return (
    <div className="flex flex-wrap mb-[15px]">
      <label className="block w-full mb-[8px] capitalize">
        {label} <span className="text-[#e4573d]">*</span>{" "}
      </label>
      {error && <span className="text-main-color  ">{error}</span>}
      <input
        {...register}
        {...rest}
        className="w-full outline-none h-[50px] px-[20px] py-0 border-[1px] border-[#eaeaea]"
      />
    </div>
  );
};

export default InputV1;
