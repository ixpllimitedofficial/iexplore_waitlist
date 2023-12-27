"use client";

import AppButton from "@/components/UI/Button/AppButton";
import GetAppImage from "@/assets/img/GetAppImage.png";
import GetAppPhoneImage from "@/assets/img/GetAppPhoneImage.png";
import AppStoreImage from "@/assets/img/AppStoreImage.png";
import GooglePlayImage from "@/assets/img/GooglePlayImage.png";

import Image from "next/image";

const GetApp = () => {
  return (
    <section
      style={{ backgroundImage: `url(${GetAppImage.src})` }}
      className="relative flex items-center justify-center h-[250px] md:h-[400px] lg:h-[600px] w-[90vw] md:w-[85vw] bg-no-repeat bg-cover bg-center my-10 lg:my-36 mx-auto rounded-3xl"
    >
      <div className="absolute left-5 md:left-8 lg:w-[60%]">
        <h1 className="font-bold text-2xl md:text-5xl lg:text-6xl">
          GET YOUR FRIENDS IN! <br />
          <span className="text-[#E1BD8A] italic font-bold">
            GET EVERYONE
          </span>{" "}
          IN!
        </h1>
        <p className="md:text-lg lg:text-2xl lg:w-[70%] my-2 lg:my-8">
          Download and enjoy our app with your friends with{" "}
          <span className="font-bold italic">ease!</span>
        </p>

        <div className="flex gap-3 cursor-pointer">
          <Image src={AppStoreImage} alt="AppStoreImage" className="h-8 w-auto md:h-14" />
          <Image src={GooglePlayImage} alt="GooglePlayImage" className="h-8 w-auto md:h-14" />
        </div>
      </div>

      {/* phone image */}
      <Image
        src={GetAppPhoneImage}
        alt="GetAppPhoneImage"
        className="absolute right-10 hidden lg:block"
      />
    </section>
  );
};

export default GetApp;
