import React from "react";

type InputType = {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputClass?: string;
  className?: string;
  name? : string
};

const AppInput = ({
  type,
  label,
  placeholder,
  value,
  handleChange,
  inputClass,
  className,
  name
}: InputType) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      {label && (
        <label htmlFor={label} className="text-[#FAE0BA] text-lg font-medium">
          {label}
        </label>
      )}
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
        className={`${inputClass} bg-[#424242] px-3 py-4 rounded-xl text-[#E1BD8A] border-2 border-[#E1BD8A] focus:outline-none  focus:ring-1 focus:ring-[#E1BD8A] placeholder:text-lg`}
      />
    </div>
  );
};

export default AppInput;
