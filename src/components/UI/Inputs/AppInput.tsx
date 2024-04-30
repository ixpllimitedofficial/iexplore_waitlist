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
    <div className={`${className} flex flex-col gap-2`}>
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
        className={`${inputClass} bg-[#424242] px-3 py-6 rounded-lg text-[#E1BD8A] border-[1px] border-[#E1BD8A] focus:outline-none  focus:ring-1 focus:ring-[#E1BD8A] placeholder:text-foreground placeholder:font-medium`}
      />
    </div>
  );
};

export default AppInput;
