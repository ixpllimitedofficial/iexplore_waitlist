"use client";

import React, { useState } from "react";
import { Input } from "@/components/UI/input";

// Sample icons for show/hide, replace with actual icon components if available
const ShowIcon = () => <span>Show</span>;
const HideIcon = () => <span>Hide</span>;

const PasswordField = ({ field, placeholder, inputStyling }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        className={`${inputStyling}`}
        placeholder={placeholder}
        {...field}
        type={showPassword ? "text" : "password"}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
        onClick={toggleShowPassword}
      >
        {showPassword ? <HideIcon /> : <ShowIcon />}
      </button>
    </div>
  );
};


export default PasswordField