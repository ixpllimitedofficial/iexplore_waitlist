import Image from "next/image";
import Link from "next/link";
import { anton } from "@/app/fonts";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";

import iexploreFooter from "@/assets/img/MainWebsite/iexploreFooter.png";
import FacebookIcon from "@/assets/svg/FacebookIcon.svg";
import InstagramIcon from "@/assets/svg/InstagramIcon.svg";
import XIcon from "@/assets/svg/XIcon.svg";
import WhatsappIcon from "@/assets/svg/WhatsappIcon.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-[#F2F1E8] px-5 py-10 md:p-12 grid grid-cols-5 md:gap-x-10 lg:gap-x-40">
        <div className="col-span-full md:col-span-3">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h3
              className={`text-[#F2F1E8] text-[42px] md:text-5xl leading-tight ${anton.className} lg:w-2/4`}
            >
              SIGN UP TO OUR NEWSLETTER
            </h3>
            <p className="text-lg text-[#D1D1D1]">
              Stay in the loop and up to date with iExplore’s nightlife
              newsletter! Discover exclusive events, Hottest locations, and the
              latest trends to make every night unforgettable. Join our
              community and never miss out on the pulse of your city’s vibrant
              scene.
            </p>
          </div>

          <div className="mt-8 mb-10 md:mb-24 flex flex-col gap-2">
            <p className="text-lg font-bold">Email:</p>
            <Input
              className="bg-[#FFFFFF1A] px-3 py-6 rounded-none text-[#C8C8C8] border-t-0 border-r-0 border-l-0 border-b-gold-500 placeholder:text-base placeholder:text-[#4D4D4D] "
              placeholder="Email Address"
            />
            <Button className="bg-white transition duration-200 hover:bg-gold-500 text-[#322016] px-7 py-5 rounded-3xl font-extrabold md:mr-auto mt-3">
              Sign Up
            </Button>
          </div>
        </div>

        <div className="h-full col-span-full md:col-span-2">
          <div className="flex justify-evenly md:justify-start gap-5 lg:gap-16">
            <div className="flex flex-col items-center md:items-start gap-5 font-medium">
              <p className="font-bold text-xl text-[#F2F1E8">About Us</p>
              <Link href="/about-us" className="text-[#D1D1D1]">Who we are</Link>
              {/* <p className="text-[#D1D1D1]">Our Team</p> */}
              <Link href="/our-partners" className="text-[#D1D1D1]">Our Partners</Link>
              <Link href="/contact-us" className="text-[#D1D1D1]">Contact Us</Link>
            </div>

            <div className="flex flex-col items-center md:items-start gap-5 font-medium">
              <p className="font-bold text-xl text-[#F2F1E8">Vendor</p>
              <Link href="/vendor" className="text-[#D1D1D1]">iExplore vendor</Link>
              <Link href="/all-vendors" className="text-[#D1D1D1]">All Vendors</Link>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center md:items-start gap-5 font-medium">
            <p className="font-bold text-xl text-[#F2F1E8">Follow Us</p>

            <div className="flex gap-3">
              <div className="footerIcon">
                <Image
                  src={FacebookIcon}
                  alt="FacebookIcon"
                  width={35}
                  height={35}
                />
              </div>

              <div className="footerIcon">
                <Image src={XIcon} alt="XIcon" width={35} height={35} />
              </div>

              <div className="footerIcon">
                <Image
                  src={InstagramIcon}
                  alt="InstagramIcon"
                  width={35}
                  height={35}
                />
              </div>

              {/* <div className="footerIcon">
                <Image
                  src={WhatsappIcon}
                  alt="WhatsappIcon"
                  width={35}
                  height={35}
                />
              </div> */}
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="col-span-full mt-10 md:mt-0 border-b-2 border-[#4D4D4D] pb-2 flex flex-col-reverse md:flex-row gap-4 md:gap-10 justify-between text-[#D1D1D1] text-sm md:text-base">
          <p className="text-center md:text-left">All rights reserve. Maxx Technologies © 2024</p>

          <div className="flex justify-between gap-10">
            <p className="underline">Privacy Policy</p>
            <p className="underline">Terms of Use</p>
          </div>
        </div>
      </footer>

      <div className="bg-black">
        <Image src={iexploreFooter} alt="iexploreFooter" className="w-full" />
      </div>
    </>
  );
};

export default Footer;
