import Image from "next/image";
import MailSvg from "@/assets/svg/LandingPageSvg/MailSvg.svg";
import PhoneSvg from "@/assets/svg/LandingPageSvg/PhoneSvg.svg";
import WhatsappSvg from "@/assets/svg/LandingPageSvg/WhatsappSvg.svg";
import LocationIcon from "@/assets/svg/LandingPageSvg/LocationIcon.svg";
import AppButton from "@/components/UI/Button/AppButton";
import { Button } from "@/components/UI/button";

const index = () => {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between px-5 py-7 md:p-12 lg:py-3 gap-10 w-[90vw] md:w-[85vw] bg-[#FFC000] mt-10 md:mt-36 text-black mb-10 mx-auto rounded-3xl"
      id="contact-us"
    >
      <div className="flex flex-col gap-4 lg:w-[45%]">
        <h1 className="md:text-2xl lg:text-3xl font-bold">
          CONTACT US, WE WOULD LOVE TO HEAR FROM YOU.
          {/* <span className="font-bold">Anytime.</span> */}
        </h1>

        {/* divider */}
        <div className="border-t-2 border-[#979797] w-full"></div>

        <div className="flex gap-1">
          <Image
            src={LocationIcon}
            alt="LocationIcon"
            height={25}
            className="self-start"
          />
          <p className="text-sm md:text-lg font-semibold">
            No 13b, Aroyewun street, Ramat Estate, Ogudu GRA. Lagos, Nigeria.
          </p>
        </div>

        <div className="flex items-center gap-1">
          <Image
            src={MailSvg}
            alt="MailSvg"
            height={25}
            className="self-start"
          />
          <p className="text-sm md:text-lg font-semibold">
            support@explore.com
          </p>
        </div>

        <div className="flex items-center gap-1">
          <Image
            src={PhoneSvg}
            alt="PhoneSvg"
            height={25}
            className="self-start"
          />
          <p className="text-sm md:text-lg font-semibold">08122384172</p>
        </div>

        <div className="flex items-center gap-1">
          <Image
            src={WhatsappSvg}
            alt="WhatsappSvg"
            height={25}
            className="self-start"
          />
          <p className="text-sm md:text-lg font-semibold">
            Click here to chat with us on WhatsApp
          </p>
        </div>
      </div>

      {/* phone image */}
      <div className="bg-[#FFC000] p-5 flex flex-col gap-5 w-full lg:w-[45%] rounded-3xl shadow-xl relative lg:-top-20">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#FEFAF5] px-3 py-4 rounded-xl text-[#C8C8C8] border-none placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-[#C8C8C8] w-full"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="bg-[#FEFAF5] px-3 py-4 rounded-xl text-[#C8C8C8] border-none placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-[#C8C8C8] w-full"
        />

        <textarea
          className="resize-none bg-[#FEFAF5] px-3 py-4 rounded-xl text-[#C8C8C8] border-none placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-[#C8C8C8] w-full h-[300px]"
          placeholder="Message"
        />

        <Button className="text-black bg-[#FEFAF5] mx-auto hover:bg-[#fefaf5be]">
          Send Message
        </Button>
      </div>
    </section>
  );
};

export default index;
