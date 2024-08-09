import { anton } from "@/app/fonts";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import QuoteRightIcon from "@/assets/svg/MainWebsite/QuoteRightIcon.svg";
import QuoteLeftIcon from "@/assets/svg/MainWebsite/QuoteLeftIcon.svg";

import AboutCEOimg3 from "@/assets/img/MainWebsite/AboutCEOimg3.png";
import CEOimg from "@/assets/img/MainWebsite/AboutCEOimg1.png";
import AboutCEOimg1 from "@/assets/img/MainWebsite/AboutCEOimg2.png";

import OwolabiMustapha from "@/assets/img/MainWebsite/OwolabiMustapha.png";

const AboutCEO = () => {
  return (
    <section className="bg-[#F2F1E8] w-full px-3 md:px-14 py-10 md:py-20 grid grid-cols-2 md:gap-10">
      <div className="relative col-span-full md:col-span-1">
        {/* image 1 */}
        <Image
          src={AboutCEOimg1}
          alt="AboutCEOimg1"
          className="hidden md:block relative left-12"
        />

        {/* image 3 */}
        <Image
          src={AboutCEOimg3}
          alt="AboutCEOimg3"
          className="hidden md:block mt-24"
        />

        {/* image 1 */}
        <Image
          src={CEOimg}
          alt="CEOimg"
          className="mx-auto md:absolute top-36 right-0"
        />
      </div>

      <div className="col-span-full md:col-span-1">
        <Image
          src={QuoteLeftIcon}
          alt="QuoteLeftIcon"
          className="hidden md:block"
        />

        <div className="md:w-[80%] mx-auto">
          <p className="text-[#0E1111] leading-loose text-lg text-center md:text-left md:text-xl font-medium mt-5">
            Our app revolutionizes the nightlife experience in Africa, born from
            a passion to connect explorers with the best spots in their city.
            We’re not just an app; we’re your gateway to deeper connections and
            unforgettable nights. Discover, enjoy, and thrive with us as your
            nightlife companion.
          </p>
          {/* <p className="italic text-[#E1B141] text-2xl w-[80%] mx-auto mt-5">
          Owolabi Mustapha
          </p> */}
          <Image
            src={OwolabiMustapha}
            alt="OwolabiMustapha"
            className="my-3 mx-auto md:mx-0"
          />
          <h3
            className={`text-[#0E1111] text-3xl text-center md:text-left mt-3 ${anton.className} `}
          >
            MD/CEO IEXPLORE
          </h3>
        </div>

        <Image
          src={QuoteRightIcon}
          alt="QuoteRightIcon"
          className="hidden md:block ml-auto mr-16"
        />

        <div className="flex justify-center md:justify-start mt-2 md:mt-0">
          <Button className="md:ml-16 bg-[#0E1111] text-[#F2F1E8] transition duration-100 hover:bg-[#E1B141] hover:text-[#0E1111] px-10 py-6 rounded-3xl font-bold text-lg">
            More about us <ArrowRightIcon className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;
