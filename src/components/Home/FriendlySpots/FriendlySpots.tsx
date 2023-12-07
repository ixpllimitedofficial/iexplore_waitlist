"use client"

import FriendlySpotImage from "@/assets/img/FriendlySpots.png";
import AppButton from "@/components/UI/Button/AppButton";

const FriendlySpots = () => {
  return (
    <section style={{ backgroundImage: `url(${FriendlySpotImage.src})` }} className="relative flex items-center justify-center h-[600px] bg-no-repeat bg-cover bg-center mt-10">

      <div className="absolute left-20">
        <h1 className="text-7xl">
          Top 15 <span className="text-[#E1BD8A] italic font-bold">budget</span>  <br /> friendly <span className="text-[#E1BD8A] italic font-bold">spots</span>  to spend <br /> your evening in
          Lagos island
        </h1>
        <p className="text-3xl w-[70%] my-10">
          Takwa bay, Freedom park, let’s take a look at some cool places to
          chill with friendly budget in Lagos
        </p>

        <AppButton btnText="Read more" handleClick={() => alert("Read more!")} />
      </div>
    </section>
  );
};

export default FriendlySpots;
