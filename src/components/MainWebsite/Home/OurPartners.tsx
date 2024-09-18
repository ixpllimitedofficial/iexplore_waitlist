import { anton } from "@/app/fonts";
import Image from "next/image";

import PartnerImg from "@/assets/img/MainWebsite/PartnerImg.png";
import HotBox from "@/assets/img/MainWebsite/AboutUs/HotBox.png";
import FlyingFish from "@/assets/img/MainWebsite/AboutUs/FlyingFish.png";
import ClubQuilox from "@/assets/img/MainWebsite/AboutUs/ClubQuilox.png";
import StageLagos from "@/assets/img/MainWebsite/AboutUs/StageLagos.png";

const OurPartners = () => {
  return (
    <section
      className="my-20"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <h3
        className={`text-gold-500 text-center text-4xl md:text-5xl ${anton.className} `}
      >
        {/* MEET OUR <span className="text-white"> PARTNERS</span> */}
        MEET OUR PARTNERS
      </h3>

      <div className="mt-3 px-10 py-5 flex gap-3 flex-wrap justify-evenly">
        <Image
          src={HotBox}
          alt="HotBox"
          className="h-[100px] lg:h-full w-auto"
        />
        <Image
          src={FlyingFish}
          alt="FlyingFish"
          className="h-[100px] lg:h-full w-auto"
        />
        <Image
          src={ClubQuilox}
          alt="ClubQuilox"
          className="h-[100px] lg:h-full w-auto"
        />
        <Image
          src={StageLagos}
          alt="StageLagos"
          className="h-[100px] lg:h-full w-auto"
        />
      </div>
    </section>
  );
};

export default OurPartners;
