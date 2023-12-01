import React from "react";

type InputType = {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  inputClass?: string;
  className?: string
};

const AppInput = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  inputClass,
  className
}: InputType) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <label htmlFor={label} className="text-[#FAE0BA] ">
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${inputClass} bg-[#424242] px-3 py-4 rounded-md text-[#E1BD8A] border-2 border-[#E1BD8A] focus:outline-none  focus:ring-1 focus:ring-[#E1BD8A] `}
      />
    </div>
  );
};

export default AppInput;
