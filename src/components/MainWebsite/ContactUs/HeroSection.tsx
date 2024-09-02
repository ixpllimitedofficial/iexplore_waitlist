import Image from "next/image";

import ContactUsImg from "@/assets/img/MainWebsite/ContactUsImg.png";
import { Input } from "@/components/UI/input";
import { Button } from "@/components/UI/button";
import { Label } from "@/components/UI/label";
import { Textarea } from "@/components/UI/textarea";

import CallIconSvg from "@/assets/svg/MainWebsite/CallIconSvg.svg";
import EmailIconSvg from "@/assets/svg/MainWebsite/EmailIconSvg.svg";
import AddressIconSvg from "@/assets/svg/MainWebsite/AddressIconSvg.svg";

const HeroSection = () => {
  return (
    <section className="relative grid grid-cols-2 gap-16 lg:gap-10 pt-3 pb-16 px-3">
      <div className="col-span-full lg:col-span-1">
        <p className="text-lg md:text-xl text-[#F6F6F6] text-center md:text-start">
          For more information, questions or comments: send us an email or give
          us a call! We are always open to a conversation, advice or feedback
          and would love to get in touch with you.
        </p>

        <div className="flex flex-col justify-between gap-10 mt-8">
          <div>
            <Label htmlFor="name" className="text-lg text-[#F6F6F6]">
              Name:
            </Label>
            <Input
              id="name"
              className="bg-[#FFFFFF1A] px-3 py-6 rounded-none text-[#C8C8C8] border-t-0 border-r-0 border-l-0 border-b-gold-500 placeholder:text-base placeholder:text-[#4D4D4D] mt-3"
              // placeholder="Email Address"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-lg text-[#F6F6F6]">
              Email:
            </Label>
            <Input
              id="email"
              className="bg-[#FFFFFF1A] px-3 py-6 rounded-none text-[#C8C8C8] border-t-0 border-r-0 border-l-0 border-b-gold-500 placeholder:text-base placeholder:text-[#4D4D4D] mt-3"
              // placeholder="Email Address"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-lg text-[#F6F6F6]">
              Message:
            </Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              className="bg-[#FFFFFF1A] px-3 py-6 rounded-none text-[#C8C8C8] border-t-0 border-r-0 border-l-0 border-b-gold-500 placeholder:text-base placeholder:text-[#4D4D4D] mt-3 resize-none"
              rows={10}
            />
          </div>

          <Button className="bg-gold-500 transition duration-200 hover:bg-white text-[#322016] px-10 py-6 rounded-3xl font-bold text-base mx-auto md:mr-auto">
            Send message
          </Button>
        </div>
      </div>

      <div className="relative col-span-full lg:col-span-1 flex flex-col gap-4 md:gap-8">
        {/* image 1 */}
        <Image
          src={ContactUsImg}
          alt="ContactUsImg"
          className="w-full h-auto "
        />

        <div className="flex items-center gap-3">
          <Image src={CallIconSvg} alt="CallIconSvg" width={35} height={35} />

          <p className="text-lg md:text-xl text-[#F6F6F6] text-start">
            +234 801 234 5678 <br /> +234 709 876 5432{" "}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Image src={EmailIconSvg} alt="EmailIconSvg" width={35} height={35} />

          <p className="text-lg md:text-xl text-[#F6F6F6] text-start">
            info@iexploreonline.com
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src={AddressIconSvg}
            alt="AddressIconSvg"
            width={35}
            height={35}
          />

          <p className="text-lg md:text-xl text-[#F6F6F6] text-start">
            13b, Aroyewun street, Ramat CR, Ogudu GRA, Ojota, Lagos State,
            Nigeria
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
