"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import ClubImage from "@/assets/img/ClubImage.png";
import RatingsIcon from "@/assets/svg/UserIconsSvg/RatingsIcon.svg";
import { Button } from "@/components/UI/button";

const convertTo12HourFormat = (time) => {
  if (!time) {
    return "";
  }
  const [hour, minute, second] = time.split(":");
  const hourNumber = parseInt(hour, 10);
  const ampm = hourNumber >= 12 ? "PM" : "AM";
  const adjustedHour = hourNumber % 12 || 12; // Convert 0 to 12 for midnight
  return `${adjustedHour}:${minute} ${ampm}`;
};
const ClubCard = ({ spot }) => {
  const router = useRouter();
  const spotValidated = false;

  const handleClick = () => {
    router.push(`/vendor-Home/business/${spot?.slug}`);
  };

  const handleValidate = () => {
    router.push("/vendor-Home/business/validate/1");
  };
  return (
    <div className="bg-[#4D4D4D66] px-2 py-3 rounded-3xl flex flex-col relative">
      {!spotValidated && (
        <p
          onClick={() => handleValidate()}
          className="bg-red-500 absolute right-0 py-1 px-3 rounded-full cursor-pointer"
        >
          Verify Spot
        </p>
      )}
      <div className="flex md:block">
        {/* left */}
        <div className="">
          <div className="w-[100px] h-[120px] md:w-full md:h-[200px] overflow-hidden rounded-3xl">
            <Image
              src={spot?.primary_image || ClubImage}
              alt="club image"
              className="w-full h-full object-cover"
              width={100}
              height={50}
            />
          </div>
        </div>
        {/* right */}
        <div className="">
          <div className="flex items-center justify-between mt-4 mb-1 px-2">
            <h1 className=" text-lg md:text-xl font-bold">{spot?.name}</h1>

            <div className="flex items-center gap-1">
              <Image src={RatingsIcon} alt="RatingsIcon" height={20} />
              <p className="font-bold text-gold-500 text-lg">4.5</p>
            </div>
          </div>

          <p className="pl-2 text-sm md:text-lg text-[#D1D1D1]">
            {spot?.location}
          </p>

          <div className="flex items-center px-2 text-gold-500 text-sm md:text-lg gap-3">
            <p>{spot?.category}</p>
            <p>
              {convertTo12HourFormat(spot?.opening_time)} -{" "}
              {convertTo12HourFormat(spot?.closing_time)}
            </p>
          </div>
        </div>
      </div>

      <Button
        className="bg-gold-500 hover:bg-white transition duration-200 text-[#322016] px-10 py-5 rounded-3xl font-bold text-lg mt-3"
        onClick={handleClick}
      >
        Spot details
      </Button>
    </div>
  );
};

export default ClubCard;
