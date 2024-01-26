"use client";

import FriendlySpotImage from "@/assets/img/FriendlySpots.png";
import AppButton from "@/components/UI/Button/AppButton";

const FriendlySpots = () => {
  return (
    <section
      style={{ backgroundImage: `url(${FriendlySpotImage.src})` }}
      className="relative flex items-center justify-center h-[350px] md:h-[450px] lg:h-[600px] bg-no-repeat bg-cover bg-center mt-10"
    >
      <div className="absolute left-5 md:10 lg:left-20">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium lg:w-[70%]">
          Top 15 <span className="text-[#E1BD8A] italic font-bold">budget</span>{" "}
           friendly{" "}
          <span className="text-[#E1BD8A] italic font-bold">spots</span> to
          spend your evening in Lagos island
        </h1>
        <p className="md:text-lg lg:text-2xl w-[90%] lg:w-[70%] my-3 lg:my-10">
          Takwa bay, Freedom park, let’s take a look at some cool places to
          chill with friendly budget in Lagos
        </p>

        <AppButton
          btnText="Read more"
          className="relative mt-3 lg:mt-5 text-sm md:text-xl"
          handleClick={() => alert("Read more!")}
        />
      </div>
    </section>
  );
};

export default FriendlySpots;
