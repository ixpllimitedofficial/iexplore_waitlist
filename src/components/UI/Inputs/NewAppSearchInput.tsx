import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/UI/input";
import SearchIcon from "@/assets/svg/SearchIconSvg.svg";

type InputSearchType = {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputClass?: string;
  className?: string;
  name?: string;
  onChange?: (value: string) => void;
  debounceDelay?: number;
};

const NewAppSearchInput: React.FC<InputSearchType> = ({
  className,
  inputClass,
  value = "",
  onChange = () => {}, // Default no-op function
  debounceDelay = 1000, // Default debounce delay
}) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  // Update debouncedValue after a delay
  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(debouncedValue);
    }, debounceDelay);
    return () => {
      clearTimeout(handler);
    };
  }, [debouncedValue, debounceDelay, onChange]);

  return (
    <>
      <div
        className={`flex items-center bg-[#424242] rounded-lg text-gold-500 border-2 border-gold-500 focus:outline-none  focus:ring-1 focus:ring-gold-500 ${className}`}
      >
        <div className="relative w-full py-1">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <Image src={SearchIcon} alt="search" />
          </div>
          <Input
            type="search"
            placeholder="Search for"
            value={debouncedValue}
            onChange={(e) => setDebouncedValue(e.target.value)}
            className={`pl-10 border-none focus:outline-none ${inputClass}`}
            required={true}
          />
        </div>
      </div>
    </>
  );
};

export default NewAppSearchInput;
