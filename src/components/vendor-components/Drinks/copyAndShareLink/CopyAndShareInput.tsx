"use client";
import React, { useState } from "react";
import { Input } from "@/components/UI/input";
import { inputStyling } from "@/utils/constant";

const CopyAndShareInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  // Function to copy the input value to the clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputValue);
      alert("Copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("Failed to copy the text.");
    }
  };

  // Function to share the input value using the Web Share API
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Shared Content",
          text: inputValue,
        });
        alert("Shared successfully!");
      } catch (error) {
        console.error("Failed to share:", error);
        alert("Failed to share the text.");
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <>
      <p className="mt-5 text-2xl font-light">Coupon Code</p>
      <div className="md:flex items-center justify-center gap-4 mt-3">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text to copy or share"
          className={`${inputStyling} mb-3 md:mb-0 md:w-[70%]`}
        />
        <div className="flex gap-4">
          <button
            onClick={handleCopy}
            className="w-[50%] md:min-w-fit px-8 py-2 bg-gold-500 text-brandDark rounded-full hover:bg-white focus:ring-2 focus:ring-gold-500 focus:outline-none"
          >
            Copy code
          </button>
          <button
            onClick={handleShare}
            className="w-[50%] md:min-w-fit px-8 py-2 bg-[#4D4D4D] text-white rounded-full hover:bg-gold-500 focus:ring-2 focus:ring-gold-500 focus:outline-none"
          >
            Share code
          </button>
        </div>
      </div>
    </>
  );
};

export default CopyAndShareInput;
