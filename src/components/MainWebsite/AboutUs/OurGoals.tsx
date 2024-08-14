import Image from "next/image";
import { anton } from "@/app/fonts";
import OurVision from "@/assets/img/MainWebsite/AboutUs/OurVision.png";
import OurMission from "@/assets/img/MainWebsite/AboutUs/OurMission.png";
import OurPurpose from "@/assets/img/MainWebsite/AboutUs/OurPurpose.png";

const OurGoals = () => {
  return (
    <section className="mt-16 flex flex-col gap-10">
      {/* vision */}
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-2/4 p-10 bg-[#F2F1E8] text-[#0E0E0E] flex flex-col justify-center gap-3">
          <h1
            className={`text-5xl ${anton.className} text-center md:text-start`}
          >
            OUR VISION
          </h1>
          <p className="text-lg text-center md:text-start">
            To be the ultimate nightlife companion and go-to nightlife guide,
            sparking unforgettable adventures where explorers discover, connect,
            and experience the vibrant pulse of the night.
          </p>
        </div>

        <div className="h-[200px] md:h-[300px] md:w-2/4">
          <Image
            src={OurVision}
            alt="OurVision"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* mission */}
      <div className="flex flex-col-reverse md:flex-row-reverse">
        <div className="md:w-2/4 p-10 bg-gold-500 text-[#0E0E0E] flex flex-col md:items-end justify-center gap-3">
          <h1 className={`text-5xl ${anton.className} text-center md:text-start`}>OUR MISSION</h1>
          <p className="text-lg md:w-3/4 text-center md:text-right">
            To build and sustain a vibrant nightlife ecosystem where explorers
            and vendors are empowered  to seamlessly connect to the pulse of the
            city’s nightlife
          </p>
        </div>

        <div className="h-[200px] md:h-[300px] md:w-2/4">
          <Image
            src={OurMission}
            alt="OurMission"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* purpose */}
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-2/4 p-10 bg-[#F2F1E8] text-[#0E0E0E] flex flex-col justify-center gap-3">
          <h1 className={`text-5xl ${anton.className} text-center md:text-start`}>OUR PURPOSE</h1>
          <p className="text-lg md:w-2/4 text-center md:text-start">
            We exist to bridge the gap between explorers and the city’s
            nightlife businesses.
          </p>
        </div>

        <div className="h-[200px] md:h-[300px] md:w-2/4">
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
