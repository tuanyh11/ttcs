import React, { useContext } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
type Props = {
  label: string;
  input: {
    name: string;
    validation?: RegisterOptions;
    placeholder?: string;
    children?: React.ReactNode;
    type?: string;
    [key: string]: any;
  };
};

const InputV1 = ({
  label = 'label name',
  input: { children, name, validation, placeholder, type = 'text', ...others },
}: Props) => {
  const { register } = useFormContext();
  return (
    <div>
      <label className="mb-2.5 block capitalize text-black dark:text-white">
        {label}
      </label>
      {children || (
        <input
          {...register(name, validation)}
          {...others}
          type={type}
          placeholder={placeholder}
          className="w-full rounded  border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      )}
    </div>
  );
};

export default InputV1;
