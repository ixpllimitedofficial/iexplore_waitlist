/* eslint-disable react/no-unescaped-entities */
import GetAppImage from "@/assets/img/LandingPage/GetAppImage.jpeg";
import GetAppPhonesImage from "@/assets/img/LandingPage/GetAppPhonesImage.png";
import AppStoreImage from "@/assets/img/AppStoreImage.png";
import GooglePlayImage from "@/assets/img/GooglePlayImage.png";

import Image from "next/image";

const GetApp = () => {
  return (
    <section
      style={{ backgroundImage: `url(${GetAppImage.src})` }}
      className="relative flex flex-col items-center justify-center w-[85vw] bg-no-repeat bg-cover bg-center mb-10 mx-auto rounded-3xl pt-10 md:pt-16"
    >
      <div className="text-center px-2 flex flex-col gap-3 lg:gap-6 z-50">
        <div>
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
            UNLOCK YOUR CITY'S SECRETS: <br />
          </h1>
          <p className="text-gold-500 text-lg md:text-4xl lg:text-5xl font-medium w-4/5 mx-auto italic">
            YOUR NIGHT'S ADVENTURE BEGINS HERE!"
          </p>
        </div>
        <p className="px-10 text-sm md:text-base lg:text-xl font-medium">
          Download and enjoy our app with your friends with{" "}
          <span className="font-bold italic">ease!</span>
        </p>

        <div className="flex justify-center gap-3 cursor-pointer">
          <Image
            src={AppStoreImage}
            alt="AppStoreImage"
            className="h-8 w-auto md:h-12"
          />
          <Image
            src={GooglePlayImage}
            alt="GooglePlayImage"
            className="h-8 w-auto md:h-12"
          />
        </div>
      </div>

      {/* phone image */}
      <Image src={GetAppPhonesImage} alt="GetAppPhonesImage" className="z-50" />

      <div className="absolute top-0 left-0 bg-[#000000b9] h-full w-full"></div>
    </section>
  );
};

export default GetApp;
