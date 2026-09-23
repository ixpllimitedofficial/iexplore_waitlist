"use client";

import React from "react";
import Image from "next/image";
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
        // cancelled
      }
      return;
    }
    await handleCopy();
  };

  return (
    <div className="bg-[#0E0E0E] p-2 border border-[#4D4D4D66] rounded-lg rounded-t-3xl h-[55%] w-full absolute bottom-0 z-10 md:hidden">
      <div className="my-3 text-center flex flex-col justify-center items-center gap-2">
        <span
          onClick={closeShare}
          className="w-12 h-1 bg-[#B0B0B0] cursor-pointer"
        />
        <h1 className="text-2xl font-bold">Share post</h1>
      </div>

      <div className="bg-[#4D4D4D66] bg-opacity-40 p-3 rounded-2xl">
        <div className="flex justify-between my-5 gap-3">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50%]"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image src={FacebookIcon} width={50} height={50} alt="facebook" />
              <p>facebook</p>
            </div>
          </a>
          <button onClick={handleShare} className="w-[50%]">
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image src={InstagramIcon} width={50} height={50} alt="instagram" />
              <p>instagram</p>
            </div>
          </button>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(postText)}`}
            className="w-[50%]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image src={WhatsappIcon} width={50} height={50} alt="whatsapp" />
              <p>whatsapp</p>
            </div>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent("Check out this moment on iExplore")}`}
            className="w-[50%]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image src={TwitterIcon} width={50} height={50} alt="x" />
              <p>X</p>
            </div>
          </a>
        </div>

        <div className="bg-[#4D4D4D66] bg-opacity-40 flex rounded-3xl mt-2 p-1">
          <Input
            type="text"
            value={postUrl}
            readOnly
            className="mb-3 w-[70%] border-none"
          />
          <button
            onClick={handleCopy}
            className="w-[30%] bg-gold-500 text-brandDark rounded-full hover:bg-white focus:ring-2 focus:ring-gold-500 focus:outline-none"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
