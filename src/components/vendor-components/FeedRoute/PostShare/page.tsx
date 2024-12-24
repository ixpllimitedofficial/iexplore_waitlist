"use client";
import React, { useState } from "react";
import Image from "next/image";
import StoryImg from "@/assets/img/UserWebappImages/StoryImg.png";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@/assets/svg/icons8-facebook.svg";
import WhatsappIcon from "@/assets/svg/icons8-whatsapp.svg";
import InstagramIcon from "@/assets/svg/icons8-instagram-logo.svg";
import TwitterIcon from "@/assets/svg/icons8-twitterx.svg";
import Link from "next/link";
import { Input } from "@/components/UI/input";

interface commentProps {
  closeShare?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  isSharePanelVisible?: boolean;
}

const Page: React.FC<commentProps> = ({ closeShare, isSharePanelVisible }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const postUrl = "http:localhost:3000/vendor-Home/feed/1";
  const postText = "This is the text";
  const twitterHandle = "hiit";

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
    <div
      className={`bg-[#0E0E0E] p-2 md:px-4 border border-[#4D4D4D66] rounded-lg w-[100%] md:w-[70%] absolute md:bottom-14 right-0 z-30 md:-right-[45%] transition-transform duration-500`}
    >
      <div className="my-5 text-center flex justify-center items-center gap-10">
        <h1 className="text-2xl font-bold">Share post</h1>
        <span
          onClick={closeShare}
          className="border-2 border-white p-1 rounded-full cursor-pointer"
        >
          <CloseIcon />
        </span>
      </div>
      <div className="w-[100%] border border-[#4D4D4D66]"></div>
      <div className="bg-[#4D4D4D66] bg-opacity-40 flex rounded-3xl mt-3 px-3 py-2">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Share with link"
          className={` mb-3 py-2 md:mb-0 md:w-[90%] border-none`}
        />
        <button
          onClick={handleCopy}
          className="w-[10%] md:min-w-fit md:px-5 py-2 bg-gold-500 text-brandDark rounded-full hover:bg-white focus:ring-2 focus:ring-gold-500 focus:outline-none"
        >
          Copy
        </button>
      </div>
      <div className="flex justify-between my-5 gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            postUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50%]"
        >
          <div className="flex-1 bg-[#4D4D4D66] bg-opacity-40 p-3 rounded-2xl cursor-pointer flex gap-2 items-center">
            <Image
              src={FacebookIcon}
              width={50}
              height={50}
              alt="facebook icon"
            />
            <p>Facebook</p>
          </div>
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            postUrl
          )}&quote=${encodeURIComponent(postText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50%]"
        >
          <div className="flex-1 bg-[#4D4D4D66] bg-opacity-40 p-3 rounded-2xl cursor-pointer flex gap-2 items-center">
            <Image
              src={InstagramIcon}
              width={50}
              height={50}
              alt="facebook icon"
            />
            <p>Instagram</p>
          </div>
        </a>
      </div>
      <div className="flex justify-between my-5 gap-3">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(postText)}`}
          className="w-[50%]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex-1 bg-[#4D4D4D66] bg-opacity-40 p-3 rounded-2xl cursor-pointer flex gap-2 items-center">
            <Image
              src={WhatsappIcon}
              width={50}
              height={50}
              alt="facebook icon"
            />
            <p>Whatsapp</p>
          </div>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            postUrl
          )}&text=${encodeURIComponent(postText)}&via=${encodeURIComponent(
            twitterHandle
          )}`}
          className="w-[50%]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex-1 bg-[#4D4D4D66] bg-opacity-40 p-3 rounded-2xl cursor-pointer flex gap-2 items-center justify-center">
            <Image
              src={TwitterIcon}
              width={50}
              height={50}
              alt="facebook icon"
            />
            <p>X</p>
          </div>
        </a>
      </div>
      <button
        onClick={handleShare}
        className="w-[100%] md:min-w-fit md:px-8 py-2 bg-[#4D4D4D] text-white rounded-full hover:bg-gold-500 focus:ring-2 focus:ring-gold-500 focus:outline-none"
      >
        Share
      </button>
    </div>
  );
};

export default Page;
