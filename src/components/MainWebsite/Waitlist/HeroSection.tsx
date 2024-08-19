import Image from "next/image";
import { anton } from "@/app/fonts";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";

import ExplorersWaitingSvg from "@/assets/svg/MainWebsite/ExplorersWaitingSvg.svg";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 lg:gap-24 items-center py-10 px-5 lg:px-16">
      {/* left */}
      <div>
        {/* <h1
          className={`text-gold-500 text-5xl md:text-7xl ${anton.className} text-center md:text-left md:w-3/5`}
        >
          YOUR <span className="text-white">NIGHTLIFE COMPANION</span> IN YOUR HANDS
        </h1> */}
        <h1
          className={`text-gold-500 text-5xl md:text-6xl lg:text-7xl ${anton.className} text-center md:text-left`}
        >
          YOUR NIGHTLIFE COMPANION IN YOUR HANDS
        </h1>
        <p className="text-lg text-center md:text-left my-5 lg:w-[80%]">
          Everything you need to explore the best of your city’s nightlife. Your
          ultimate nightlife companion in one app.
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <Input
            className="bg-[#FFFFFF1A] px-3 py-6 rounded-none text-[#C8C8C8] border-t-0 border-r-0 border-l-0 border-b-gold-500 placeholder:text-base placeholder:text-[#4D4D4D] "
            placeholder="Email Address"
          />

          <Button className="bg-gold-500 transition duration-200 hover:bg-white text-[#322016] px-10 py-6 rounded-3xl font-bold text-base">
            Join Waitlist
          </Button>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-2">
          <Image
            src={ExplorersWaitingSvg}
            alt="ExplorersWaiting"
            className="h-[30px] md:h-[35px] w-auto"
          />
          <p className="text-sm md:text-base text-[#D1D1D1] my-4">
            12.7k Explorers already waiting
          </p>
        </div>
      </div>

      {/* right */}
      <div className="relative h-[400px] md:h-[470px] w-auto">
        <video
          autoPlay
          muted
          loop
          preload="none"
          className="h-full w-full object-cover"
        >
          <source src="/heroVid.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
