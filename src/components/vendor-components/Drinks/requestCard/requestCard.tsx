"use client";
import React, { useState } from "react";
import Image from "next/image";
import DrinkImage from "@/assets/img/UserWebappImages/DrinkImage.png";
import { Button } from "@/components/UI/button";

type EventProps = {
  handleAccept?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  handleDecline?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

const RequestCard: React.FC<EventProps> = ({
  handleAccept,
  handleDecline,
}) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const acceptDrink = () => {
    setIsAccepted(true);
    setIsDeclined(false); // Reset decline state if previously declined
    if (handleAccept) handleAccept(); // Call parent accept handler if provided
  };

  const declineDrink = () => {
    setIsDeclined(true);
    setIsAccepted(false); // Reset accept state
    if (handleDecline) handleDecline(); // Call parent decline handler if provided
  };

  return (
    <div
      className={`relative border border-white px-8 py-3 rounded-3xl flex flex-col justify-center ${
        isAccepted || isDeclined
          ? "bg-[#464646] border-[#4D4D4D]"
          : "bg-[#4D4D4D]"
      }`}
    >
      <div className="flex items-center md:items-start gap-2 w-full overflow-hidden rounded-3xl">
        <div className="w-[20%]">
          <Image
            src={DrinkImage}
            alt="drink image"
            className={`w-[70px] h-[60px] md:w-[100px] md:h-[100px] object-cover rounded-full ${
              isAccepted || isDeclined ? "grayscale" : ""
            }`}
          />
        </div>
        <div className="w-[80%]">
          <p
            className={`text-sm md:text-2xl ${
              isAccepted || isDeclined ? "text-[#B0B0B0]" : ""
            }`}
          >
            Max Smith made a request to claim Johnie Walker Black Label Air Ink
            Limited Edition
          </p>
          <p
            className={`bg-[#4D4D4D] border w-fit py-2 px-2 md:px-5 text-sm md:text-lg rounded-full mt-3 ${
              isAccepted || isDeclined ? "text-[#B0B0B0]" : ""
            }`}
          >
            Coupon code: JWBLA25
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-3">
        {!isDeclined && (
          <Button
            className={`${
              isAccepted
                ? "bg-[#4D4D4D] text-[#B0B0B0] w-full transition-all"
                : "bg-gold-500 w-[50%] hover:bg-white transition duration-200 text-[#322016]"
            } px-10 py-6 rounded-3xl font-bold text-sm md:text-lg mt-3`}
            onClick={acceptDrink}
            aria-label="Accept Drink"
            disabled={isAccepted} // Dynamically disable the button
          >
            {isAccepted ? "Accepted" : "Accept"}
          </Button>
        )}
        {!isAccepted && (
          <Button
            className={`${
              isDeclined
                ? "bg-[#0E0E0E] text-[#FFCC00] border border-[#FFCC00] w-full transition-all disabled:cursor-not-allowed"
                : "bg-[#0E0E0E] border-2 border-gold-500 w-[50%] hover:bg-gold-500 hover:text-brandDark transition duration-200 text-gold-500"
            } px-10 py-6 rounded-3xl font-bold text-sm md:text-lg mt-3`}
            onClick={declineDrink}
            aria-label="Decline Drink"
            disabled={isDeclined} // Dynamically disable the button
          >
            {isDeclined ? "Declined" : "Decline"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default RequestCard;