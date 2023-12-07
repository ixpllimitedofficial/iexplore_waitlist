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
      className="relative flex items-center justify-center h-[600px] bg-no-repeat bg-cover bg-center my-36 w-[90vw] mx-auto rounded-3xl"
    >
      <div className="absolute left-8 w-[60%]">
        <h1 className="text-7xl">
          GET YOUR FRIENDS IN! <br />
          <span className="text-[#E1BD8A] italic font-bold">
            GET EVERYONE
          </span>{" "}
          IN!
        </h1>
        <p className="text-3xl w-[70%] my-10">
          Download and enjoy our app with your friends with{" "}
          <span className="font-bold italic">ease!</span>
        </p>

        <div className="flex gap-3 cursor-pointer">
          <Image src={AppStoreImage} alt="AppStoreImage" />
          <Image src={GooglePlayImage} alt="GooglePlayImage" />
        </div>
      </div>

      {/* phone image */}
      <Image
        src={GetAppPhoneImage}
        alt="GetAppPhoneImage"
        className="absolute right-10"
      />
    </section>
  );
};

export default GetApp;
