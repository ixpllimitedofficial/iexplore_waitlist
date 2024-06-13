/* eslint-disable react/no-unescaped-entities */
"use client";

import AppButton from "@/components/UI/Button/AppButton";
import GetAppImage from "@/assets/img/GetAppImage.png";
import GetAppPhoneImage from "@/assets/img/GetAppPhoneImageNew2.png";
import AppStoreImage from "@/assets/img/AppStoreImage.png";
import GooglePlayImage from "@/assets/img/GooglePlayImage.png";

import Image from "next/image";

const GetApp = () => {
  return (
    <section
      style={{ backgroundImage: `url(${GetAppImage.src})` }}
      className="relative flex items-center justify-center h-[250px] md:h-[400px] lg:h-[600px] w-[90vw] md:w-[85vw] bg-no-repeat bg-cover bg-center my-10 lg:my-36 mx-auto rounded-3xl"
    >
      <div className="absolute left-5 md:left-8 lg:w-[60%] flex flex-col gap-2 z-50">
        <div>
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
            UNLOCK YOUR CITY'S SECRETS: <br />
          </h1>
          <p className="text-gold-500 text-lg md:text-4xl lg:text-5xl font-medium italic">
            YOUR NIGHT'S ADVENTURE BEGINS HERE!"
          </p>
        </div>
        <p className="text-sm md:text-base lg:text-xl font-medium">
          Download and enjoy our app with your friends with{" "}
          <span className="font-bold italic">ease!</span>
        </p>

        <div className="flex gap-3 cursor-pointer">
          <Image
            src={AppStoreImage}
            alt="AppStoreImage"
            className="h-6 w-auto md:h-10"
          />
          <Image
            src={GooglePlayImage}
            alt="GooglePlayImage"
            className="h-6 w-auto md:h-10"
          />
        </div>
      </div>

      {/* phone image */}
      <Image
        src={GetAppPhoneImage}
        alt="GetAppPhoneImage"
        className="absolute h-[720px] w-auto right-10 hidden lg:block z-50"
      />

      <div className="absolute top-0 left-0 bg-[#00000081] h-full w-full"></div>
    </section>
  );
};

export default GetApp;
