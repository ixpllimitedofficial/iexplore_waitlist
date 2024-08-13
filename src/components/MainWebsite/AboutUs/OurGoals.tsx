import Image from "next/image";
import { anton } from "@/app/fonts";
import OurVision from "@/assets/img/MainWebsite/AboutUs/OurVision.png";
import OurMission from "@/assets/img/MainWebsite/AboutUs/OurMission.png";
import OurPurpose from "@/assets/img/MainWebsite/AboutUs/OurPurpose.png";

const OurGoals = () => {
  return (
    <section className="mt-16 flex flex-col gap-10">
      {/* vision */}
      <div className="grid grid-cols-2">
        <div className="p-10 bg-[#F2F1E8] text-[#0E0E0E] flex flex-col justify-center gap-3">
          <h1 className={`text-5xl ${anton.className} `}>
            OUR VISION
          </h1>
          <p className="text-lg">
            To be the ultimate nightlife companion and go-to nightlife guide,
            sparking unforgettable adventures where explorers discover, connect,
            and experience the vibrant pulse of the night.
          </p>
        </div>

        <div className="h-[300px]">
          <Image
            src={OurVision}
            alt="OurVision"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* mission */}
      <div className="grid grid-cols-2 ">
        <div className="h-[300px]">
          <Image
            src={OurMission}
            alt="OurMission"
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="p-10 bg-gold-500 text-[#0E0E0E] flex flex-col items-end justify-center gap-3">
          <h1 className={`text-5xl ${anton.className} `}>
            OUR MISSION
          </h1>
          <p className="text-lg w-3/4 text-right">
            To build and sustain a vibrant nightlife ecosystem where explorers
            and vendors are empowered  to seamlessly connect to the pulse of the
            city’s nightlife
          </p>
        </div>

      </div>

      {/* purpose */}
      <div className="grid grid-cols-2">
        <div className="p-10 bg-[#F2F1E8] text-[#0E0E0E] flex flex-col justify-center gap-3">
          <h1 className={`text-5xl ${anton.className} `}>
            OUR PURPOSE
          </h1>
          <p className="text-lg w-2/4">
            We exist to bridge the gap between explorers and the city’s
            nightlife businesses.
          </p>
        </div>

        <div className="h-[300px]">
          <Image
            src={OurPurpose}
            alt="OurPurpose"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OurGoals;
