"use client";

import FriendlySpotImage from "@/assets/img/FriendlySpots.png";
import AppButton from "@/components/UI/Button/AppButton";

const FriendlySpots = () => {
  return (
    <section
      style={{ backgroundImage: `url(${FriendlySpotImage.src})` }}
      className="relative flex items-center justify-center h-[350px] md:h-[450px] lg:h-[600px] bg-no-repeat bg-cover bg-center mt-10"
    >
      <div className="absolute left-5 md:10 lg:left-20 lg:w-[75%] flex flex-col gap-3">
        <h1 className="text-2xl md:text-5xl font-semibold lg:w-[70%]">
          Top 15 <span className="text-gold-500 italic font-bold">budget</span>{" "}
          friendly <span className="text-gold-500 italic font-bold">spots</span>{" "}
          to spend your evening in Lagos island
        </h1>
        <p className="md:text-lg lg:text-xl w-[90%] lg:w-[70%]">
          Takwa bay, Freedom park, let’s take a look at some cool places to
          chill with friendly budget in Lagos
        </p>

        <AppButton
          btnText="Read more"
          className="relative text-sm md:text-base self-start"
          handleClick={() => alert("Read more!")}
        />
      </div>
    </section>
  );
};

export default FriendlySpots;
