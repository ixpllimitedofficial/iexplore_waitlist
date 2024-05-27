import React from "react";
import { Input } from "@/components/UI/input";

const AppInput = ({
  value,
  type,
  label,
  placeholder,
  inputClass,
  className,
  labelClassName,
  register,
  registerName,
  isInputRequired,
  errorMessage,
}: any) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      {label && (
        <label htmlFor={label} className={`${labelClassName} font-medium`}>
          {label}
        </label>
      )}
      <Input
        id={label}
        type={type}
        placeholder={placeholder}
        className={`${inputClass} bg-[#424242] px-3 py-6 rounded-lg text-gold-500 border-[1px] border-gold-500 focus:outline-none  focus:ring-1 focus:ring-gold-500 placeholder:text-foreground placeholder:font-medium`}
        // {...register(registerName, { required: isInputRequired })}
      />
      {errorMessage && <p className="text-gold-500 text-sm italic">{errorMessage}</p>}
    </div>
  );
};

export default AppInput;
