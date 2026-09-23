"use client";

import React from "react";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@/assets/svg/icons8-facebook.svg";
import WhatsappIcon from "@/assets/svg/icons8-whatsapp.svg";
import InstagramIcon from "@/assets/svg/icons8-instagram-logo.svg";
import TwitterIcon from "@/assets/svg/icons8-twitterx.svg";
import { Input } from "@/components/UI/input";
import { shareMessage, webUrl } from "@/lib/links";

interface ShareProps {
  closeShare?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  isSharePanelVisible?: boolean;
  postId?: string;
  caption?: string;
}

const Page: React.FC<ShareProps> = ({
  closeShare,
  postId = "1",
  caption = "",
}) => {
  const postUrl = webUrl({ type: "post", id: String(postId) });
  const postText = shareMessage(
    "Check out this moment on iExplore",
    postUrl,
    caption,
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      alert("Link copied.");
    } catch {
      alert("Could not copy the link.");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "iExplore",
          text: postText,
          url: postUrl,
        });
      } catch {
        // user cancelled
      }
      return;
    }
    await handleCopy();
  };

  return (
    <div className="bg-[#0E0E0E] p-2 md:px-4 border border-[#4D4D4D66] rounded-lg w-full md:w-[90%] absolute md:bottom-14 right-0 z-30 md:-right-full transition-transform duration-500 hidden md:block">
      <div className="my-5 text-center flex justify-center items-center gap-10">
        <h1 className="text-2xl font-bold">Share post</h1>
        <span
          onClick={closeShare}
          className="border-2 border-white p-1 rounded-full cursor-pointer"
        >
          <CloseIcon />
        </span>
      </div>

      <div className="w-full border border-[#4D4D4D66]" />

      <div className="bg-[#4D4D4D66] bg-opacity-40 flex rounded-3xl mt-3 px-3 py-2">
        <Input
          type="text"
          value={postUrl}
          readOnly
          className="mb-3 py-2 md:mb-0 md:w-[90%] border-none"
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
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50%]"
        >
          <div className="flex-1 bg-[#4D4D4D66] bg-opacity-40 p-3 rounded-2xl cursor-pointer flex gap-2 items-center">
            <Image src={FacebookIcon} width={50} height={50} alt="facebook" />
            <p>Facebook</p>
          </div>
        </a>
        <button onClick={handleShare} className="w-[50%] text-left">
          <div className="flex-1 bg-[#4D4D4D66] bg-opacity-40 p-3 rounded-2xl cursor-pointer flex gap-2 items-center">
            <Image src={InstagramIcon} width={50} height={50} alt="instagram" />
            <p>Instagram</p>
          </div>
        </button>
      </div>

      <div className="flex justify-between my-5 gap-3">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(postText)}`}
          className="w-[50%]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex-1 bg-[#4D4D4D66] bg-opacity-40 p-3 rounded-2xl cursor-pointer flex gap-2 items-center">
            <Image src={WhatsappIcon} width={50} height={50} alt="whatsapp" />
            <p>Whatsapp</p>
          </div>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent("Check out this moment on iExplore")}`}
          className="w-[50%]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex-1 bg-[#4D4D4D66] bg-opacity-40 p-3 rounded-2xl cursor-pointer flex gap-2 items-center justify-center">
            <Image src={TwitterIcon} width={50} height={50} alt="x" />
            <p>X</p>
          </div>
        </a>
      </div>

      <button
        onClick={handleShare}
        className="w-full md:min-w-fit md:px-8 py-2 bg-[#4D4D4D] text-white rounded-full hover:bg-gold-500 focus:ring-2 focus:ring-gold-500 focus:outline-none"
      >
        Share
      </button>
    </div>
  );
};

export default Page;
