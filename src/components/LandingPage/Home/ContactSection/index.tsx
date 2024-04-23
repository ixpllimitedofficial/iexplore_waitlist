import Image from "next/image";
import MailSvg from "@/assets/svg/LandingPageSvg/MailSvg.svg";
import PhoneSvg from "@/assets/svg/LandingPageSvg/PhoneSvg.svg";
import WhatsappSvg from "@/assets/svg/LandingPageSvg/WhatsappSvg.svg";
import LocationIcon from "@/assets/svg/LandingPageSvg/LocationIcon.svg";
import AppButton from "@/components/UI/Button/AppButton";

const index = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-5 md:px-10 gap-10 w-[80vw] bg-[#FEFAF5] py-3 mt-36 text-black mb-10 mx-auto rounded-3xl">
      <div className="flex flex-col gap-4 lg:w-[45%]">
        <h1 className="text-xl md:text-2xl">
          Get in touch, we will love to hear from you{" "}
          <span className="font-bold">Anytime.</span>
        </h1>

        {/* divider */}
        <div className="border-t-2 border-[#979797] w-full"></div>

        <div className="flex gap-1">
          <Image src={LocationIcon} alt="LocationIcon" height={25} className="self-start" />
          <p className="text-lg font-semibold">No 13b, Aroyewun street, Ramat Estate, Ogudu GRA. Lagos, Nigeria.</p>
        </div>

        <div className="flex items-center gap-1">
          <Image src={MailSvg} alt="MailSvg" height={25} />
          <p className="text-lg font-semibold">support@explore.com</p>
        </div>

        <div className="flex items-center gap-1">
          <Image src={PhoneSvg} alt="PhoneSvg" height={25} />
          <p className="text-lg font-semibold">08122384172</p>
        </div>

        <div className="flex items-center gap-1">
          <Image src={WhatsappSvg} alt="WhatsappSvg" height={25} />
          <p className="text-lg font-semibold">
            Click here to chat with us on WhatsApp
          </p>
        </div>
      </div>

      {/* phone image */}
      <div className="bg-white p-5 flex flex-col gap-5 w-full lg:w-[45%] rounded-3xl shadow-xl relative lg:-top-20">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#FEFAF5] px-3 py-4 rounded-xl text-[#C8C8C8] border-none focus:outline-none  focus:ring-1 focus:ring-[#C8C8C8] w-full"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="bg-[#FEFAF5] px-3 py-4 rounded-xl text-[#C8C8C8] border-none focus:outline-none  focus:ring-1 focus:ring-[#C8C8C8] w-full"
        />

        <textarea
          className="resize-none bg-[#FEFAF5] px-3 py-4 rounded-xl text-[#C8C8C8] border-none focus:outline-none  focus:ring-1 focus:ring-[#C8C8C8] w-full h-[300px]"
          placeholder="Message"
        />

        <AppButton btnText="Send Message" className="text-black bg-[#E1BD8A]" />
      </div>
    </section>
  );
};

export default index;
