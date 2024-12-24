'use client'

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface FeedsProps {
  name?: string;
  timestamp?: string;
  src: StaticImageData | string;
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const Page: React.FC<FeedsProps> = ({ name, timestamp, src, handleClick }) => {
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div className="flex flex-col items-center gap-1">
        <Image src={src} alt="StoryImg" className="" />
        <p className="text-lg">{name}</p>
        <p className="text-[9px] text-[#B0B0B0]">{timestamp}</p>
      </div>
    </div>
  );
};

export default Page;
