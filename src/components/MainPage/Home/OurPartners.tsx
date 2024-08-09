import { anton } from "@/app/fonts";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import PartnerImg from "@/assets/img/MainWebsite/PartnerImg.png";

const OurPartners = () => {
  return (
    <>
      <h3 className={`text-gold-500 text-center text-4xl md:text-5xl ${anton.className} `}>
        MEET OUR PARTNERS
      </h3>

      <div className="px-10 py-5 flex gap-3 flex-wrap justify-evenly">
        {[1, 2, 3, 4, 5,].map((item) => {
          return (
            <Image key={item} src={PartnerImg} alt="NewsImg" className="h-[60px] md:h-full w-auto" />
          );
        })}
      </div>
    </>
  );
};

export default OurPartners;
