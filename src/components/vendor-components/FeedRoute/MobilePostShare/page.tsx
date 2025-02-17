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
    <div className="bg-[#0E0E0E] p-2 border border-[#4D4D4D66] rounded-lg rounded-t-3xl h-[55%] w-[100%] absolute bottom-0 z-10 md:hidden">
      <div className="my-3 text-center flex flex-col justify-center items-center gap-2">
        <span
          onClick={closeShare}
          className="w-12 h-1 bg-[#B0B0B0] cursor-pointer"
        ></span>
        <h1 className="text-2xl font-bold">Share post</h1>
      </div>

      <div className="bg-[#4D4D4D66] bg-opacity-40 p-3 rounded-2xl">
        <div className="flex justify-between my-5 gap-3">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              postUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50%]"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image
                src={FacebookIcon}
                width={50}
                height={50}
                alt="facebook icon"
              />
              <p>facebook</p>
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
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image
                src={InstagramIcon}
                width={50}
                height={50}
                alt="facebook icon"
              />
              <p>instagram</p>
            </div>
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(postText)}`}
            className="w-[50%]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image
                src={WhatsappIcon}
                width={50}
                height={50}
                alt="facebook icon"
              />
              <p>whatsapp</p>
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
            <div className="flex flex-col gap-2 items-center justify-center">
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
        <div className="bg-[#4D4D4D66] bg-opacity-40 flex rounded-3xl mt-2 p-1">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Share with link"
            className={` mb-3 w-[70%] border-none`}
          />
          <button
            onClick={handleCopy}
            className="w-[30%]  bg-gold-500 text-brandDark rounded-full hover:bg-white focus:ring-2 focus:ring-gold-500 focus:outline-none"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
