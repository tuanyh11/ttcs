import React from "react";

interface Props {
    register: () => any,
    placeholder?: string,
    type?: string
}

const InputV1 = ({register, placeholder = '',   type ='text'}: Props) => {
  return (
    <div>
      <input
        id="product-name"
        type={type}
        {...register()}
        placeholder={placeholder}
        className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 flex-1"
      />
    </div>
  );
};

export default InputV1;
