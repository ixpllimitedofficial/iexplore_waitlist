"use client";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import ClubImage from "@/assets/img/MainWebsite/NightclubPhoto.jpg";
import { Button } from "@/components/UI/button";

const SpotPhoneCard = () => {
  const router = useRouter();

  const handleClick = () => {
    // router.push("/user/spot-details");
    alert("Open button clicked!")
  };

  return (
    <div
      onClick={() => handleClick()}
      className="bg-[#3A3A3A] rounded-xl w-[63vw] max-w-[300px] h-auto mx-auto"
    >
      <Image src={ClubImage} alt="club image" className="rounded-xl" />

      <div className="flex items-center justify-between py-3 px-5">
        <p className="text-base md:text-lg">Club Quilox</p>

        <Button className="bg-gold-500 hover:bg-gold-600 text-[#322016] p-4 rounded-3xl font-bold text-sm md:text-base">
          Open
        </Button>
      </div>
    </div>
  );
};

export default SpotPhoneCard;
