import { anton } from "@/app/fonts";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import PartnerImg from "@/assets/img/MainWebsite/PartnerImg.png";

const OurPartners = () => {
  return (
    <>
      <h3 className={`text-gold-500 text-center text-5xl ${anton.className} `}>
        MEET OUR PARTNERS
      </h3>

      <div className="p-10 flex gap-5 flex-wrap justify-evenly">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <Image key={item} src={PartnerImg} alt="NewsImg" className="" />
          );
        })}
      </div>
    </>
  );
};

export default OurPartners;
