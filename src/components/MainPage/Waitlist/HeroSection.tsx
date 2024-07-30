import Image from "next/image";
import { anton } from "@/app/fonts";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";

import ExplorersWaiting from "@/assets/img/MainWebsite/ExplorersWaiting.png";
import HeroVid from "@/assets/img/MainWebsite/HeroVid.png";

const HeroSection = () => {
  return (
    <section className="flex gap-24 items-center py-10 px-16">
      {/* left */}
      <div>
        <h1 className={`text-gold-500 text-7xl ${anton.className} w-3/4`}>
          YOUR NIGHTLIFE COMPANION IN YOUR HANDS
        </h1>
        <p className="text-xl my-6 w-[90%]">
          Everything you need to explore the best of your city’s nightlife. Your
          ultimate nightlife companion in one app.
        </p>

        <div className="flex items-center gap-4">
          <Input
            className="bg-[#FFFFFF1A] px-3 py-6 rounded-none text-[#C8C8C8] border-t-0 border-r-0 border-l-0 border-b-gold-500 placeholder:text-base placeholder:text-[#4D4D4D] "
            placeholder="Email Address"
          />
          <Button className="bg-gold-500 hover:bg-gold-600 text-[#322016] px-10 py-6 rounded-3xl font-bold text-base">
            Join Waitlist
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Image src={ExplorersWaiting} alt="ExplorersWaiting" />
          <p className="text-base text-[#D1D1D1] my-4">
            12.7k Explorers already waiting
          </p>
        </div>
      </div>

      {/* right */}
      <Image src={HeroVid} alt="HeroVid" className="h-[450px] w-auto"  />
    </section>
  );
};

export default HeroSection;
