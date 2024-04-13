import React from "react";
import { Input } from "@/components/UI/input";

type InputType = {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputClass?: string;
  className?: string;
  name?: string;
  labelClassName?: string;
};

const AppInput = ({
  type,
  label,
  placeholder,
  value,
  handleChange,
  inputClass,
  className,
  name,
  labelClassName,
}: InputType) => {
  return (
    <div className={`${className} flex flex-col gap-1`}>
      {label && (
        <label
          htmlFor={label}
          className={`${labelClassName} font-medium`}
          // className={`${labelClassName} text-[#FAE0BA] text-lg font-medium`}
        >
          {label}
        </label>
      )}
      <Input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
        className={`${inputClass} bg-[#424242] px-3 py-4 rounded-lg text-[#E1BD8A] border-[1px] border-[#E1BD8A] focus:outline-none  focus:ring-1 focus:ring-[#E1BD8A] placeholder:text-[#e1bd8ab4] placeholder:font-medium`}
      />
      {/* <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
        className={`${inputClass} bg-[#424242] px-3 py-4 rounded-xl text-[#E1BD8A] border-2 border-[#E1BD8A] focus:outline-none  focus:ring-1 focus:ring-[#E1BD8A] placeholder:text-lg`}
      /> */}
    </div>
  );
};

export default AppInput;
