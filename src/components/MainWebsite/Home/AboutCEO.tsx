import { anton } from "@/app/fonts";
import Image from "next/image";
import { Button } from "@/components/UI/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import QuoteRightIcon from "@/assets/svg/MainWebsite/QuoteRightIcon.svg";
import QuoteLeftIcon from "@/assets/svg/MainWebsite/QuoteLeftIcon.svg";

import CEOImage from "@/assets/img/MainWebsite/CEOImage1.png";
import CEOImage2 from "@/assets/img/MainWebsite/CEOImage2.png";
import CEOImage3 from "@/assets/img/MainWebsite/CEOImage3.png";

import OwolabiMustapha from "@/assets/img/MainWebsite/OwolabiMustapha.png";
import Link from "next/link";

const AboutCEO = () => {
  return (
    <section className="bg-[#F2F1E8] w-full px-10 lg:px-14 py-10 md:py-16 grid grid-cols-2 gap-5 lg:gap-10 mt-10">
      <div className="relative col-span-full md:col-span-1">
        {/* image 1 */}
        <Image
          src={CEOImage2}
          alt="CEOImage2"
          className="hidden lg:block relative left-16 h-[250px] w-auto"
        />

        {/* image 3 */}
        <Image
          src={CEOImage3}
          alt="CEOImage3"
          className="hidden lg:block mt-24 h-[200px] w-auto"
        />

        {/* image 1 */}
        <Image
          src={CEOImage}
          alt="CEOimg"
          className="w-full lg:w-auto md:mx-auto lg:absolute top-36 right-0 "
        />
      </div>

      <div className="col-span-full md:col-span-1">
        <Image
          src={QuoteLeftIcon}
          alt="QuoteLeftIcon"
          className="hidden md:block"
        />

        <div className="lg:w-[80%] mx-auto">
          <p className="text-[#0E1111] leading-loose text-lg text-center md:text-left md:text-xl font-medium mt-3">
            Our app revolutionizes the nightlife experience in Africa, born from
            a passion to connect explorers with the best spots in their city.
            We’re not just an app; we’re your gateway to deeper connections and
            unforgettable nights. Discover, enjoy, and thrive with us as your
            nightlife companion.
          </p>
          <Image
            src={OwolabiMustapha}
            alt="OwolabiMustapha"
            className="my-3 md:my-2 mx-auto md:mx-0 h-[40px] w-auto"
          />
          <h3
            className={`text-[#322016] text-3xl md:text-4xl text-center md:text-left ${anton.className} `}
          >
            MD/CEO IEXPLORE
          </h3>
        </div>

        <Image
          src={QuoteRightIcon}
          alt="QuoteRightIcon"
          className="hidden md:block ml-auto lg:mr-16"
        />

        <div className="flex justify-center md:justify-start mt-3 md:mt-0">
          <Link href="/about-us">
            <Button className="lg:ml-16 bg-[#322016] text-[#F2F1E8] transition duration-100 hover:bg-[#E1B141] hover:text-[#0E1111] px-8 py-6 rounded-3xl font-bold text-lg">
              More about us <ArrowRightIcon className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCEO;
