import React from "react";
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
};

const AppSearchInput = ({ className, inputClass }: InputSearchType) => {
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
            placeholder="Search"
            className={`pl-10 border-none focus:outline-none ${inputClass}`}
            required={true}
          />
          {/* <input
            type="search"
            value=""
            className="bg-transparent outline-none block w-full pl-10 p-2.5"
            placeholder="Search"
            required={true}
          /> */}
        </div>
      </div>
    </>
  );
};

export default AppSearchInput;
