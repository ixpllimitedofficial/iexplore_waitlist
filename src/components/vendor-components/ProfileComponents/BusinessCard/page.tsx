import React from "react";
import SpotImage from "@/assets/img/AdminPageImages/MySpotCardImage.png";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

interface BusinessProps {
  handleClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
const Page: React.FC<BusinessProps> = ({ handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="bg-[#4D4D4D4D] border-2 border-[#4D4D4D4D] border-opacity-30 p-3 rounded-lg flex items-center gap-2 cursor-pointer"
    >
      <div>
        <Image src={SpotImage} alt="spot image" />
      </div>
      <div className="text-left">
        <p className="text-2xl font-bold mb-1">Club Maxx</p>
        <p className="bg-gold-500 flex gap-1 w-fit p-1 rounded-2xl text-brandDark">
          Business Rating <StarIcon />
          4.5
        </p>
        <p className="text-[#B0B0B0] mt-3">
          Address: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Rem?
        </p>
      </div>
    </div>
  );
};

export default Page;
