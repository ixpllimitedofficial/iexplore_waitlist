import { anton } from "@/app/fonts";
import { Button } from "@/components/UI/button";

import GetStartedImg1 from "@/assets/img/MainWebsite/GetStartedImg1.png";
import GetStartedImg2 from "@/assets/img/MainWebsite/GetStartedImg2.png";
import GetStartedImg3 from "@/assets/img/MainWebsite/GetStartedImg3.png";
import GetStartedImg4 from "@/assets/img/MainWebsite/GetStartedImg4.png";
import Image from "next/image";
import JoinWaitlistFooter from "../JoinWaitlistFooter";
import Link from "next/link";

const GetStarted = () => {
  return (
    <>
      <section className="bg-gold-500 px-5 py-10 md:py-16 lg:p-48 relative">
        <Image
          src={GetStartedImg1}
          alt="GetStartedImg1"
          className="hidden lg:block absolute left-20 top-24 -z-9"
        />
        <Image
          src={GetStartedImg2}
          alt="GetStartedImg2"
          className="hidden lg:block absolute right-14 top-20"
        />
        <Image
          src={GetStartedImg3}
          alt="GetStartedImg3"
          className="hidden lg:block absolute bottom-20 left-36"
        />
        <Image
          src={GetStartedImg4}
          alt="GetStartedImg4"
          className="hidden lg:block absolute right-44 bottom-24"
        />

        <div className="flex flex-col items-center gap-5 text-center">
          <h3
            className={`text-[#322016] text-4xl md:text-6xl ${anton.className}`}
          >
            ELEVATE YOUR BUSINESS <br /> EXPERIENCE WITH <br /> IEXPLORE VENDOR
            NOW
          </h3>
          <Link href="/">
            <Button className="bg-white transition duration-200 hover:bg-[#322016] hover:text-white text-[#322016] px-7 py-5 md:px-10 md:py-6 rounded-3xl font-bold text-base">
              Get early access
            </Button>
          </Link>
        </div>
      </section>

      <JoinWaitlistFooter />
    </>
  );
};

export default GetStarted;
