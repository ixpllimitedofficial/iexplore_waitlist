import React from "react";
import FriendlySpotImage from "@/assets/img/FriendlySpots.png";
import Image from "next/image";
import AppButton from "@/components/UI/Button/AppButton";

const FriendlySpots = () => {
  return (
    <section className="relative">
      <Image
        src={FriendlySpotImage}
        alt="FriendlySpots"
        className="mt-10 mb-10 w-full opacity-70"
      />

      <div className="absolute left-20 top-20">
        <h1 className="text-7xl">
          Top 15 <span className="text-[#E1BD8A] italic font-bold">budget</span>  <br /> friendly <span className="text-[#E1BD8A] italic font-bold">spots</span>  to spend <br /> your evening in
          Lagos island
        </h1>
        <p className="text-3xl w-[70%] my-10">
          Takwa bay, Freedom park, let’s take a look at some cool places to
          chill with friendly budget in Lagos
        </p>

        <AppButton text="Read more" />
      </div>
    </section>
  );
};

export default FriendlySpots;
