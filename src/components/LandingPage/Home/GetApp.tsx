import GetAppImage from "@/assets/img/GetAppImage.png";
import GetAppPhonesImage from "@/assets/img/LandingPage/GetAppPhonesImage.png";
import AppStoreImage from "@/assets/img/AppStoreImage.png";
import GooglePlayImage from "@/assets/img/GooglePlayImage.png";

import Image from "next/image";

const GetApp = () => {
  return (
    <section
      style={{ backgroundImage: `url(${GetAppImage.src})` }}
      className="relative flex flex-col items-center justify-center w-[85vw] bg-no-repeat bg-cover bg-center mb-10 mx-auto rounded-3xl"
    >
      <div className="text-center mt-10 flex flex-col gap-6">
        <h1 className="text-2xl md:text-5xl">
          GET YOUR FRIENDS IN! <br />
          <span className="text-[#E1BD8A] italic font-bold">
            GET EVERYONE
          </span>{" "}
          IN!
        </h1>
        <p className="md:text-lg lg:text-xl font-bold">
          Download and enjoy our app with your friends with{" "}
          <span className="font-bold italic">ease!</span>
        </p>

        <div className="flex justify-center gap-3 cursor-pointer">
          <Image src={AppStoreImage} alt="AppStoreImage" className="h-8 w-auto md:h-12" />
          <Image src={GooglePlayImage} alt="GooglePlayImage" className="h-8 w-auto md:h-12" />
        </div>
      </div>

      {/* phone image */}
      <Image
        src={GetAppPhonesImage}
        alt="GetAppPhonesImage"
        className=""
      />
    </section>
  );
};

export default GetApp;
